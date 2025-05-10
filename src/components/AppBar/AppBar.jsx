import React from "react";
import AuthNav from "../AuthNav/AuthNav";
import css from "./AppBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";
import UserMenu from "../UserMenu/UserMenu";
import { RiContactsBookLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const AppBar = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  return (
    <div className={css.header}>
      <Link to="/">
        <RiContactsBookLine style={{ fontSize: "40px", marginRight: "25px" }} />
      </Link>
      {isLoggedIn && <UserMenu />}

      {isLoggedIn && <h2>{user.name}</h2>}

      {!isLoggedIn && <AuthNav />}

      {isLoggedIn && (
        <button onClick={() => dispatch(logoutThunk())}>Logout</button>
      )}
    </div>
  );
};

export default AppBar;
