import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <h2>MODSOL</h2>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "9px", letterSpacing: "0.2em", color: "var(--yellow)", marginBottom: "12px", textTransform: "uppercase" }}>
              Build. Bold.
            </p>
            <p>Modular systems engineered for the next generation of temporary architecture. Events. Exhibitions. Hospitality. Retail.</p>
            <Link href="/contact" className="btn-primary" style={{ fontSize: "9px", padding: "12px 20px" }}>
              Get In Touch
            </Link>
          </div>

          <div className="footer-col">
            <h4>Products</h4>
            <ul>
              <li><Link href="/products/modblock">The Modblock</Link></li>
              <li><Link href="/products/modwall">The Modwall</Link></li>
              <li><Link href="/products/modframe">The Modframe</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Solutions</h4>
            <ul>
              <li><Link href="/solutions/shows-festivals">Shows & Festivals</Link></li>
              <li><Link href="/solutions/exhibitions-conference">Exhibitions & Conferences</Link></li>
              <li><Link href="/solutions/hospitality-restaurants">Hospitality & Restaurants</Link></li>
              <li><Link href="/solutions/retail-merchandise">Retail & Merchandise</Link></li>
              <li><Link href="/solutions/brand-activations">Brand Activations</Link></li>
              <li><Link href="/solutions/experiential-marketing">Experiential Marketing</Link></li>
              <li><Link href="/solutions/automotive-motorsport">Automotive & Motorsport</Link></li>
              <li><Link href="/solutions/domestic-commercial">Domestic & Commercial</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link href="/company">The Company</Link></li>
              <li><Link href="/company/team">The Team</Link></li>
              <li><Link href="/company/history">The History</Link></li>
              <li><Link href="/company/vision">The Vision</Link></li>
              <li><Link href="/projects">The Projects</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">
            &copy; {new Date().getFullYear()} Modsol Limited. All rights reserved. Registered in England &amp; Wales.
          </div>
          <div className="social-links">
            <a href="#" className="social-link">Li</a>
            <a href="#" className="social-link">Ig</a>
            <a href="#" className="social-link">X</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
