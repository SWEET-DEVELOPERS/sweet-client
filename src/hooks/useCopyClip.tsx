import { useCallback } from 'react';
import { toast } from 'react-toastify';

const useClipboard = () => {
  const handleCopyToClipboard = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.info('링크 복사가 완료되었어요', {
        position: 'bottom-center',
        autoClose: 700,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: 'colored',
        icon: false,
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return { handleCopyToClipboard };
};

export default useClipboard;
