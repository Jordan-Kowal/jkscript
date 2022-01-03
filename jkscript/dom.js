import { wait } from "./async";

/**
 * Maybe converts a value to pixels
 * @param {String|Number} value
 * @return {String}
 */
export function maybeNumberToPx(value) {
  if (typeof value === "number") {
    value = `${value}px`;
  } else if (typeof value === "string") {
    if (
      !value.endsWith("px") &&
      !value.endsWith("%") &&
      !value.endsWith("rem")
    ) {
      value = `${value}px`;
    }
  }
  return value;
}

/**
 * Scrolls to the anchor once it is rendered
 * Tries every few [delay] until [timeout] is reached
 * @param {String} hash The anchor to scroll to, must includes the #
 * @param {Number} timeout How long we keep trying
 * @param {Number} delay Delay between each try
 * @return {Promise<void>}
 */
export async function tryScrollToAnchor(hash, timeout = 1000, delay = 100) {
  while (timeout > 0) {
    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      break;
    }
    await wait(delay);
    timeout = timeout - delay;
  }
}
