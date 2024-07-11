import css from "./LoadMoreBtn.module.css";

export const LoadMoreBtn = ({ onClick }) => {
  return (
    <button className={css.btn} onClick={onClick} type="button">
      Load More
    </button>
  );
};
