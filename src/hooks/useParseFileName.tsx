interface ParseFileNameProps {
  setFileName: React.Dispatch<React.SetStateAction<string>>;
  imageString: string;
}

const useParseFileName = ({ setFileName, imageString }: ParseFileNameProps) => {
  const uploadTime = new Date().toISOString();

  const uniqueName = `${uploadTime}${imageString}`;
  const finalImageName = uniqueName
    .replace(/\//g, '') // 폴더링 방지를 위해 '/' 제거
    .replace(/\s/g, ''); // 공백 제거

  setFileName(finalImageName);

  return finalImageName;
};

export default useParseFileName;
