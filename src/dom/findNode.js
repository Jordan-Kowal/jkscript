/* eslint-disable no-await-in-loop */
import { sleep } from "../async";

const SLEEP_TIME_MS = 50;

const findNode = async (cssSelector, timeoutMs = 5000) => {
  let node;
  const loops = Number.parseInt(timeoutMs / SLEEP_TIME_MS, 10);
  for (let i = 0, l = loops; i < l; i++) {
    node = document.querySelector(cssSelector);
    if (node) return node;
    await sleep(SLEEP_TIME_MS);
  }
  return node;
};

export default findNode;
