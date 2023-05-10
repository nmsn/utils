/** 下载文件 */
const loadFile = (fileUrl: string, name?: string) => {
  fetch(fileUrl)
    .then(res => res.blob())
    .then(blob => {
      const fileUrlTemp = fileUrl.split('?')[0];

      const filename = decodeURIComponent(fileUrlTemp.slice(fileUrlTemp.lastIndexOf('/') + 1));

      const a = document.createElement('a');
      document.body.appendChild(a);
      const url = window.URL.createObjectURL(blob);
      a.href = url;
      a.download = name || filename;
      a.target = '_blank';
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    });
};

export default loadFile;
