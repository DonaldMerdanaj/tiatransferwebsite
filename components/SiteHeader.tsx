"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { advanceHeaderScroll, createHeaderScrollState } from "@/lib/header-scroll";

const nav = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "/routes" },
  { label: "Our Fleet", href: "/fleet" },
  { label: "About Us", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];
export function SiteHeader({
  collapseOnScroll = true,
}: {
  collapseOnScroll?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [appearance, setAppearance] = useState({ hidden: false, compact: false });
  const path = usePathname();
  const header = useRef<HTMLElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  const menuOpen = useRef(false);
  const scroll = useRef(createHeaderScrollState());

  function reveal() {
    scroll.current = createHeaderScrollState(window.scrollY);
    setAppearance({ hidden: false, compact: collapseOnScroll && scroll.current.compact });
  }

  function toggleMenu(next: boolean) {
    menuOpen.current = next;
    setOpen(next);
    reveal();
  }

  useEffect(() => {
    if (!collapseOnScroll) return;
    let frame = 0;
    const publish = () => {
      const { hidden, compact } = scroll.current;
      setAppearance((previous) =>
        previous.hidden === hidden && previous.compact === compact
          ? previous
          : { hidden, compact },
      );
    };
    // A restored page starts visible, even if the browser restores a scrolled position.
    scroll.current = createHeaderScrollState(window.scrollY);
    publish();
    const update = () => {
      frame = 0;
      const maximum = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      const y = Math.min(maximum, Math.max(0, window.scrollY));
      const pinned = menuOpen.current || !!header.current?.contains(document.activeElement);
      scroll.current = advanceHeaderScroll(scroll.current, y, pinned);
      publish();
    };
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    const showForKeyboard = (event: KeyboardEvent) => {
      if (event.key === "Tab") {
        scroll.current = createHeaderScrollState(window.scrollY);
        publish();
      }
    };
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    window.addEventListener("keydown", showForKeyboard);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("keydown", showForKeyboard);
    };
  }, [collapseOnScroll]);

  return (
    <div className="site-header-space">
    <header
      ref={header}
      className={`site-header site-header--transfer${appearance.compact ? " site-header--compact" : ""}${appearance.hidden ? " site-header--hidden" : ""}`}
      onFocusCapture={reveal}
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          toggleMenu(false);
          button.current?.focus();
        }
      }}
    >
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="th-support">
        <div className="th-support-inner">
          <span className="th-support-status">Airport transfers, 24/7</span>
          <div className="th-support-links">
            <a href="tel:+355694025025">+355 69 40 25 025</a>
            <a className="th-support-email" href="mailto:hello@tiatransfer.com">hello@tiatransfer.com</a>
          </div>
        </div>
      </div>
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
          onClick={() => toggleMenu(!open)}
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
            onClick={() => toggleMenu(false)}
            aria-current={
              (item.href === "/" ? path === "/" : path.startsWith(item.href))
                ? "page"
                : undefined
            }
          >
            {item.label}
          </a>
        ))}
        <a className="mobile-quote" href="/booking" onClick={() => toggleMenu(false)}>
          Book Now →
        </a>
      </nav>
    </header>
    </div>
  );
}
