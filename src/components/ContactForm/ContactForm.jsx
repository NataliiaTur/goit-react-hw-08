import css from "./ContactForm.module.css";
import { ErrorMessage, Formik, Form, Field } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { addContact, selectContacts } from "../../redux/contactsSlice";
import { addContactThunk } from "../../redux/contactsOps";

const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
  number: Yup.string()
    .matches(
      /^\+?\d{1,4}[-.\s]?\d{2,4}[-.\s]?\d{2,4}[-.\s]?\d{2,4}$/,
      "Invalid phone number"
    )
    .min(7, "Too short!")
    .max(15, "Too long!")
    .required("Required"),
});

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const nameFieldId = useId();
  const numberFieldId = useId();
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (values, actions) => {
    const isDuplicate = contacts.some(
      (contact) => contact.name.toLowerCase() === values.name.toLowerCase()
    );
    if (isDuplicate) {
      alert(`${values.name} is already in contacts.`);
      return;
    }

    dispatch(
      addContactThunk({
        name: values.name.trim(),
        number: values.number.trim(),
      })
    );

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactFormSchema}
    >
      <Form className={css.formContainer}>
        <div className={css.inputGroup}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field
            className={css.nameInput}
            type="text"
            name="name"
            id={nameFieldId}
          />
          <ErrorMessage name="name" component="span" />
        </div>
        <div className={css.inputGroup}>
          <label htmlFor={numberFieldId}>Number</label>
          <Field type="tel" name="number" id={numberFieldId} />
          <ErrorMessage name="number" component="span" />
        </div>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
