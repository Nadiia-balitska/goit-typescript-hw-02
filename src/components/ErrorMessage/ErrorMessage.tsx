import css from "./ErrorMessage.module.css";
import clsx from "clsx";

interface ErrorMessageProps {
  title: string;
  top?: boolean;
  bottom?: boolean;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  title,
  top,
  bottom,
}) => {
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
