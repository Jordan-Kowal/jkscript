const blobToFile = (blob: Blob, fileName: string): File =>
  new File([blob], fileName);

export default blobToFile;
