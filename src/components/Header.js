import { useState } from "react";

const Header = () => {
  const [login, setLogin] = useState("Login");

  return (
    // <button onClick={}
    <button
      //   className="login-btn"
      onClick={() => {
        login === "Login" ? setLogin("Logout") : setLogin("Login");
      }}
    >
      {" "}
      {login}
    </button>
  );
};

export default Header;


