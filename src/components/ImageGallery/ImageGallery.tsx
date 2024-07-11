import { Photo } from "../../types";
import { ImageCard } from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

interface ImageGalleryProps {
  photos: Photo[];
  handleModalOpen: (img: { alt: string; src: string }) => void;
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({
  photos,
  handleModalOpen,
}) => {
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
