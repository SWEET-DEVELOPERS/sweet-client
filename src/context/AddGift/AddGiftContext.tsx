import { PropsWithChildren, createContext, useContext, useMemo, useState } from 'react';
import { AddGiftInfo } from '../../types/gift';

interface AddGiftInfoContext {
  addGiftInfo: AddGiftInfo;
  updateAddGiftInfo: (newInfo: Partial<AddGiftInfo>) => void;
}

const initialAddGiftInfo: AddGiftInfo = {
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
  const [addGiftInfo, setAddGiftInfo] = useState<AddGiftInfo>(initialAddGiftInfo);

  const updateAddGiftInfo = (newState: Partial<AddGiftInfo>) => {
    setAddGiftInfo((prev) => ({ ...prev, ...newState }));
  };

  const AddGiftInfoContextValue = useMemo(
    () => ({
      addGiftInfo,
      updateAddGiftInfo,
    }),
    [addGiftInfo],
  );

  return (
    <AddGiftContext.Provider value={AddGiftInfoContextValue}>{children}</AddGiftContext.Provider>
  );
};
export default AddGiftContext;
