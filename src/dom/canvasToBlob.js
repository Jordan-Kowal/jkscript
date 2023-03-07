/* eslint-disable no-promise-executor-return */

/** Makes it possible to 'await' a canvas-to-blob conversion */
const canvasToBlob = (canvas) =>
  new Promise((resolve) => canvas.toBlob(resolve));

export default canvasToBlob;
