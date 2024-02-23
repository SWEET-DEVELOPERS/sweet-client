export const useHandleShare = async (title: string, text: string) => {
  try {
    await navigator.share({
      title: title,
      text: text,
      url: window.location.href,
    });
  } catch (error) {
    console.error('Web Share API를 지원하지 않습니다.');
  }
  return <div></div>;
};

export default useHandleShare;
