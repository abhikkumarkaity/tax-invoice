const ConsigneeSection = ({ register }) => (
  <div>
    <h3>Consignee (Ship To)</h3>
    <input {...register("consignee.name")} placeholder="Name" />
    <textarea {...register("consignee.address")} placeholder="Address" />
    <input {...register("consignee.gstin")} placeholder="GSTIN" />
    <input {...register("consignee.stateName")} placeholder="State Name" />
    <input {...register("consignee.stateCode")} placeholder="State Code" />
    <input {...register("consignee.contactPerson")} placeholder="Contact Person" />
    <input {...register("consignee.contactNumber")} placeholder="Contact No" />
    <input {...register("consignee.email")} placeholder="Email" />
  </div>
);

export default ConsigneeSection;
