import React, { useState, useEffect } from "react";
import UserData from "./components/UserData";
// import

const App = () => {
  // state variable for header Nav-items
  const [login, setLogin] = useState("Login");
  const [text, setText] = useState(" ");

  // API call to get restaurant data
  return (
    <div>
      <button>Home</button>
      <input onChange={() => text === setText()}></input>

      <button
        onClick={() =>
          login === "Login" ? setLogin("Logout") : setLogin("Login")
        }
      >
        {" "}
        {login}
      </button>
      <button>Cart</button>
      <UserData />
    </div>
  );
};

export default App;
