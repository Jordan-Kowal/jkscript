/**
 * `await` this function to sleep for {duration} milliseconds
 * @param {Number} duration Wait time in milliseconds
 * @returns {Promise}
 * @constructor
 */
export default function wait(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}
