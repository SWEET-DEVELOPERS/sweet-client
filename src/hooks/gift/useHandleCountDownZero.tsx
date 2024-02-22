import { useNavigate, useParams } from 'react-router-dom';

const useHandleCountDownZero = (giftee: string) => {
  const navigate = useNavigate();
  const params = useParams();
  const roomId = params.roomId;

  navigate(`/tournament/${giftee}/${roomId}`);
};

export default useHandleCountDownZero;
