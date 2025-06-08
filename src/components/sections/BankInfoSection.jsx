import React from 'react';

const BankInfoSection = ({ register }) => (
  <div>
    <div classname="grid-2col">
      <h3>Bank Information</h3>
      <label>Account Holder: <input {...register("bank.accountHolder")} placeholder="Account Holder" /></label><br />
      <label>Bank Name: <input {...register("bank.bankName")} placeholder="Bank Name" /></label><br />
      <label>Account Number: <input {...register("bank.accountNumber")} placeholder="Account Number" /></label><br />
      <label>Swift Code: <input {...register("bank.swiftCode")} placeholder="Swift Code" /></label><br />
      <label>Branch & IFSC Code: <input {...register("bank.branchIFSC")} placeholder="Branch & IFSC Code" /></label>
    </div>
  </div>
);

export default BankInfoSection;
