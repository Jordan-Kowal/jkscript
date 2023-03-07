/**
 * `await` this function to wait {duration} milliseconds
 * @param {Number} duration Wait time in milliseconds
 * @returns {Promise}
 * @constructor
 */
export default function sleep(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}
