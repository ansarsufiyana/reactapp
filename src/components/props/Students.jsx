import React from "react";

function Students(props) {
  return (
    <div style={{ backgroundColor: "skyblue", margin: 10 }}>
      <h1>hello {props.name}</h1>
      <h2>Email : {props.email}</h2>
      <h4>Address {props.other.address}</h4>
      <h4>Mobile {props.other.mobile}</h4>
    </div>
  );
}

export default Students;
