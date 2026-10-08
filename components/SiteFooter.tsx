import { routes } from "@/lib/data/routes";
const popular = ["tirana", "durres", "vlore", "sarande", "ksamil"];
export function SiteFooter() {
  return (
    <footer className="premium-footer">
      <div className="content-width footer-columns">
        <div>
          <a className="footer-logo" href="/" aria-label="TiaTransfer home">
            <img
              src="/images/tia-transfer-logo.webp"
              alt="TIA TRANSFER"
              width={361}
              height={176}
            />
          </a>
          <p>Professional private airport transfer services across Albania.</p>
          <a href="/contact">Contact our team →</a>
        </div>
        <div>
          <h2>Quick links</h2>
          <a href="/">Home</a>
          <a href="/routes">Destinations</a>
          <a href="/fleet">Our Fleet</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
        </div>
        <div>
          <h2>Popular transfers</h2>
          {popular.map((slug) => {
            const route = routes.find(
              (r) => r.slug === `tirana-airport-to-${slug}`,
            );
            return (
              route && (
                <a key={slug} href={`/routes/${route.slug}`}>
                  Tirana Airport to {route.city}
                </a>
              )
            );
          })}
        </div>
        <div>
          <h2>Information</h2>
          <a href="/faq">FAQ</a>
          <a href="/legal/privacy-policy">Privacy Policy</a>
          <a href="/legal/terms-and-conditions">Terms and Conditions</a>
          <a href="/legal/cancellation-policy">Cancellation Policy</a>
          <a href="/blog">Travel Guides</a>
        </div>
      </div>
      <div className="content-width footer-bottom">
        <p>© {new Date().getFullYear()} TiaTransfer. All rights reserved.</p>
        <p>Private transfers from Tirana International Airport.</p>
      </div>
    </footer>
  );
}
