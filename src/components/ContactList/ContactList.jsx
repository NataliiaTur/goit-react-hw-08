import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filtersSlice";
import {
  selectContacts,
  selectError,
  selectFilteredContacts,
  selectLoading,
} from "../../redux/contactsSlice";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);

  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <>
      <ul className={css.list}>
        {visibleContacts.map((contact) => (
          <li key={contact.id}>
            <Contact data={contact} />
          </li>
        ))}
      </ul>
      {loading && <h2>Loading...</h2>}
      {error && <h2>Server is dead...</h2>}
    </>
  );
};

export default ContactList;
