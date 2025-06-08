const InvoiceMetaSection = ({ register }) => (
  <div>
    <h3>Invoice Info</h3>
    <input {...register("invoiceNo")} placeholder="Invoice No" />
    <input {...register("ewayBillNo")} placeholder="E-way Bill No" />
    <input {...register("buyerOrderNo")} placeholder="Buyer’s Order No" />
    <input {...register("dispatchDocNo")} placeholder="Dispatch Doc No" />
    <input {...register("transporterName")} placeholder="Transporter Name" />
    <input {...register("lrNo")} placeholder="Bill of Lading / LR No" />
  </div>
);

export default InvoiceMetaSection;
