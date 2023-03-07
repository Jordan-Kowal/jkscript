import DebouncedFunction from './DebouncedFunction';

export default class ThrottledFunction extends DebouncedFunction {
  run() {
    if (this.timeout) return;
    this.timeout = setTimeout(() => {
      this.result = this.func();
      this.timeout = undefined;
    }, this.delay);
  }
}
