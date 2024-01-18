import { useNavigate } from 'react-router';
import { Divider, IcInstagram, IcPalmspring, LongDivider, SweetLogoGray } from '../../assets/svg';
import * as S from './Footer.style';
import { Link } from '../../utils/Footer.utils';

const Footer = () => {
  return (
    <S.FooterWrapper>
      <S.TextWrapper>
        <SweetLogoGray style={{ width: '7.6rem', height: '2.6rem' }} />
        <S.TextOneLine>
          <S.BoldText href={Link.personalRule}>개인정보처리방침</S.BoldText>
          <S.BoldText href={Link.howToUse}>이용약관</S.BoldText>
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
          <a href={Link.InstaGram}>
            <IcInstagram style={{ width: '2.8rem' }} />
          </a>
          <a href={Link.PalmSpring}>
            <IcPalmspring style={{ width: '2.8rem' }} />
          </a>
        </S.Icon>
      </S.TextWrapper>
    </S.FooterWrapper>
  );
};

export default Footer;
