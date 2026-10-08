"use client";
import { useState } from "react";
const nav = [{label:"Routes & prices",href:"/routes"},{label:"Our fleet",href:"/fleet"},{label:"FAQ",href:"/faq"},{label:"Guides",href:"/blog"}];
export function SiteHeader() {
  const [menuOpen,setMenuOpen]=useState(false);
  return <header className="site-header" onKeyDown={e=>{if(e.key==='Escape')setMenuOpen(false)}}>
    <div className="nav-wrap">
      <a className="brand" href="/" aria-label="TiaTransfer home"><img src="/images/tia-transfer-logo.png" alt="TiaTransfer" width={361} height={176} className="header-logo" /></a>
      <nav className="desktop-nav" aria-label="Primary navigation">{nav.map(item=><a key={item.href} href={item.href}>{item.label}</a>)}</nav>
      <a className="header-book" href="/#quote">Get a quote <span aria-hidden="true">→</span></a>
      <button className="menu-button" type="button" onClick={()=>setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen?'Close navigation':'Open navigation'}><span aria-hidden="true">{menuOpen?'✕':'☰'}</span></button>
    </div>
    {menuOpen&&<nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">{nav.map(item=><a key={item.href} href={item.href} onClick={()=>setMenuOpen(false)}>{item.label}</a>)}<a className="mobile-quote" href="/#quote" onClick={()=>setMenuOpen(false)}>Get a quote →</a></nav>}
  </header>;
}
