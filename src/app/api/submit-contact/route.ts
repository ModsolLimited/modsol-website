import { NextRequest, NextResponse } from "next/server";

// Real, server-side anti-bot check for the contact form.
//
// The form's slide-puzzle "captcha" is purely a client-side UX element —
// anyone who skips the website and POSTs data directly to Netlify Forms
// bypasses it completely, with no server-side consequence. This endpoint
// is the real gate: the browser sends its data here first. We re-check
// every field rule the page already enforces (so nothing can skip the
// website and submit junk directly), plus a timing check — a genuine
// visitor takes several seconds to read and fill the form; a script that
// fires data straight at an endpoint does it instantly. Only submissions
// that pass both get forwarded on to Netlify Forms.

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRe = /^[\d\s+()-]{7,}$/;

// Generous on purpose — this only needs to catch instant, scripted
// submissions, not slow down a fast genuine visitor.
const MIN_FILL_TIME_MS = 3000;

const validSystems = ["modblock", "modwall", "modframe", "modlab", "unsure"];
const validSolutions = [
  "shows-festivals",
  "exhibitions-conference",
  "hospitality-restaurants",
  "retail-merchandise",
  "brand-activations",
  "experiential-marketing",
  "automotive-motorsport",
  "domestic-commercial",
  "other",
];

function countWords(text: string): number {
  return text.trim().split(/\s+/).filter((w) => w.length > 0).length;
}

export async function POST(request: NextRequest) {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const str = (v: unknown) => (typeof v === "string" ? v : "");
  const firstName = str(data.firstName);
  const lastName = str(data.lastName);
  const company = str(data.company);
  const email = str(data.email);
  const landline = str(data.landline);
  const mobile = str(data.mobile);
  const productSystem = str(data.productSystem);
  const solution = str(data.solution);
  const projectDescription = str(data.projectDescription);
  const formLoadedAt = Number(data.formLoadedAt);

  const hasLandline = landline.trim().length > 0;
  const hasMobile = mobile.trim().length > 0;

  const errors: string[] = [];
  if (!firstName.trim()) errors.push("firstName");
  if (!lastName.trim()) errors.push("lastName");
  if (!company.trim()) errors.push("company");
  if (!emailRe.test(email)) errors.push("email");
  if (!hasLandline && !hasMobile) errors.push("phone");
  if (hasLandline && !phoneRe.test(landline)) errors.push("landline");
  if (hasMobile && !phoneRe.test(mobile)) errors.push("mobile");
  if (!validSystems.includes(productSystem)) errors.push("productSystem");
  if (!validSolutions.includes(solution)) errors.push("solution");
  if (countWords(projectDescription) < 10) errors.push("projectDescription");
  if (!formLoadedAt || Date.now() - formLoadedAt < MIN_FILL_TIME_MS) {
    errors.push("timing");
  }

  if (errors.length > 0) {
    return NextResponse.json(
      { error: "Validation failed.", fields: errors },
      { status: 422 }
    );
  }

  const body = new URLSearchParams({
    "form-name": "contact",
    firstName,
    lastName,
    company,
    email,
    landline,
    mobile,
    productSystem,
    solution,
    projectDescription,
    "bot-field": "",
  });

  const formsUrl = new URL("/__forms.html", request.url).toString();

  try {
    const res = await fetch(formsUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body.toString(),
    });
    if (!res.ok) {
      return NextResponse.json({ error: "Upstream error." }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Network error." }, { status: 502 });
  }
}
