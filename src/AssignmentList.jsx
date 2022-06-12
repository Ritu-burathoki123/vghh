import React from "react";
import axios from 'axios';
import { useEffect } from "react";
import dog from "./dog.jpg";

function AssignmentList() {
  let [assignments, setAssignments] = React.useState([]);



  useEffect(() => {
    const token = axios.get(`https://api.codeyogi.io/batches/1/AssignmentLists`, { withCredentials: true, });

    token.then((response) => {
      console.log("response aa gya response aa gya");
      // setAssignments(response.data);
      console.log(response.data);
    });
  }, []);


  return (
    <div className="h-full bg-yellow-200 ">
      <h1 className="text-9xl">Assignment list</h1>

      {assignments.map((a) => (<div>{a.title}</div>))}
    </div>

  );
}

export default AssignmentList;