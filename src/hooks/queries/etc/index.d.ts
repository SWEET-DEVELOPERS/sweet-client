export interface OpenGraphResponseType {
  data: {
    title: string;
    image: string;
  };
}

export interface OpenGraphRequestType {
  BaseURL: string;
}

export interface PresignedUrlResponseType {
  presignedUrl: string;
}

export interface OpenGraphRequestType {
  fileName: string;
}
