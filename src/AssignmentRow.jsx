import React from "react";
function AssignmentRow({ assignment }) {
  return (
    <div className="m-2 p-4 text-lg rounded-md  shadow-lg">
      <div className="text-lg font-bold"> {assignment.title}</div>
      <div className="text-gray-700">{assignment.due_date}</div>
      <div className="text-gray-700">{assignment.description}</div>

    </div>

  );
}

export default AssignmentRow;