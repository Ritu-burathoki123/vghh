import React from "react";
import dog from "./dog.jpg";
function AssignmentList() {
  return (
    <div className="h-full bg-gray-200 flex justify-center items-center">
      <h1 className="h-10">assignments</h1>
      <img className="h-30" src={dog} />
    </div>

  );
}

export default AssignmentList;