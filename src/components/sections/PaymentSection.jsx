const PaymentSection = ({ register }) => (
  <div>
    <h3>Payment & Shipping</h3>
    <input type="date" {...register("invoiceDate")} placeholder="Date" />
    <input {...register("paymentTerms")} placeholder="Mode/Terms of Payment" />
    <input {...register("otherReference")} placeholder="Other Reference(s)" />
    <input {...register("destination")} placeholder="Destination" />
    <input {...register("vehicleNo")} placeholder="Motor Vehicle No" />
    <input {...register("incoterms")} placeholder="Incoterms" />
  </div>
);

export default PaymentSection;
