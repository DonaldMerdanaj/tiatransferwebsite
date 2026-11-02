import test from "node:test";
import assert from "node:assert/strict";
import { advanceHeaderScroll, createHeaderScrollState } from "../lib/header-scroll.ts";

test("the full header is visible at the top and on restored pages", () => {
  assert.equal(createHeaderScrollState().compact, false);
  assert.equal(createHeaderScrollState(500).hidden, false);
  assert.equal(createHeaderScrollState(500).compact, true);
});
test("small downward movements accumulate before hiding", () => {
  let state = createHeaderScrollState(200);
  state = advanceHeaderScroll(state, 205);
  assert.equal(state.hidden, false);
  state = advanceHeaderScroll(state, 211);
  assert.equal(state.hidden, false);
  state = advanceHeaderScroll(state, 212);
  assert.equal(state.hidden, true);
});
test("upward movement reveals the compact header", () => {
  let state = advanceHeaderScroll(createHeaderScrollState(200), 240);
  assert.equal(state.hidden, true);
  state = advanceHeaderScroll(state, 228);
  assert.equal(state.hidden, false);
  assert.equal(state.compact, true);
});
test("direction jitter does not reveal a hidden header", () => {
  let state = advanceHeaderScroll(createHeaderScrollState(200), 240);
  for (const y of [237, 240, 236, 241]) state = advanceHeaderScroll(state, y);
  assert.equal(state.hidden, true);
});
test("returning to the top restores the full header", () => {
  const hidden = advanceHeaderScroll(createHeaderScrollState(200), 240);
  const top = advanceHeaderScroll(hidden, 0);
  assert.equal(top.hidden, false);
  assert.equal(top.compact, false);
});
test("an open menu or focused navigation pins the header", () => {
  const hidden = advanceHeaderScroll(createHeaderScrollState(200), 240);
  assert.equal(advanceHeaderScroll(hidden, 300, true).hidden, false);
});
test("negative overscroll and the introductory area never hide the header", () => {
  const state = advanceHeaderScroll(createHeaderScrollState(), 150);
  assert.equal(state.hidden, false);
  assert.equal(advanceHeaderScroll(state, -15).lastY, 0);
});
