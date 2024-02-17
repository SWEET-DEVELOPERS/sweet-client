import { useMutation } from '@tanstack/react-query';
import axios, { AxiosError, AxiosResponse } from 'axios';

const putPresignedUrl = async ({
  presignedUrl,
  binaryData,
}: {
  presignedUrl: string;
  binaryData: Uint8Array;
}) => {
  try {
    const response: AxiosResponse = await axios.put(presignedUrl, binaryData, {
      headers: {
        'Content-Type': 'binary',
      },
    });
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data?.message ?? error.message);
    } else {
      throw error;
    }
  }
};

const usePutPresignedUrl = () => {
  return useMutation({
    mutationFn: putPresignedUrl,
    onSuccess: (data) => {
      console.log('풋 성공', data);
    },
  });
};

export default usePutPresignedUrl;
