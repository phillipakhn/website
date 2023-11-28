import React, { useState } from "react";

function Jobs() {
  const [jobPostings, setJobPostings] = useState([]);
  const [formData, setFormData] = useState({
    jobTitle: "",
    jobDescription: "",
    applicationLink: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleJobSubmit = (e) => {
    e.preventDefault();

    // Add the new job posting to the list
    setJobPostings((prevPostings) => [...prevPostings, formData]);

    // Clear the form data
    setFormData({
      jobTitle: "",
      jobDescription: "",
      applicationLink: "",
    });
  };

  return (
    <div className="JobsPortal">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">Jobs Portal</h1>
            <form onSubmit={handleJobSubmit}>
              <div className="form-group">
                <label>Job Title:</label>
                <input
                  type="text"
                  className="form-control"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Job Description:</label>
                <textarea
                  className="form-control"
                  name="jobDescription"
                  value={formData.jobDescription}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="form-group">
                <label>Application Link:</label>
                <input
                  type="text"
                  className="form-control"
                  name="applicationLink"
                  value={formData.applicationLink}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Create Job Posting
              </button>
            </form>
          </div>
        </div>
        <hr />
        <div className="row my-5">
          <div className="col-lg-12">
            <h2 className="font-weight-light">Job Postings</h2>
            {jobPostings.map((posting, index) => (
              <div key={index} className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">{posting.jobTitle}</h5>
                  <p className="card-text">{posting.jobDescription}</p>
                  <a href={posting.applicationLink} className="btn btn-primary">
                    Apply Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jobs;
