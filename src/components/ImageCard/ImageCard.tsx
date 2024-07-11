interface ImageCardProps {
  handleModalOpen: (img: { alt: string; src: string }) => void;
  alt: string;
  urls: {
    small: string;
    regular: string;
  };
}

export const ImageCard: React.FC<ImageCardProps> = ({
  handleModalOpen,
  alt,
  urls,
}) => {
  return (
    <div>
      <img
        src={urls.small}
        alt={alt}
        onClick={() => handleModalOpen({ alt, src: urls.regular })}
      />
    </div>
  );
};
