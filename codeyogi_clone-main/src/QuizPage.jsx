import React from "react";
import { Link } from "react-router-dom";


function QuizPage() {
  return (
    <div className="h-screen bg-gray-200 flex justify-center items-center">

      <h1 className="text-9xl">quizs</h1>
      <Link to="/lectures" className="bg-red-600">go back to lectures </Link>
    </div>
  );
}

export default QuizPage;