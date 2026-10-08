export function SiteFooter() {
  return (
    <footer className="border-t border-[#e6eaf0] bg-[#132235] px-5 pb-6 pt-12 text-white lg:px-8 lg:pt-16">
      <div className="mx-auto max-w-[1244px]">
        <div className="grid gap-10 border-b border-white/15 pb-12 lg:grid-cols-[1.3fr_.75fr_.75fr_1.1fr]">
          <div>
            <div className="inline-flex rounded-xl bg-white px-3 py-2">
              <img src="/images/tia-transfer-logo.png" alt="TiaTransfer" className="h-11 w-auto object-contain" />
            </div>
            <p className="mt-5 max-w-[310px] text-sm leading-6 text-white/60">
              Private airport transfers from Tirana Airport, with a clear price and a warm welcome waiting at arrivals.
            </p>
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[.18em] text-[#ef1d25]">Explore</p>
            <div className="mt-5 grid gap-3 text-sm text-white/65">
              <a href="/routes" className="transition hover:text-white">Routes & prices</a>
              <a href="/fleet" className="transition hover:text-white">Our fleet</a>
              <a href="/faq" className="transition hover:text-white">FAQ</a>
              <a href="/blog" className="transition hover:text-white">Guides</a>
              <a href="/about" className="transition hover:text-white">About</a>
              <a href="/contact" className="transition hover:text-white">Contact</a>
            </div>
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[.18em] text-[#ef1d25]">Legal</p>
            <div className="mt-5 grid gap-3 text-sm text-white/65">
              <a href="/legal/terms-and-conditions" className="transition hover:text-white">Terms & Conditions</a>
              <a href="/legal/privacy-policy" className="transition hover:text-white">Privacy Policy</a>
              <a href="/legal/cancellation-policy" className="transition hover:text-white">Cancellation Policy</a>
            </div>
          </div>
          <div className="rounded-[10px] border border-white/15 bg-white/[.06] p-5">
            <p className="text-[11px] font-bold uppercase tracking-[.18em] text-[#ef1d25]">Ready when you are</p>
            <h3 className="mt-3 text-xl font-bold tracking-tight">Start with a fixed-price quote.</h3>
            <p className="mt-2 text-sm leading-6 text-white/60">No card required. No airport surprises.</p>
            <a
              href="/#quote"
              className="mt-5 flex w-full items-center justify-between rounded-xl bg-[#ef1d25] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#d9161d]"
            >
              Get your quote →
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4 pt-6 text-xs text-white/45 sm:flex-row sm:items-center">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="mailto:hello@tiatransfer.com" className="transition hover:text-white">hello@tiatransfer.com</a>
            <a href="tel:+355694025025" className="transition hover:text-white">+355 69 40 25 025</a>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <span>Private transfers, rooted in Tirana</span>
            <span>© {new Date().getFullYear()} TiaTransfer</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
