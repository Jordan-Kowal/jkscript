const openBlobInNewTab = (blob, fileName, type) => {
  if (window.navigator && window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveOrOpenBlob(blob, fileName);
  } else {
    const file = new File([blob], fileName, { type });
    const objectUrl = URL.createObjectURL(file);
    window.open(objectUrl);
  }
};

export default openBlobInNewTab;
