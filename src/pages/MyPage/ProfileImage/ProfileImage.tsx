import * as S from './ProfileImage.style';

interface ProfileImageProps {
  image: string;
}

const ProfileImage = ({ image }: ProfileImageProps) => {
  return <S.ProfileImageWrapper src={image} />;
};

export default ProfileImage;
