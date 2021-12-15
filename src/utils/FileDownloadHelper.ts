const downloadFile = (output: string | Blob, fileName: string): void => {
  const link = document.createElement('a');
  document.body.appendChild(link);
  link.download = fileName;
  link.href = window.URL.createObjectURL(output as Blob);
  link.click();
};

export { downloadFile };
