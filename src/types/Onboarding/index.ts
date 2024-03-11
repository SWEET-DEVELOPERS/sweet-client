export type OnboardingInfo = {
  gifteeName: string;
  imageUrl?: string;
  deliveryDate: string;
  tournamentStartDate: string;
  tournamentDuration: string;
};

export type PreviewImageInfo = {
  isImageUploaded: boolean;
  previewImage: string | null;
  imageName: string;
  // file: File | null;
  /**@todo 파일 추후 타입 지정 */
  file: any;
};
