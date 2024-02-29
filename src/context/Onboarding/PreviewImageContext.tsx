import { PropsWithChildren, createContext, useContext, useEffect, useMemo, useState } from 'react';
import { PreviewImageInfo } from '../../types/Onboarding';

interface PreviewImageContext {
  previewImageInfo: PreviewImageInfo;
  updatePreviewImageInfo: (newInfo: Partial<PreviewImageInfo>) => void;
}

const initialPreviewImageInfo: PreviewImageInfo = {
  isImageUploaded: false,
  previewImage: '' || null,
  imageName: '',
  file: null,
};

const PreviewImageContext = createContext<PreviewImageContext>({
  previewImageInfo: initialPreviewImageInfo,
  updatePreviewImageInfo: () => {},
});

export const usePreviewImageContext = () => useContext(PreviewImageContext);

export const PreviewImageProvider = ({ children }: PropsWithChildren) => {
  const [previewImageInfo, setPreviewImageInfo] =
    useState<PreviewImageInfo>(initialPreviewImageInfo);

  const updatePreviewImageInfo = (newInfo: Partial<PreviewImageInfo>) => {
    setPreviewImageInfo((prev) => ({ ...prev, ...newInfo }));
  };

  /**@todo 전체 값 확인용 useEffect */

  useEffect(() => {
    console.log(' 컨텍스트 내 previewImageInfo 확인', previewImageInfo);
  }, [previewImageInfo]);

  const PreviewImageContextValue = useMemo(
    () => ({
      previewImageInfo,
      updatePreviewImageInfo,
    }),
    [previewImageInfo],
  );

  return (
    <PreviewImageContext.Provider value={PreviewImageContextValue}>
      {children}
    </PreviewImageContext.Provider>
  );
};
