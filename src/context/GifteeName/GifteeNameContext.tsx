import { PropsWithChildren, createContext, useContext, useMemo, useState } from 'react';

interface GifteeNameContextInfo {
  gifteeName: string;
  updateGifteeName: (newInfo: string) => void;
}

const GifteeNameContext = createContext<GifteeNameContextInfo>({
  gifteeName: '',
  updateGifteeName: () => {},
});

export const useUpdateGifteeNameContext = () => useContext(GifteeNameContext);

export const UpdateGifteeNameProvider = ({ children }: PropsWithChildren) => {
  const [gifteeName, setGifteeName] = useState<string>('');

  const updateGifteeName = (newState: string) => {
    setGifteeName(newState);
  };

  const UpdateGifteeNameContextValue = useMemo(
    () => ({
      gifteeName,
      updateGifteeName,
    }),
    [gifteeName],
  );

  return (
    <GifteeNameContext.Provider value={UpdateGifteeNameContextValue}>
      {children}
    </GifteeNameContext.Provider>
  );
};

export default GifteeNameContext;
