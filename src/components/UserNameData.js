import { useEffect, useState } from "react";
import { maindata } from "./constants";
import NewData from "./NewData";

const UserNameData = (props) => {
  const { resData } = props;
  const { username } = resData;
  const [main, setMain] = useState([]);

  useEffect(() => {
    fetchAPI();
  }, []);

  const fetchAPI = async () => {
    const data = await fetch(maindata);
    const json = await data.json();
    setMain(json);
  };

  return (
    <div>
      <h1>{resData.username}</h1>
      <h1>{resData.address.street}</h1>
      <h1>
        {main.map((item) => (
          <NewData resData={item} /> //print nested object of array
        ))}
      </h1>
    </div>
  );
};

export default UserNameData;

// import React from "react";

// const UserNameData = (props) => {
//   const { usern } = props;
//   console.log(usern);

//   //   console.log(sortData);
//   // const { username } = usern;
//   // console.log(username);
//   return (
//     <div>
//       // {/* {" "} */}
//       <h3>{usern.username}</h3>
//     </div>
//   );
// };

// export default UserNameData;
