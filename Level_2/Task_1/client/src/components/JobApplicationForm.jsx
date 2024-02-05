import React, { useState } from 'react';
import { api } from '../services/api';
import '../styles/JobApplicationForm.css'

const JobApplicationForm = ({ jobId, onSuccess }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    resume: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({ ...prevData, resume: file }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData object to handle file upload
    const formDataForUpload = new FormData();
    formDataForUpload.append('fullName', formData.fullName);
    formDataForUpload.append('email', formData.email);
    formDataForUpload.append('resume', formData.resume);

    try {
      // Send job application to the API
      const response = await api.post(`/jobs/${jobId}/apply`, formDataForUpload);

      // If successful, notify the parent component
      if (onSuccess) {
        onSuccess(response.data);
      }
    } catch (error) {
      console.error('Error submitting job application:', error);
    }
  };

  return (
    <div className="job-application-form">
      <h2>Apply for the Job</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </label>

        <label>
          Resume (PDF or Word document):
          <input
            type="file"
            accept=".pdf, .doc, .docx"
            onChange={handleFileChange}
            required
          />
        </label>

        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
};

export default JobApplicationForm;
