export default class DebouncedFunction {
  func: CallableFunction;
  delay: number;
  // biome-ignore lint/suspicious/noExplicitAny: can truly be any
  result: any;
  timeout: NodeJS.Timeout | undefined;
  constructor(func: CallableFunction, delay: number, startNow = false) {
    this.func = func;
    this.delay = delay;
    this.result = undefined;
    this.timeout = undefined;
    if (startNow) {
      this.run();
    }
  }

  run() {
    this.cancel();
    this.timeout = setTimeout(() => {
      this.result = this.func();
      this.timeout = undefined;
    }, this.delay);
  }

  now() {
    this.cancel();
    this.result = this.func();
  }

  cancel() {
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = undefined;
    }
  }
}
