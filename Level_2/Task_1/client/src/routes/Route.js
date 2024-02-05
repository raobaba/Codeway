import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import JobListingsPage from "../pages/JobListingsPage";
import JobDetailPage from "../pages/JobDetailPage";
import EmployerDashboardPage from "../pages/EmployerDashboardPage";
import CandidateDashboardPage from "../pages/CandidateDashboardPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/job-listings" element={<JobListingsPage />} />
      <Route path="/job/:jobId" element={<JobDetailPage />} />
      <Route path="/employer-dashboard" element={<EmployerDashboardPage />} />
      <Route path="/candidate-dashboard" element={<CandidateDashboardPage />} />
    </Routes>
  );
};

export default Router;
