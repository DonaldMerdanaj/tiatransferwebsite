"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
const nav = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "/routes" },
  { label: "Our Fleet", href: "/fleet" },
  { label: "About Us", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];
export function SiteHeader({
  collapseOnScroll = false,
}: {
  collapseOnScroll?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = usePathname();
  const header = useRef<HTMLElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  const bookingLink = useRef<HTMLAnchorElement>(null);
  const moveFocusToBooking = useRef(false);
  const bookingOnly = collapseOnScroll && scrolled;
  useEffect(() => {
    if (!collapseOnScroll) return;
    const update = () => {
      const compact = window.scrollY > 120;
      if (compact) {
        const focused = document.activeElement;
        if (
          focused instanceof HTMLElement &&
          header.current?.contains(focused) &&
          focused !== bookingLink.current &&
          !focused.classList.contains("skip-link")
        ) {
          moveFocusToBooking.current = true;
        }
        setOpen(false);
      }
      setScrolled(compact);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [collapseOnScroll]);
  useEffect(() => {
    if (bookingOnly && moveFocusToBooking.current) {
      bookingLink.current?.focus({ preventScroll: true });
    }
    moveFocusToBooking.current = false;
  }, [bookingOnly]);
  function close() {
    setOpen(false);
  }
  return (
    <header
      ref={header}
      className={`site-header${bookingOnly ? " site-header--booking-only" : ""}`}
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          close();
          (bookingOnly ? bookingLink.current : button.current)?.focus();
        }
      }}
    >
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="nav-wrap">
        <a className="brand" href="/" aria-label="TiaTransfer home">
          <img
            src="/images/tia-transfer-logo.webp"
            alt="TIA TRANSFER"
            width={361}
            height={176}
            className="header-logo"
          />
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={
                (item.href === "/" ? path === "/" : path.startsWith(item.href))
                  ? "page"
                  : undefined
              }
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a ref={bookingLink} className="header-book" href="/booking">
          Book Now <span aria-hidden="true">→</span>
        </a>
        <button
          ref={button}
          className="menu-button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
        >
          <span aria-hidden="true">{open ? "✕" : "☰"}</span>
        </button>
      </div>
      <nav
        id="mobile-navigation"
        hidden={!open || bookingOnly}
        className="mobile-nav"
        aria-label="Mobile navigation"
      >
        {nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={close}
            aria-current={
              (item.href === "/" ? path === "/" : path.startsWith(item.href))
                ? "page"
                : undefined
            }
          >
            {item.label}
          </a>
        ))}
        <a className="mobile-quote" href="/booking" onClick={close}>
          Book Now →
        </a>
      </nav>
    </header>
  );
}
