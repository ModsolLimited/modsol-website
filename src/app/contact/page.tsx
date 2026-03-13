import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import SectionLabel from "@/components/ui/SectionLabel";
import AccentLine from "@/components/ui/AccentLine";

export const metadata: Metadata = {
  title: "Contact — Get In Touch With Modsol",
  description:
    "Start a conversation with the Modsol team. Tell us about your project and we'll get back to you within one business day.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title="Start a Conversation"
        subtitle="Tell us about your project. We'll get back to you within one business day."
      />

      <section className="py-24 lg:py-32" style={{ background: "#000000" }}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Form */}
            <div className="lg:col-span-7">
              <SectionLabel className="mb-8">Enquiry Form</SectionLabel>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-white/40 uppercase mb-2"
                      style={{ fontFamily: "'Space Mono', monospace", fontSize: "9px", letterSpacing: "0.2em" }}
                    >
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 text-white bg-transparent border border-white/20 focus:border-[#C6FF02] outline-none transition-colors"
                      style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9375rem" }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-white/40 uppercase mb-2"
                      style={{ fontFamily: "'Space Mono', monospace", fontSize: "9px", letterSpacing: "0.2em" }}
                    >
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 text-white bg-transparent border border-white/20 focus:border-[#C6FF02] outline-none transition-colors"
                      style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9375rem" }}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-white/40 uppercase mb-2"
                    style={{ fontFamily: "'Space Mono', monospace", fontSize: "9px", letterSpacing: "0.2em" }}
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 text-white bg-transparent border border-white/20 focus:border-[#C6FF02] outline-none transition-colors"
                    style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9375rem" }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-white/40 uppercase mb-2"
                    style={{ fontFamily: "'Space Mono', monospace", fontSize: "9px", letterSpacing: "0.2em" }}
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 text-white bg-transparent border border-white/20 focus:border-[#C6FF02] outline-none transition-colors"
                    style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9375rem" }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-white/40 uppercase mb-2"
                    style={{ fontFamily: "'Space Mono', monospace", fontSize: "9px", letterSpacing: "0.2em" }}
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 text-white bg-transparent border border-white/20 focus:border-[#C6FF02] outline-none transition-colors"
                    style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9375rem" }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="projectType"
                    className="block text-white/40 uppercase mb-2"
                    style={{ fontFamily: "'Space Mono', monospace", fontSize: "9px", letterSpacing: "0.2em" }}
                  >
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    className="w-full px-4 py-3 text-white bg-[#0A0A0A] border border-white/20 focus:border-[#C6FF02] outline-none transition-colors appearance-none"
                    style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9375rem" }}
                  >
                    <option value="">Select a project type</option>
                    <option value="events">Events</option>
                    <option value="exhibitions">Exhibitions</option>
                    <option value="hospitality">Hospitality</option>
                    <option value="retail">Retail</option>
                    <option value="brand-activation">Brand Activation</option>
                    <option value="temporary-offices">Temporary Offices</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="timeline"
                    className="block text-white/40 uppercase mb-2"
                    style={{ fontFamily: "'Space Mono', monospace", fontSize: "9px", letterSpacing: "0.2em" }}
                  >
                    Project Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    className="w-full px-4 py-3 text-white bg-[#0A0A0A] border border-white/20 focus:border-[#C6FF02] outline-none transition-colors appearance-none"
                    style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9375rem" }}
                  >
                    <option value="">Select a timeline</option>
                    <option value="under-1-month">Under 1 month</option>
                    <option value="1-3-months">1–3 months</option>
                    <option value="3-6-months">3–6 months</option>
                    <option value="6-plus-months">6+ months</option>
                    <option value="no-date">No firm date yet</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-white/40 uppercase mb-2"
                    style={{ fontFamily: "'Space Mono', monospace", fontSize: "9px", letterSpacing: "0.2em" }}
                  >
                    Project Brief *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Tell us about your project — scale, location, date, any specific requirements..."
                    className="w-full px-4 py-3 text-white bg-transparent border border-white/20 focus:border-[#C6FF02] outline-none transition-colors resize-none placeholder-white/20"
                    style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9375rem" }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#C6FF02] text-black py-4 uppercase font-semibold hover:bg-white transition-colors duration-200"
                  style={{ fontFamily: "'Space Mono', monospace", fontSize: "13px", letterSpacing: "0.12em" }}
                >
                  Send Enquiry
                </button>

                <p
                  className="text-white/20 text-xs text-center"
                  style={{ fontFamily: "'Space Mono', monospace", letterSpacing: "0.08em" }}
                >
                  We respond to all enquiries within one business day.
                </p>
              </form>
            </div>

            {/* Contact info */}
            <div className="lg:col-span-4 lg:col-start-9">
              <div className="sticky top-28">
                <SectionLabel className="mb-8">Contact Details</SectionLabel>

                <div className="space-y-8">
                  <div>
                    <AccentLine className="w-6 mb-4" />
                    <span
                      className="text-[#C6FF02] uppercase block mb-2"
                      style={{ fontFamily: "'Space Mono', monospace", fontSize: "9px", letterSpacing: "0.2em" }}
                    >
                      General Enquiries
                    </span>
                    <a
                      href="mailto:hello@modsol.co.uk"
                      className="text-white hover:text-[#C6FF02] transition-colors"
                      style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem" }}
                    >
                      hello@modsol.co.uk
                    </a>
                  </div>

                  <div>
                    <AccentLine className="w-6 mb-4" />
                    <span
                      className="text-[#C6FF02] uppercase block mb-2"
                      style={{ fontFamily: "'Space Mono', monospace", fontSize: "9px", letterSpacing: "0.2em" }}
                    >
                      Phone
                    </span>
                    <a
                      href="tel:+441234567890"
                      className="text-white hover:text-[#C6FF02] transition-colors"
                      style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem" }}
                    >
                      +44 (0) 1234 567 890
                    </a>
                  </div>

                  <div>
                    <AccentLine className="w-6 mb-4" />
                    <span
                      className="text-[#C6FF02] uppercase block mb-2"
                      style={{ fontFamily: "'Space Mono', monospace", fontSize: "9px", letterSpacing: "0.2em" }}
                    >
                      Head Office
                    </span>
                    <address
                      className="text-white/50 not-italic leading-relaxed"
                      style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9375rem" }}
                    >
                      Modsol Limited<br />
                      [Address Line 1]<br />
                      [Address Line 2]<br />
                      [City, Postcode]<br />
                      United Kingdom
                    </address>
                  </div>

                  <div>
                    <AccentLine className="w-6 mb-4" />
                    <span
                      className="text-[#C6FF02] uppercase block mb-2"
                      style={{ fontFamily: "'Space Mono', monospace", fontSize: "9px", letterSpacing: "0.2em" }}
                    >
                      Response Time
                    </span>
                    <p
                      className="text-white/50"
                      style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9375rem" }}
                    >
                      We respond to all project enquiries within one business day.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
