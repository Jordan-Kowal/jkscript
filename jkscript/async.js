/** Debouncer for a function, meaning each call reset the timeout before it runs */
export class DebouncedFunction {
  /**
   * Creates the debounced function call
   * @param {Function} func The function that will be run after the delay
   * @param {Number} delay The timeout delay for the function call
   * @param {Boolean} startNow Whether we start the first call on creation
   */
  constructor(func, delay, startNow = false) {
    this.func = func;
    this.delay = delay;
    this.result = undefined;
    this.timeout = undefined;
    if (startNow) {
      this.run();
    }
  }

  /** Clears the existing timeout and starts a new one */
  run() {
    this.cancel();
    this.timeout = setTimeout(() => {
      this.result = this.func();
      this.timeout = undefined;
    }, this.delay);
  }

  /** Clears the existing timeout and instantly executes the function */
  now() {
    this.cancel();
    this.result = this.func();
  }

  /** Clears the existing timeout */
  cancel() {
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = undefined;
    }
  }
}

/** Throttler for a function, meaning it can be called only once until the timeout is reached */
export class ThrottledFunction extends DebouncedFunction {
  /** Only starts the timeout if it does not already exists */
  run() {
    if (this.timeout) return;
    this.timeout = setTimeout(() => {
      this.result = this.func();
      this.timeout = undefined;
    }, this.delay);
  }
}

/**
 * `await` this function to sleep for {duration} milliseconds
 * @param {Number} duration Wait time in milliseconds
 * @returns {Promise}
 * @constructor
 */
export function wait(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}
