import { AddGiftInfo } from '../types/gift';

interface convertURLtoFileProps {
  url: string;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setModalStatus: React.Dispatch<React.SetStateAction<boolean>>;
  updateAddGiftInfo: (newInfo: Partial<AddGiftInfo>) => void;
}

const useConvertURLtoFile = async ({
  url,
  setStep,
  setModalStatus,
  updateAddGiftInfo,
}: convertURLtoFileProps) => {
  console.log('들어오고 있는 url', url);
  try {
    const response = await fetch(url);

    if (response.status === 302) {
      return setStep(3);
    }

    const data = await response.blob();
    // const extensions = url.split('.').pop();
    const filename = url.split('/').pop();
    const metadata = { type: `image/*` };
    const convertedOgFile = new File([data], filename!, metadata);
    return { convertedOgFile };
  } catch (error) {
    console.error('error?', error);
    updateAddGiftInfo({ imageUrl: '' });
    setModalStatus(true);
    setStep(3);
    return { convertedOgFile: null };
  }
};

export default useConvertURLtoFile;
