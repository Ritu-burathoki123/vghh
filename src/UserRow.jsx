import React from "react";
function UserRow({ user }) {
  return (
    <div className="m-2 p-4 rounded-md  shadow-lg">
      <div> Name: {user.name.title} {user.name.first} {user.name.last} </div>
      <div>Email: {user.email}</div>
      <div>Age: {user.dob.age}</div>
    </div>

  );
}

export default UserRow;