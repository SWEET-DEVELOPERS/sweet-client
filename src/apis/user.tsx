import {
  useMutation,
  useQuery,
  useQueryClient,
  MutationFunction,
  QueryKey,
} from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { instance } from './api';
import { user } from './queryKeys';

type RefreshTokenFunction = (refreshToken: string) => Promise<any>;
type ProfileData = {
  /* Define your profile data structure here */
};
type LogoutFunction = () => Promise<any>;
type UpdateNameFunction = (name: string) => Promise<any>;
type UpdateImageFunction = (image: string) => Promise<any>;

const postTokenReIssue: RefreshTokenFunction = async (refreshToken) => {
  try {
    const response = await instance().post(
      'auth/refresh',
      {},
      {
        headers: {
          Refresh: refreshToken,
        },
      },
    );
    return response.data;
  } catch (error) {
    throw new Error((error as AxiosError).message);
  }
};

const usePostTokenReIssue = (refreshToken: string) => {
  return useQuery<any, AxiosError>(user.tokenReIssue(refreshToken), () =>
    postTokenReIssue(refreshToken),
  );
};

const getProfile = async (): Promise<ProfileData> => {
  try {
    const response = await instance().get('users');
    return response.data;
  } catch (error) {
    throw new Error((error as AxiosError).message);
  }
};

const useGetProfile = () => {
  return useQuery<ProfileData, AxiosError>(user.profile(), () => getProfile());
};

const postLogout: LogoutFunction = async () => {
  try {
    await instance().post('auth/logout');
  } catch (error) {
    throw new Error((error as AxiosError).message);
  }
};

const usePostLogout = () => {
  const queryClient = useQueryClient();
  return useMutation<any, AxiosError>(user.logout(), () => postLogout(), {
    onSuccess: () => queryClient.invalidateQueries('user'),
  });
};

const patchName: UpdateNameFunction = async (name) => {
  try {
    await instance().patch('users/names', {
      name: name,
    });
  } catch (error) {
    throw new Error((error as AxiosError).message);
  }
};

const usePatchName = (name: string) => {
  const queryClient = useQueryClient();
  return useMutation<any, AxiosError>(user.updateName(name), () => patchName(name), {
    onSuccess: () => queryClient.invalidateQueries('user'),
  });
};

const patchImage: UpdateImageFunction = async (image) => {
  try {
    await instance().patch('users/images', image, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  } catch (error) {
    throw new Error((error as AxiosError).message);
  }
};

const usePatchImage = (image: string) => {
  const queryClient = useQueryClient();
  return useMutation<any, AxiosError>(user.updateImage(image), () => patchImage(image), {
    onSuccess: () => queryClient.invalidateQueries('user'),
  });
};

export { useGetProfile, usePostTokenReIssue, usePostLogout, usePatchName, usePatchImage };
