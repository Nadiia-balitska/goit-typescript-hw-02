import { useState, useEffect } from "react";
import "./App.css";
// import {
//   SearchBar,
//   LoadMoreBtn,
//   Loader,
//   ImageModal,
//   ImageGallery,
//   ErrorMessage,
// } from "components";
import { ErrorMessage } from "./components/ErrorMessage/ErrorMessage";
import { ImageModal } from "./components/ImageModal/ImageModal";
import { ImageGallery } from "./components/ImageGallery/ImageGallery";
import { LoadMoreBtn } from "./components/LoadMoreBtn/LoadMoreBtn";
import { Loader } from "./components/Loader/Loader";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { getPhotosByQuery } from "./components/photoApi";
import { Photo, SelectImg } from "./types";

function App() {
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [showLoadMore, setShowLoadMore] = useState<boolean>(false);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [selectImg, setSelectImg] = useState<SelectImg | null>(null);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  console.log(query);
  useEffect(() => {
    if (!query) return;

    const getData = async () => {
      try {
        setIsLoading(true);
        const { results, total } = await getPhotosByQuery({ query, page });

        if (!total) {
          setIsEmpty(true);
          return;
        }

        setPhotos((prev) => [...prev, ...results]);
        setShowLoadMore(page < Math.ceil(total / 15));
      } catch (error: any) {
        console.log(error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [query, page]);

  const onSubmit = (newQuery: string) => {
    if (newQuery === query) return;

    setQuery(newQuery);
    setPhotos([]);
    setPage(1);
    setShowLoadMore(false);
    setIsEmpty(false);
    setError(null);
  };

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };
  const handleModalOpen = (img: SelectImg) => {
    setIsOpenModal(true);
    setSelectImg(img);
  };
  const closeModal = () => {
    setIsOpenModal(false);
    setSelectImg(null);
  };

  return (
    <div>
      <SearchBar onSubmit={onSubmit} />
      {photos.length > 0 && (
        <ImageGallery photos={photos} handleModalOpen={handleModalOpen} />
      )}
      {showLoadMore && <LoadMoreBtn onClick={handleLoadMore} />}
      {isEmpty && (
        <ErrorMessage
          title={`We did not found photos with the word ${query} `}
        />
      )}
      {isLoading && <Loader />}
      {error && <ErrorMessage title={`Something went wrong ${error}`} />}
      {isOpenModal && (
        <ImageModal
          modalIsOpen={isOpenModal}
          closeModal={closeModal}
          selectImg={selectImg}
        />
      )}
    </div>
  );
}

export default App;
