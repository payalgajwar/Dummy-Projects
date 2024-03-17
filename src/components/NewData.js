import React from "react";

const NewData = (props) => {
  const { resData } = props;
  const {
    address: { street, geo },
  } = resData; // destructing of nested object in array or in object
  //   const {
  //     address: {
  //       geo: { lat },
  //     },
  //   } = resData; // destructing of nested under object(multilayer nesting of object) in array or in object
  return (
    <div>
      <div>{street}</div>
      <div>{geo.lat}</div>
      {/* <div>{lat}</div> */}
    </div>
  );
};

export default NewData;
