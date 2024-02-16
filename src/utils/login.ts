export const REST_API_KEY: string = import.meta.env.VITE_REST_API_KEY;
export const REDIRECT_URI: string = import.meta.env.PROD
  ? import.meta.env.VITE_REDIRECT_URI
  : import.meta.env.VITE_LOCAL_REDIRECT_URI;
export const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
