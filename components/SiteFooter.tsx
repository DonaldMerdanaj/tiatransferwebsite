import { routes } from "@/lib/data/routes";
import { Icon } from "@/components/Icon";
const popular = ["tirana", "durres", "vlore", "sarande", "ksamil"];
const explore = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "/routes" },
  { label: "Our Fleet", href: "/fleet" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];
const information = [
  { label: "Frequently Asked Questions", href: "/faq" },
  { label: "Travel Guides", href: "/blog" },
  { label: "Privacy Policy", href: "/legal/privacy-policy" },
  { label: "Terms and Conditions", href: "/legal/terms-and-conditions" },
  { label: "Cancellation Policy", href: "/legal/cancellation-policy" },
];
export function SiteFooter() {
  return (
    <footer className="premium-footer">
      <div className="content-width">
        <div className="footer-cta">
          <div>
            <p className="footer-eyebrow">Your arrival, taken care of</p>
            <h2>Ready for your airport transfer?</h2>
            <p className="footer-cta-description">
              Choose your destination and start planning your journey across Albania.
            </p>
          </div>
          <a className="button button-red footer-book" href="/booking">
            Book Now <Icon name="arrow" />
          </a>
        </div>
        <div className="footer-columns">
          <div className="footer-overview">
            <h2>Private transfers across Albania.</h2>
            <p>
              A simple start to your stay. Choose your route, review your fare and
              book a private transfer from Tirana International Airport.
            </p>
            <a className="footer-contact" href="/contact">
              Contact our team <Icon name="arrow" />
            </a>
            <p className="footer-location">
              <Icon name="pin" /> Tirana International Airport, Albania
            </p>
          </div>
          <nav aria-labelledby="footer-explore-title">
            <h2 id="footer-explore-title">Explore</h2>
            <ul>
              {explore.map((link) => (
                <li key={link.href}><a href={link.href}>{link.label}</a></li>
              ))}
            </ul>
          </nav>
          <nav aria-labelledby="footer-transfers-title">
            <h2 id="footer-transfers-title">Popular transfers</h2>
            <ul>
              {popular.map((slug) => {
                const route = routes.find((r) => r.slug === `tirana-airport-to-${slug}`);
                return route ? (
                  <li key={slug}>
                    <a href={`/routes/${route.slug}`}>Tirana Airport to {route.city}</a>
                  </li>
                ) : null;
              })}
            </ul>
            <a className="footer-all-routes" href="/routes">
              All destinations <Icon name="arrow" />
            </a>
          </nav>
          <nav className="footer-information" aria-labelledby="footer-information-title">
            <h2 id="footer-information-title">Useful information</h2>
            <ul>
              {information.map((link) => (
                <li key={link.href}><a href={link.href}>{link.label}</a></li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} TiaTransfer. All rights reserved.</p>
          <p>From Tirana Airport. Across Albania.</p>
        </div>
      </div>
    </footer>
  );
}
