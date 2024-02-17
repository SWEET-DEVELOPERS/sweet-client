import { useState } from 'react';
import { GiftData } from '../../types/tournament';

// 랜덤 아이템을 반환하는 커스텀 훅
const useRandomItems = (initialItems: GiftData[]) => {
  const [randomItems] = useState(() => {
    // 초기 아이템을 랜덤하게 섞어서 반환
    return [...initialItems].sort(() => Math.random() - 0.5);
  });

  return randomItems;
};

export default useRandomItems;
