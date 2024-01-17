import LottieAnimation from '../../hooks/lottie-animation/LottieAnimation';
import SymbolLoading from '../../../public/motions/symbol_loading-1.json';
import * as S from './Loading.style';

const Loading = () => {
  return (
    <S.LoadingWrapper>
      <LottieAnimation
        animation={SymbolLoading}
        customStyle={{ width: '12rem', height: '12rem' }}
      />
      <S.Text>불러오는중...</S.Text>
    </S.LoadingWrapper>
  );
};

export default Loading;
