import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={css.container}>
      <h2>👩‍💻 Про розробника / About the Developer</h2>
      <p>
        Привіт! Я — Наталія, Junior Frontend Developer. Цей застосунок — мій
        практичний кейс, в якому я реалізувала:
      </p>
      <p>🧱 Структурування проєкту</p>
      <p>🔄 Логіку авторизації</p>
      <p>🌐 Роботу з API</p>
      <p>🚨 UX-повідомлення про помилки</p>
      <p>
        📬 Зі мною можна зв'язатись:{" "}
        <a
          href="https://github.com/NataliiaTur"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>{" "}
        |{" "}
        <a
          href="https://www.linkedin.com/in/nataliiatur/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </p>
      <h2>📱 Про застосунок / About the App</h2>
      <p>
        <strong>Телефонна книга</strong> — це персональний застосунок для
        збереження, перегляду та керування контактами. Доступ можливий лише
        після авторизації.
      </p>
      <p>✅ Додавання, редагування, видалення контактів;</p>
      <p>🔍 Пошук за ім’ям;</p>
      <p>📋 Форма з валідацією;</p>
      <p>🔐 Захищений доступ (реєстрація / логін);</p>
      <p>
        🔧 Побудовано на: React, Redux Toolkit, Axios, React Router, Formik +
        Yup.
      </p>
    </div>
  );
};

export default HomePage;
