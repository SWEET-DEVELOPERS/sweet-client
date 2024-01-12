import * as S from './ProfileImage.style';

interface ProfileImageProps {
  image: string;
}

const ProfileImage = ({ image }: ProfileImageProps) => {
  return <S.Wrapper src={image} />;
};

export default ProfileImage;
