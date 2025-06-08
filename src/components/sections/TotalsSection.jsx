const TotalsSection = ({ register }) => (
  <div>
    <h3>Final Summary</h3>
    {/* <input {...register("amountInWords")} placeholder="Amount in Words" />
    <input {...register("taxInWords")} placeholder="Tax Amount in Words" /> */}
    <input {...register("companyPAN")} placeholder="Company PAN" />
  </div>
);

export default TotalsSection;
