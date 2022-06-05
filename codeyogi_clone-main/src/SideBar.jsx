import React from "react";
import { Link } from "react-router-dom";
import { MdQuiz } from "react-icons/md";
import { MdAssignment } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { GiTeacher } from "react-icons/gi";

function SideBar() {
    return (
        <div className="flex flex-col w-60 bg-gray-600 p-2 space-y-4">
            <div className="flex space-x-4">
                <MdAssignment />
                <Link to="/assignments" className="text-white font-bold">Assignments</Link>
            </div>
            <div className="flex space-x-4">
                <GiTeacher />
                <Link to="/lectures" className="text-white font-bold">Lectures</Link>
            </div>
            <div className="flex space-x-4">
                <MdQuiz />
                <Link to="/quizs" className="text-white font-bold">Quizs</Link>
            </div>

            <span className="grow"></span>
            <div className="flex space-x-4">
                <CgProfile className="h-4" />
                <Link to="/profile" className="text-white font-bold">Profile</Link>
            </div>
        </div>


    );

}


export default SideBar; 