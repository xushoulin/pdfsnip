"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

type AdUnitProps = {
  /** Ad slot ID from your AdSense account (e.g. "1234567890"). */
  slot: string;
  format?: "auto" | "rectangle" | "horizontal" | "vertical";
  className?: string;
  style?: React.CSSProperties;
};

/**
 * Manual AdSense display ad. Auto ads (loaded in app/layout.tsx) do not need this
 * component — use it only when you want a fixed ad slot at a specific location.
 * Create the ad unit in your AdSense dashboard, then pass its data-ad-slot here.
 */
export default function AdUnit({
  slot,
  format = "auto",
  className,
  style,
}: AdUnitProps) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      /* no-op until the AdSense script has loaded */
    }
  }, [slot]);

  return (
    <ins
      className={`adsbygoogle${className ? ` ${className}` : ""}`}
      style={{ display: "block", ...style }}
      data-ad-client="pub-2622415797490761"
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive="true"
    />
  );
}
