export interface OpenGraphResponseType {
  title: string;
  image: string;
}

export interface OpenGraphRequestType {
  BaseURL: string;
}

export interface PresignedUrlResponseType {
  presignedUrl: string;
}

export interface PresignedUrlRequestType {
  fileName: string;
}

export interface AddGiftInfo {
  roomId: number;
  name: name;
  cost: cost;
  imageUrl: imageUrl;
  url: link;
}
