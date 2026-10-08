"use client";
import { useEffect, useId, useState } from "react";
const origin = "https://app.tiranaairportshuttle.com";
const source = `${origin}/assets/plugins/iframe-resizer/iframeResizer.min.js`;
const widget = `${origin}/booking/widget?site_key=7e3f3d3085b900d598bc40543d611575`;
type ResizedFrame = HTMLIFrameElement & {
  iFrameResizer?: { removeListeners?: () => void };
};
type ResizeWindow = Window & {
  iFrameResize?: (
    options: Record<string, unknown>,
    selector: string,
  ) => unknown;
};
export function BookingWidget({ destination }: { destination?: string }) {
  const id = `booking-${useId().replace(/[^a-zA-Z0-9]/g, "")}`;
  const [failed, setFailed] = useState(false);
  const url = destination
    ? `${widget}&destination=${encodeURIComponent(destination)}`
    : widget;
  useEffect(() => {
    let disposed = false;
    let timer: ReturnType<typeof setTimeout>;
    const fail = () => {
      if (!disposed) setFailed(true);
    };
    const init = () => {
      if (disposed) return;
      const resize = (window as ResizeWindow).iFrameResize;
      if (!resize) {
        fail();
        return;
      }
      try {
        resize(
          {
            checkOrigin: [origin],
            log: false,
            heightCalculationMethod: "lowestElement",
            onInit: () => clearTimeout(timer),
          },
          `#${id}`,
        );
      } catch {
        fail();
      }
    };
    timer = setTimeout(fail, 15000);
    let script = document.querySelector<HTMLScriptElement>(
      "script[data-tia-resizer]",
    );
    if ((window as ResizeWindow).iFrameResize) init();
    else {
      if (!script) {
        script = document.createElement("script");
        script.src = source;
        script.async = true;
        script.dataset.tiaResizer = "true";
        document.body.appendChild(script);
      }
      script.addEventListener("load", init);
      script.addEventListener("error", fail);
    }
    return () => {
      disposed = true;
      clearTimeout(timer);
      script?.removeEventListener("load", init);
      script?.removeEventListener("error", fail);
      (
        document.getElementById(id) as ResizedFrame | null
      )?.iFrameResizer?.removeListeners?.();
    };
  }, [id]);
  return (
    <div className="booking-widget">
      {!failed && (
        <iframe
          id={id}
          title="TiaTransfer secure transfer booking form"
          src={url}
          allow="geolocation"
          className="booking-frame"
          onError={() => setFailed(true)}
        />
      )}
      {failed && (
        <div className="booking-fallback" role="status">
          <p>
            Continue to our secure booking service to choose your route, vehicle
            and travel dates.
          </p>
          <a
            className="button button-red"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open secure booking <span aria-hidden="true">↗</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      )}
      <p className="booking-direct">
        Prefer a separate window?{" "}
        <a href={url} target="_blank" rel="noopener noreferrer">
          Open booking <span className="sr-only">in a new tab</span>↗
        </a>
      </p>
    </div>
  );
}
