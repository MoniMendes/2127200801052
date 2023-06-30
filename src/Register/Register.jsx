import React from 'react';

export default function Register() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8">
          <form className="card p-4">
            <h2 className="text-center mb-4">Registration</h2>
            <div className="mb-3">
              <label htmlFor="companyName" className="form-label">Company Name</label>
              <input type="text" className="form-control" id="companyName" />
            </div>
            <div className="mb-3">
              <label htmlFor="ownerName" className="form-label">Owner Name</label>
              <input type="text" className="form-control" id="ownerName" />
            </div>
            <div className="mb-3">
              <label htmlFor="rollNo" className="form-label">Roll No</label>
              <input type="number" className="form-control" id="rollNo" />
            </div>
            <div className="mb-3">
              <label htmlFor="ownerEmail" className="form-label">Owner Email</label>
              <input type="email" className="form-control" id="ownerEmail" />
            </div>
            <div className="form-check mb-3">
              <input type="checkbox" className="form-check-input" id="termsCheckbox" />
              <label className="form-check-label" htmlFor="termsCheckbox">
                I agree to the terms and conditions
              </label>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}