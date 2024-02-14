// import axios, { AxiosError, AxiosResponse } from 'axios';
import { useMutation } from '@tanstack/react-query';
import { put } from '../../../apis/client';
import { AxiosRequestConfig } from 'axios';

interface putPresignedUrlProps {
  presignedUrl: string;
  formData: FormData;
}

export function putFormData<T>(url: string, data: FormData, config?: AxiosRequestConfig) {
  return put<T>(url, data, {
    ...config,
    headers: {
      ...config?.headers,
      'Content-Type': 'multipart/form-data',
    },
  });
}

export const putPresignedUrl = async ({ presignedUrl, formData }: putPresignedUrlProps) => {
  console.log('put직전!');
  putFormData(presignedUrl, formData);
};

export const usePutPresignedUrl = () => {
  const mutation = useMutation({
    mutationFn: putPresignedUrl,
    onSuccess: (data) => {
      console.log('PUT 성공', data);
    },
    onError: (error) => {
      console.log('이미지 PUT 에러!', error.message);
    },
  });

  return { mutation };
};

export default usePutPresignedUrl;
