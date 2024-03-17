import { useEffect, useState } from "react";
import UserNameData from "./UserNameData";
// import NewData from "./NewData";

const UserData = () => {
  const [users, usersData] = useState([]);

  useEffect(() => {
    fetchAPI();
  }, []);

  const fetchAPI = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonData = await data.json();
    usersData(jsonData);
  };
  return (
    <div>
      <div>
        <div>
          {users.map((item) => (
            <UserNameData resData={item} />
          ))}
        </div>
        {/* <div>
          {users.map((item) => (
            <NewData resData={item} />   // separate list of nested object of array
          ))} 
        </div> */}
      </div>
    </div>
  );
};

export default UserData;

// import { useEffect, useState } from "react";
// import UserNameData from "./UserNameData";

// const UserData = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetchAPI();
//   }, []);

//   const fetchAPI = async () => {
//     const data = await fetch("https://jsonplaceholder.typicode.com/users");
//     // console.log(data);
//     const jsonData = await data.json();
//     console.log(jsonData);
//     // const user = await jsonData;
//     // const sortData = user.sort((a, b) => a.username > b.username);
//     // const strDescending = user.sort((a, b) =>
//     // a.username > b.username ? -1 : 1,
//     // );
//     // console.log(sortData);
//     setUsers(sortData);
//     // console.log(user[2]);
//   };

//   return (
//     <div>
//       {users.map((item) => (
//         <UserNameData usern={item.username} />
//       ))}
//       {/* <UserNameData usern={users[4]} /> */}
//     </div>
//   );
// };

// export default UserData;
