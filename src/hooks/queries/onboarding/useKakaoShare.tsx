export const useKakaoShare = () => {
  if (window.Kakao) {
    const kakao = window.Kakao;
    if (!kakao.isInitialized()) {
      console.log('카카오 미초기화 상태');
      kakao.init(process.env.VITE_KAKAO_JAVASCRIPT_KEY);
    }

    // TODO 추후 알맞은 url로 보내야함
    kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: '님을 위한 선물방이 개설되었어요.',
        description: '스윗과 함께 선물을 준비해보세요!',
        imageUrl: 'https://sweet-gift-bucket.s3.ap-northeast-2.amazonaws.com/invitation.png',
        link: {
          mobileWebUrl: import.meta.env.VITE_APP_BASE_URL_KAKAO + '/result',
          webUrl: import.meta.env.VITE_APP_BASE_URL_KAKAO + '/result',
        },
      },
      buttons: [
        {
          title: '선물방 참여하기',
          link: {
            mobileWebUrl: import.meta.env.VITE_APP_BASE_URL_KAKAO + '/result',
            webUrl: import.meta.env.VITE_APP_BASE_URL_KAKAO + '/result',
          },
        },
      ],
    });
    console.log('카카오 공유하기 함수 호출됨1');
  }
  console.log('카카오 공유하기 함수 호출됨2');
};
