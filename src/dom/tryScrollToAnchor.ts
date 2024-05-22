import { sleep } from "@/async";

const tryScrollToAnchor = async (hash: string, timeout = 1000, delay = 100) => {
  let remainingTime = timeout;
  while (remainingTime > 0) {
    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      break;
    }
    await sleep(delay);
    remainingTime -= delay;
  }
};

export default tryScrollToAnchor;
