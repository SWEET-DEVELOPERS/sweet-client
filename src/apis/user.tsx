// import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
// import { instance } from './api';
// import { user } from './queryKeys';
// import { AxiosError } from 'axios';

// const postTokenReIssue = async (refreshToken: string) => {
//   return await instance()
//     .post(
//       'auth/refresh',
//       {},
//       {
//         headers: {
//           Refresh: refreshToken,
//         },
//       },
//     )
//     .catch((e: string) => console.log(e));
// };

// const usePostTokenReIssue = (refreshToken: string) => {
//   return useQuery(user.tokenReIssue(refreshToken), () => postTokenReIssue(refreshToken));
// };

// const getProfile = async () => {
//   return await instance()
//     .get('users')
//     .then((res) => res.data)
//     .catch((e) => console.log(e));
// };

// const useGetProfile = () => {
//   return useQuery(user.profile(), () => getProfile());
// };

// const postLogout = async () => {
//   return await instance()
//     .post('auth/logout')
//     .catch((e) => console.log(e));
// };

// const usePostLogout = () => {
//   const queryClient = useQueryClient();
//   return useMutation(user.logout(), () => postLogout(), {
//     onSuccess: () => queryClient.invalidateQueries('user'),
//   });
// };

// const patchName = async (name: string) => {
//   return await instance()
//     .patch('users/names', {
//       name: name,
//     })
//     .catch((e) => console.log(e));
// };

// const usePatchName = (name: string) => {
//   const queryClient = useQueryClient();
//   return useMutation(user.updateName(name), () => patchName(name), {
//     onSuccess: () => queryClient.invalidateQuerie('user'),
//   });
// };

// const patchImage = async (image: string) => {
//   return await instance()
//     .patch('users/images', image, {
//       headers: { 'Content-Type': 'multipart/form-data' },
//     })
//     .catch((e: AxiosError) => console.log(e));
// };

// const usePatchImage = (image: string) => {
//   const queryClient = useQueryClient();
//   return useMutation(user.updateImage(image), () => patchImage(image), {
//     onSuccess: () => queryClient.invalidateQueries('user'),
//   });
// };

// export { useGetProfile, usePostTokenReIssue, usePostLogout, usePatchName, usePatchImage };
