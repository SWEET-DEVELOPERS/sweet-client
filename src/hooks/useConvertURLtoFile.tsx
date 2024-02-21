const useConvertURLtoFile = async (url: string) => {
  console.log('들어오고 있는 url', url);
  const response = await fetch(url);
  const data = await response.blob();
  const extensions = url.split('.').pop();
  const filename = url.split('/').pop();
  const metadata = { type: `image/${extensions}` };
  return new File([data], filename!, metadata);
};

export default useConvertURLtoFile;
