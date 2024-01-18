import { useCallback } from 'react';

const useClipboard = () => {
  const handleCopyToClipboard = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('클립보드에 링크가 복사되었어요.');
    } catch (err) {
      console.log(err);
    }
  }, []);

  return { handleCopyToClipboard };
};

export default useClipboard;
