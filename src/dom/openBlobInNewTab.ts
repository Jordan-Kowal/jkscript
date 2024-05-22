const openBlobInNewTab = (blob: Blob, fileName: string, type: string): void => {
  const file = new File([blob], fileName, { type });
  const objectUrl = URL.createObjectURL(file);
  window.open(objectUrl);
};

export default openBlobInNewTab;
