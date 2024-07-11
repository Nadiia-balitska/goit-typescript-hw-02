export interface Photo {
  id: string;
  alt: string;
  urls: {
    small: string;
    regular: string;
  };
}
export interface SelectImg {
  alt: string;
  src: string;
}
