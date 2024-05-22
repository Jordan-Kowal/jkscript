/** Makes it possible to 'await' a canvas-to-blob conversion */
const canvasToBlob = (canvas: HTMLCanvasElement): Promise<any> =>
  new Promise((resolve) => canvas.toBlob(resolve));

export default canvasToBlob;
