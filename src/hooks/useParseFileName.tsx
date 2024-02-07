import React from 'react';

interface useParseFileNameProps {
  imageString: string;
  setFileName: React.Dispatch<React.SetStateAction<string>>;
}

function useParseFileName({ imageString, setFileName }: useParseFileNameProps) {
  // 확장자 제거
  const imageNameWithoutExtension = imageString.replace(/\.[^/.]+$/, '');
  // console.log('imageNameWithoutExtension', imageNameWithoutExtension);

  // 띄워쓰기 제거
  const formattedImageName = imageNameWithoutExtension.replace(/\s/g, '');
  // console.log('formattedImageName', formattedImageName);

  // 앞 3글자 가져오기
  const firstThreeLetters = formattedImageName.substring(0, 3);
  // console.log('firstThreeLetters', firstThreeLetters);

  // 이미지 업로드 시간
  const uploadTime = new Date().toISOString();
  // console.log('uploadTime', uploadTime);

  // 최종 이미지 이름
  const finalImageName = `${firstThreeLetters}${uploadTime}`;
  // console.log('finalImageName', finalImageName);
  setFileName(finalImageName);
  // console.log('fileName', fileName);

  return finalImageName;
}

export default useParseFileName;
