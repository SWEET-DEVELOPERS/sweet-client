export const shareKakao = () => {
  if (window.Kakao) {
    const kakao = window.Kakao;
    if (!kakao.isInitialized()) {
      kakao.init(process.env.VITE_KAKAO_JAVASCRIPT_KEY);
    }

    kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: '최종 순위를 확인하세요',
        description: '스윗에서 토너먼트 결과가 나왔습니다! 지금 확인해보세요.',
        imageUrl: 'https://sweet-gift-bucket.s3.ap-northeast-2.amazonaws.com/rank.png',
        link: {
          mobileWebUrl: import.meta.env.VITE_APP_BASE_URL_KAKAO + '/tournament-ranking',
          webUrl: import.meta.env.VITE_APP_BASE_URL_KAKAO + '/tournament-ranking',
        },
      },
      buttons: [
        {
          title: '바로 가기',
          link: {
            mobileWebUrl: import.meta.env.VITE_APP_BASE_URL_KAKAO + '/tournament-ranking',
            webUrl: import.meta.env.VITE_APP_BASE_URL_KAKAO + '/tournament-ranking',
          },
        },
      ],
    });
  }
};
