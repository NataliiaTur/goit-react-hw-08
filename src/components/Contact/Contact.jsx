import css from "./Contact.module.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoPersonSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { deleteContactThunk } from "../../redux/contactsOps";
import { selectContacts } from "../../redux/contactsSlice";

const Contact = ({ data }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

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

      <button
        className={css.button}
        onClick={() => dispatch(deleteContactThunk(data.id))}
        type="button"
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
