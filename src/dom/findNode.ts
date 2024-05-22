import { sleep } from "../async";

const SLEEP_TIME_MS: number = 50;

const findNode = async (cssSelector: string, timeoutMs = 5000) => {
  let node: Element | null = null;
  const loops = Math.floor(timeoutMs / SLEEP_TIME_MS);
  for (let i = 0, l = loops; i < l; i++) {
    node = document.querySelector(cssSelector);
    if (node) return node;
    await sleep(SLEEP_TIME_MS);
  }
  return node;
};

export default findNode;
