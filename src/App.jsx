import React from "react";
import AssignmentList from "./AssignmentList";
import LectureList from "./LectureList";
import QuizPage from "./QuizPage";
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from "./MainLayout";
import NotFound from "./NotFound";
import AssignmentDetail from "./AssignmentDetail";
import Profile from "./Profile";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Navigate to="/quizs" />} />
      <Route path="/" element={<MainLayout />} >
        <Route path="assignments" element={<AssignmentList />} />
        <Route path="lectures" element={<LectureList />} />

        <Route path="profile" element={<Profile />} />

        <Route path="assignments/:id/detail" element={<AssignmentDetail />} />
      </Route>
      <Route path="quizs" element={<QuizPage />} />

      <Route path="*" element={<NotFound />} />
    </Routes>

  );
}

export default App;
