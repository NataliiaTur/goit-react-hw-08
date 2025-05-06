import { useState, useEffect } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataThunk } from "./redux/contactsOps";
import { selectError, selectLoading } from "./redux/contactsSlice";
import { selectNameFilter } from "./redux/filtersSlice";

function App() {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectNameFilter);

  useEffect(() => {
    dispatch(fetchDataThunk());
  }, [dispatch]);

  return (
    <div className="wrapper">
      <h1 className="title">Phonebook</h1>
      <ContactForm />
      {isLoading && !error && <h2>Request in progress...</h2>}
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
