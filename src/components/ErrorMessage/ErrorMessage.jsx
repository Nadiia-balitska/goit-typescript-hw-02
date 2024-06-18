import css from "./ErrorMessage.module.css";
import clsx from "clsx";

export const ErrorMessage = ({ title, top, bottom }) => {
  return (
    <h2
      className={clsx(css.title, {
        [css.top]: top,
        [css.bottom]: bottom,
      })}
    >
      {title}
    </h2>
  );
};
