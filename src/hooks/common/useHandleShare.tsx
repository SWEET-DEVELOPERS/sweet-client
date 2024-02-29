export const useHandleShare = async (
  title: string,
  text: string,
  url: string,
  handleCopyToClipboard: (text: string) => void,
) => {
  try {
    await navigator.share({
      title: title,
      text: text,
      url: url,
    });
  } catch (error) {
    console.error('Web Share API를 사용할 수 없습니다.', error);
  }

  if (typeof navigator.share === 'undefined') {
    handleCopyToClipboard(url);
    console.log('클릭');
  }
};
