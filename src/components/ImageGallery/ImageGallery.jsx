import { ImageCard } from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export const ImageGallery = ({ photos, handleModalOpen }) => {
  return (
    <ul className={css.list}>
      {photos.map((photo) => (
        <li key={photo.id}>
          <ImageCard {...photo} handleModalOpen={handleModalOpen} />
        </li>
      ))}
    </ul>
  );
};
