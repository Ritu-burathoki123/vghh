import React from "react";
import axios from 'axios';
import UserRow from "./UserRow";

function LectureList() {
  const token = axios.get("https://randomuser.me/api/?results=5");
  let [users, setUsers] = React.useState([]);

  token.then((response) => {
    console.log("response aa gya response aa gya");
    setUsers(response.data.results);
    console.log(response.data.results);
  });
  console.log("aage badho");
  return (
    <div className="h-full bg-gray-200 ">
      <h1 className="text-9xl">user list</h1>
      {users.map((u) => (<UserRow user={u} />))}
    </div>

  );
}

export default LectureList;