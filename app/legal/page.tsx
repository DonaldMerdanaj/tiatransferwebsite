import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
export const metadata = {
  title: "Booking Information | TiaTransfer",
  robots: { index: false, follow: true },
};
export default function Legal() {
  return (
    <>
      <SiteHeader />
      <main
        id="main-content"
        tabIndex={-1}
        className="content-width legal-page"
      >
        <h1>Booking information</h1>
        <p>
          Review the booking provider’s conditions before confirming your
          transfer.
        </p>
        <ul>
          <li>
            <a href="/legal/terms-and-conditions">Terms and Conditions</a>
          </li>
          <li>
            <a href="/legal/privacy-policy">Privacy Information</a>
          </li>
          <li>
            <a href="/legal/cancellation-policy">Cancellation Policy</a>
          </li>
        </ul>
      </main>
      <SiteFooter />
    </>
  );
}
