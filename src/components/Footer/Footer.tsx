import { Divider, IcInstagram, IcPalmspring, LongDivider, SweetLogoGray } from '../../assets/svg';
import * as S from './Footer.style';
import { Link } from '../../utils/Footer.utils';

interface FooterType {
  customStyle?: React.CSSProperties;
}

const Footer = ({ customStyle }: FooterType) => {
  const handlePersonalClick = () => {
    window.open(Link.personalRule, '_blank');
  };
  const handleRuleClick = () => {
    window.open(Link.howToUse, '_blank');
  };
  const InstaGram = () => {
    window.open(Link.InstaGram, '_blank');
  };
  const PamSpring = () => {
    window.open(Link.PalmSpring, '_blank');
  };
  return (
    <S.FooterWrapper style={customStyle}>
      <S.TextWrapper>
        <SweetLogoGray style={{ width: '7.6rem', height: '2.6rem' }} />
        <S.TextOneLine>
          <S.BoldText onClick={handlePersonalClick}>개인정보처리방침</S.BoldText>
          <S.BoldText onClick={handleRuleClick}>이용약관</S.BoldText>
        </S.TextOneLine>
        <S.OwnerWrapper>
          <S.TextOneLine>
            <S.Text>대표</S.Text>
            <Divider style={{ width: '0.1rem', height: '1rem' }} /> <S.Text>시동훈</S.Text>
          </S.TextOneLine>
          <S.TextOneLine>
            <S.Text>이메일</S.Text>
            <Divider style={{ width: '0.1rem', height: '1rem' }} />
            <S.Text>gift.sweet.official@gmail.com</S.Text>
          </S.TextOneLine>
        </S.OwnerWrapper>
        <LongDivider />
        <S.Text>Copyright 2024. Sweet. all rights reserved.</S.Text>
        <S.Icon>
          <IcInstagram style={{ width: '2.8rem' }} onClick={InstaGram} />

          <IcPalmspring style={{ width: '2.8rem' }} onClick={PamSpring} />
        </S.Icon>
      </S.TextWrapper>
    </S.FooterWrapper>
  );
};

export default Footer;
