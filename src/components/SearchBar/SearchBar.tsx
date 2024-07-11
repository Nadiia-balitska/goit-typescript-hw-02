import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import s from "./SearchBar.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface InitValues {
  text: string;
}
interface SearchBarProps {
  onSubmit: (text: any) => void;
}

const initialValues: InitValues = { text: "" };

const validationSchema = Yup.object().shape({
  text: Yup.string()
    .min(3, "To short text")
    .max(15, "To long text")
    .required("Enter Text"),
});

export const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const submitForm = (value: InitValues, actions: any) => {
    if (!value.text.trim()) {
      toast.error("Enter searched word");
      return;
    }

    onSubmit(value.text);
    actions.resetForm();
  };

  return (
    <header>
      <Formik
        initialValues={initialValues}
        onSubmit={submitForm}
        validationSchema={validationSchema}
      >
        <Form>
          <Field
            type="text"
            autoComplete="off"
            placeholder="Search images and photos"
            name="text"
          />
          <ErrorMessage className={s.error} name="text" component="span" />
          <button onSubmit={onSubmit} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </header>
  );
};
