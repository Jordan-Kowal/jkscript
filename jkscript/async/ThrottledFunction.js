import DebouncedFunction from "./DebouncedFunction";

/** Throttler for a function, meaning it can be called only once until the timeout is reached */
export default class ThrottledFunction extends DebouncedFunction {
  /** Only starts the timeout if it does not already exists */
  run() {
    if (this.timeout) return;
    this.timeout = setTimeout(() => {
      this.result = this.func();
      this.timeout = undefined;
    }, this.delay);
  }
}
