/** Makes it possible to AWAIT a canvas-to-blob conversion */
const canvasToBlob = (canvas) =>
  // eslint-disable-next-line no-promise-executor-return
  new Promise((resolve) => canvas.toBlob(resolve));

export default canvasToBlob;
