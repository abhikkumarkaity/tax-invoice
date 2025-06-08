const BuyerInfoSection = ({ register }) => (
  <div>
    <h3>Buyer (Bill To)</h3>
    <input {...register("buyer.name")} placeholder="Name" />
    <textarea {...register("buyer.address")} placeholder="Address" />
    <input {...register("buyer.gstin")} placeholder="GSTIN" />
    <input {...register("buyer.stateName")} placeholder="State Name" />
    <input {...register("buyer.stateCode")} placeholder="State Code" />
    <input {...register("buyer.contactPerson")} placeholder="Contact Person" />
    <input {...register("buyer.contactNumber")} placeholder="Contact No" />
    <input {...register("buyer.email")} placeholder="Email" />
  </div>
);

export default BuyerInfoSection;
