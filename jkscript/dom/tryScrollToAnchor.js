import { wait } from "../async";

/**
 * Scrolls to the anchor once it is rendered
 * Tries every few [delay] until [timeout] is reached
 * @param {String} hash The anchor to scroll to, must includes the #
 * @param {Number} timeout How long we keep trying
 * @param {Number} delay Delay between each try
 * @return {Promise<void>}
 */
export default async function tryScrollToAnchor(
  hash,
  timeout = 1000,
  delay = 100
) {
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
