import { useNavigate, useParams } from 'react-router-dom';

const useHandleCountDownZero = (giftee: string) => {
  const navigate = useNavigate();
  const params = useParams();
  const roomId = params.roomId;
  const handleCountDownZero = () => {
    navigate(`/tournament/${giftee}/${roomId}`);
  };

  return handleCountDownZero;
};

export default useHandleCountDownZero;
