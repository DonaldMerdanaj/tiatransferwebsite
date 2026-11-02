export type HeaderScrollState = {
  lastY: number;
  anchorY: number;
  direction: "up" | "down" | null;
  hidden: boolean;
  compact: boolean;
};

export function createHeaderScrollState(y = 0): HeaderScrollState {
  const position = Math.max(0, y);
  return {
    lastY: position,
    anchorY: position,
    direction: null,
    hidden: false,
    compact: position > 80,
  };
}

// Accumulate movement within one direction, so touchpad jitter cannot flicker the header.
export function advanceHeaderScroll(
  previous: HeaderScrollState,
  y: number,
  pinned = false,
): HeaderScrollState {
  const position = Math.max(0, y);
  if (pinned || position <= 24) return createHeaderScrollState(position);
  const delta = position - previous.lastY;
  if (delta === 0) return previous;
  const direction = delta > 0 ? "down" : "up";
  let anchorY = direction === previous.direction ? previous.anchorY : previous.lastY;
  let hidden = previous.hidden;
  if (Math.abs(position - anchorY) >= 12) {
    hidden = direction === "down" && position > 160;
    anchorY = position;
  }
  if (position <= 160) hidden = false;
  return { lastY: position, anchorY, direction, hidden, compact: position > 80 };
}
