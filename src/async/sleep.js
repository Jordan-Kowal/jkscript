/* eslint-disable no-promise-executor-return */

/** Await this function to sleep for a given duration. */
const sleep = (durationMs) =>
  new Promise((resolve) => setTimeout(resolve, durationMs));

export default sleep;
