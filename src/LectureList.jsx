import React from "react";
import axios from 'axios';
import UserRow from "./UserRow";
import { useEffect } from "react";

function LectureList() {
  let [lectures, setLectures] = React.useState([]);



  useEffect(() => {
    const token = axios.get(`https://api.codeyogi.io/batches/1/sessions`, { withCredentials: true, });

    token.then((response) => {
      setLectures(response.data)
    });
  }, []);


  return (
    <div className="h-full bg-gray-200 ">
      <h1 className="text-9xl">user list</h1>
      {lectures.map((l) => (<LectureRow lecture={l} />))}
    </div>

  );
}

export default LectureList;