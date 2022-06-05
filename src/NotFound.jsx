import React from "react";
import { Link } from "react-router-dom";
function NotFound() {
    return (
        <div className="h-screen bg-black flex justify-center items-center">
            <h1 className="text-9xl  text-white"> kyui time waste kr rge </h1>
            <Link to="/assignments" className="bg-red-600 text-2xl">go back to assignments </Link>
        </div>
    );
}

export default NotFound;