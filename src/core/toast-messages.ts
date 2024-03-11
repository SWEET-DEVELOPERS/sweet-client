/**@todo 이미지 최소,최대 height 상의 필요*/
export const IMAGE_HEIGHT = Object.freeze({
  MAX: 5000,
  MIN: 300,
});

export const MESSAGE = Object.freeze({
  HEIGHT_SMALL: `이미지 세로길이가 너무 작습니다. ${IMAGE_HEIGHT.MIN}px 이상 이미지를 선택해주세요.`,
  HEIGHT_BIG: `이미지 세로길이가 너무 큽니다. ${IMAGE_HEIGHT.MAX}px 이하 이미지를 선택해주세요. `,
  UNSELECT_DATE: '날짜를 먼저 선택해주세요.',
  INVALID_INVITATION_CODE: '유효하지 않은 초대코드입니다.',
  VALIDATE_SPACIAL_CHARACTER: '특수문자는 입력하실 수 없습니다.',
});
