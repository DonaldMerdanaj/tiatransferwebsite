"use client";
import { useRef, useState } from "react";
import { usePathname } from "next/navigation";
const nav = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "/routes" },
  { label: "Our Fleet", href: "/fleet" },
  { label: "About Us", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const button = useRef<HTMLButtonElement>(null);
  function close() {
    setOpen(false);
  }
  return (
    <header
      className="site-header"
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          close();
          button.current?.focus();
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
        <a className="header-book" href="/booking">
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
        hidden={!open}
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
