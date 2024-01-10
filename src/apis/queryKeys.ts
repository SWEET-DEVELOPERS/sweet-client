//queryKey값 여기서 따로 관리 하기.

// const comment = {};

const user = {
  all: ['user'],
  tokenReIssue: (token: string) => [...user.all, 'tokenReIssue', token],
  profile: () => [...user.all, 'profile'],
  logout: () => [...user.all, 'logout'],
  updateName: (name: string) => [...user.all, 'updateName', name],
  updateImage: (image: string) => [...user.all, 'updateImage', image],
};

export { user };
