import css from "./Contact.module.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoPersonSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { deleteContactThunk } from "../../redux/contacts/operations";

import { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const Contact = ({ data }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleDelete = () => {
    dispatch(deleteContactThunk(data.id));
    closeModal();
  };

  return (
    <div className={css.wrapper}>
      <div className={css.twoIconsWrapper}>
        <div className={css.iconsWrapper}>
          <IoPersonSharp />
          <p>{data.name}</p>
        </div>
        <div className={css.iconsWrapper}>
          <BsFillTelephoneFill />
          <p>{data.number}</p>
        </div>
      </div>

      <button className={css.button} onClick={openModal} type="button">
        Delete
      </button>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Confirm Delete"
        className={css.modal}
        overlayClassName={css.overlay}
      >
        <h2>Are you sure you want to delete this contact?</h2>
        <div className={css.modalButtons}>
          <button onClick={handleDelete} className={css.confirmButton}>
            Yes, delete
          </button>
          <button onClick={closeModal} className={css.cancelButton}>
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Contact;
