// import axios, { AxiosError, AxiosResponse } from 'axios';
import { useMutation } from '@tanstack/react-query';
import { put } from '../../../apis/client';
import axios, { AxiosRequestConfig } from 'axios';

interface putMyPresignedUrlProps {
  presignedUrl: string;
  file: File;
}

// export function putFormData<T>(url: string, data: FormData, config?: AxiosRequestConfig) {
//   return put<T>(url, data, {
//     ...config,
//     headers: {
//       ...config?.headers,
//       'Content-Type': 'multipart/form-data',
//     },
//   });
// }

// export const putMyPresignedUrl = async ({ presignedUrl, file }: putMyPresignedUrlProps) => {
//   console.log('put직전!');
//   putFormData(presignedUrl, file);
// };

export const putMyPresignedUrl = async ({ presignedUrl, file }: putMyPresignedUrlProps) => {
  const arrayBuffer = await file.arrayBuffer();
  const binaryData = new Uint8Array(arrayBuffer);
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
