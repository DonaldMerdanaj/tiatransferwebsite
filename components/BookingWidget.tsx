"use client";

import { useEffect } from "react";

const bookingScriptId = "tia-transfer-iframe-resizer";
const bookingScriptSrc =
  "https://app.tiranaairportshuttle.com/assets/plugins/iframe-resizer/iframeResizer.min.js";

export function BookingWidget() {
  useEffect(() => {
    const resize = () => {
      const resizer = (
        window as Window & {
          iFrameResize?: (
            options: Record<string, unknown>,
            selector: string,
          ) => void;
        }
      ).iFrameResize;

      resizer?.(
        { log: false, targetOrigin: "*", checkOrigin: false },
        "#tia-booking-widget",
      );
    };

    const existing = document.getElementById(bookingScriptId);
    if (existing) {
      resize();
      return;
    }

    const script = document.createElement("script");
    script.id = bookingScriptId;
    script.src = bookingScriptSrc;
    script.async = true;
    script.onload = resize;
    document.body.appendChild(script);

    return () => {
      script.onload = null;
    };
  }, []);

  return (
    <iframe
      id="tia-booking-widget"
      title="TiaTransfer airport transfer booking form"
      src="https://app.tiranaairportshuttle.com/booking/widget?site_key=7e3f3d3085b900d598bc40543d611575"
      allow="geolocation"
      loading="lazy"
      className="mt-4 block min-h-[680px] w-full border-0"
    />
  );
}