import Modal from "react-modal";
import { SelectImg } from "../../types";

Modal.setAppElement("#root");
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    padding: "5px",
  },
  overlay: {
    backgroundColor: "rgba(40, 40, 40, 0.75)",
  },
};

interface ImageModalProps {
  modalIsOpen: boolean;
  closeModal: () => void;
  selectImg: SelectImg | null;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  modalIsOpen,
  closeModal,
  selectImg,
}) => {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Image Modal"
      >
        <img src={selectImg?.src} alt={selectImg?.alt} />
      </Modal>
    </div>
  );
};
