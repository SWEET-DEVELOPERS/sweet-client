import { useSetRecoilState } from 'recoil';
import { instance } from '../../../apis/client';
import { LoginDataType } from '../../../types/user';
import { memberIdState, nickNameState, profileImageState } from '../../../recoil/atoms';

interface LoginResponseType {
  data: LoginDataType;
}

export const fetchAuth = (AUTHORIZE_CODE: string): Promise<LoginResponseType> =>
  instance.post(`/oauth/kakao/login?code=${AUTHORIZE_CODE}`);

export const useLogin = (AUTHORIZE_CODE: string) => {
  // const setNickName = useSetRecoilState(nickNameState);
  // const setMemberId = useSetRecoilState(memberIdState);
  // const setProfileImage = useSetRecoilState(profileImageState);

  fetchAuth(AUTHORIZE_CODE).then((response: LoginResponseType) => {
    const data = response.data;
    const JWT = response.data.memberToken.accessToken;
    if (JWT) {
      localStorage.setItem('EXIT_LOGIN_TOKEN', JWT);
    }
    // if (data.userInfo) {
    //   setNickName(data.userInfo.nickname);
    //   setMemberId(data.userInfo.memberId);
    //   setProfileImage(data.userInfo.profileImage);
    // }
    console.log(JWT);
    console.log(response);
  });
};
