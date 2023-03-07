/* eslint-disable no-await-in-loop, no-param-reassign */
import { sleep } from '../async';

const tryScrollToAnchor = async (hash, timeout = 1000, delay = 100) => {
  while (timeout > 0) {
    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      break;
    }
    await sleep(delay);
    timeout -= delay;
  }
};

export default tryScrollToAnchor;
