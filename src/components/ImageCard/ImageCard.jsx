export const ImageCard = ({ handleModalOpen, alt, urls }) => {
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
