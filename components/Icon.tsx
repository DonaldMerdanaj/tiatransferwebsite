import type { CSSProperties } from "react";
const paths: Record<string, string> = {
  shield: "M12 3 4 6v6c0 5 8 9 8 9s8-4 8-9V6l-8-3Zm-4 9 3 3 5-6",
  plane:
    "m3 11 8 1 6 8 2-1-3-8 5-4c2-2 0-4-2-2l-5 4-8-3-1 2 6 5-5 1-2-2-1 1 2 4Z",
  welcome: "M4 8h16v12H4V8Zm4 0V5h8v3M8 12h8M9 16h6",
  clock: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 4v5l3 2",
  driver: "M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM4 21v-3c0-4 16-4 16 0v3",
  car: "m5 6-2 7v6h3v-3h12v3h3v-6l-2-7H5Zm-2 7h18M6 12h2m8 0h2",
  pin: "M12 21s7-7 7-12a7 7 0 0 0-14 0c0 5 7 12 7 12Zm0-15a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z",
  route:
    "M5 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm14 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM5 7v6h14v4",
  check: "m5 12 4 4L19 6",
  arrow: "M4 12h16m-6-6 6 6-6 6",
  phone: "M5 3H3c-1 9 7 17 16 18v-4l-5-2-2 2-5-5 2-2-2-5H5Z",
};
export function Icon({
  name,
  className = "",
  style,
}: {
  name: string;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      className={`line-icon ${className}`}
      style={style}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={paths[name] || paths.check} />
    </svg>
  );
}
