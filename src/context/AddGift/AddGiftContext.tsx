import { PropsWithChildren, createContext, useContext, useMemo, useState } from 'react';
import { AddGiftInfo } from '../../types/etc';

interface AddGiftInfoContext {
  addGiftInfo: AddGiftInfo;
  updateAddGiftInfo: (newInfo: Partial<AddGiftInfo>) => void;
}

const initialAddGiftInfo: AddGiftInfo = {
  roomId: 0,
  name: '',
  cost: 0,
  imageUrl: '',
  url: ',',
};

const AddGiftContext = createContext<AddGiftInfoContext>({
  addGiftInfo: initialAddGiftInfo,
  updateAddGiftInfo: () => {},
});

export const useAddGiftContext = () => useContext(AddGiftContext);

export const AddGiftProvider = ({ children }: PropsWithChildren) => {
  const [AddGiftInfo, setAddGiftInfo] = useState<AddGiftInfo>(initialAddGiftInfo);

  const updateAddGiftInfo = (newInfo: Partial<AddGiftInfo>) => {
    setAddGiftInfo((prev) => ({ ...prev, ...newInfo }));
  };

  const AddGiftInfoContextValue = useMemo(
    () => ({
      AddGiftInfo,
      updateAddGiftInfo,
    }),
    [AddGiftInfo],
  );

  return (
    <AddGiftContext.Provider value={AddGiftInfoContextValue}>{children}</AddGiftContext.Provider>
  );
};
export default AddGiftContext;
