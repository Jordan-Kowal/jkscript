import wait from '../async/wait';

const SLEEP_TIME_MS = 50;

const findNode = async (cssSelector, timeoutMs = 5000) => {
  let node;
  const loops = parseInt(timeoutMs / SLEEP_TIME_MS, 10);
  for (let i = 0, l = loops; i < l; i++) {
    node = document.querySelector(cssSelector);
    if (node) return node;
    // eslint-disable-next-line no-await-in-loop
    await wait(SLEEP_TIME_MS);
  }
  return node;
};

export default findNode;
