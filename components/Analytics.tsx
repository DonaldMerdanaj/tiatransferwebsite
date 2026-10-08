"use client";
import Script from "next/script";
import { useEffect, useState } from "react";
type AnalyticsWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
};
export function Analytics({ measurementId }: { measurementId: string }) {
  const [consent, setConsent] = useState<"unknown" | "accepted" | "declined">(
    "unknown",
  );
  useEffect(() => {
    try {
      const choice = localStorage.getItem("tia-analytics-consent");
      if (choice === "accepted" || choice === "declined") setConsent(choice);
    } catch {}
  }, []);
  function choose(choice: "accepted" | "declined") {
    setConsent(choice);
    try {
      localStorage.setItem("tia-analytics-consent", choice);
    } catch {}
  }
  useEffect(() => {
    if (consent !== "accepted") return;
    const w = window as AnalyticsWindow;
    w.dataLayer = w.dataLayer || [];
    w.gtag = function () {
      w.dataLayer!.push(arguments);
    };
    w.gtag("js", new Date());
    w.gtag("config", measurementId, { anonymize_ip: true });
    const track = (e: MouseEvent) => {
      const a = (e.target as Element).closest("a");
      if (a && a.getAttribute("href")?.endsWith("#quote")) {
        w.gtag?.("event", "booking_interest", {
          link_url: a.getAttribute("href"),
        });
      }
    };
    document.addEventListener("click", track);
    return () => document.removeEventListener("click", track);
  }, [consent, measurementId]);
  return (
    <>
      {consent !== "unknown" && (
        <button
          className="analytics-manage"
          onClick={() => {
            try {
              localStorage.removeItem("tia-analytics-consent");
            } catch {}
            window.location.reload();
          }}
        >
          Analytics preferences
        </button>
      )}
      {consent === "accepted" && (
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`}
          strategy="afterInteractive"
        />
      )}
      {consent === "unknown" && (
        <aside className="analytics-consent" aria-label="Analytics preferences">
          <p>
            May we use optional analytics to understand visits and improve the
            website? <a href="/legal/privacy-policy">Privacy information</a>
          </p>
          <div>
            <button onClick={() => choose("declined")}>Decline</button>
            <button onClick={() => choose("accepted")}>Accept analytics</button>
          </div>
        </aside>
      )}
    </>
  );
}
