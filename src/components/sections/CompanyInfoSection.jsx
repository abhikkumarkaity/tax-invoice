import React from 'react';

const CompanyInfoSection = ({ register }) => (
  <div>
    <h3>Company Information</h3>
    <label>PAN: <input {...register("company.pan")} placeholder="PAN" /></label><br />
    <label>Authorized By: <input {...register("company.authorizedBy")} placeholder="Authorized Person" /></label>
  </div>
);

export default CompanyInfoSection;
