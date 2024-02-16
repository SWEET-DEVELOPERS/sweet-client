import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

interface putMyPresignedUrlProps {
  presignedUrl: string;
  binaryData: Uint8Array;
}

// 추후 client에 PU용 put 새롭게 추가해서 수정할 예정
export const putMyPresignedUrl = async ({ presignedUrl, binaryData }: putMyPresignedUrlProps) => {
  return await axios.put(presignedUrl, binaryData, {
    headers: {
      'Content-Type': 'binary',
    },
  });
};

export const usePutMyPresignedUrl = () => {
  const mutation = useMutation({
    mutationFn: putMyPresignedUrl,
    onSuccess: (data) => {
      console.log('PUT 성공', data);
    },
    onError: (error) => {
      console.log('이미지 PUT 에러!', error.message);
    },
  });

  return { mutation };
};

export default usePutMyPresignedUrl;
