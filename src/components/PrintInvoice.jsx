// components/PrintInvoice.jsx
// import React from 'react';
// import './PrintInvoice.css'; // we’ll style this separately

// const PrintInvoice = ({ data, onBack }) => {
//   return (
//     <div className="invoice-print">
//       <button onClick={onBack} className="no-print">Back</button>
//       <button onClick={() => window.print()} className="no-print">Print</button>

//       <div className="invoice-box">
//         <h2 className="center">TAX INVOICE</h2>

//         <div className="flex-row space-between">
//           <div>
//             <strong>Seller:</strong><br />
//             {data.seller.name}<br />
//             {data.seller.address}<br />
//             GSTIN: {data.seller.gstin}<br />
//             Phone: {data.seller.phone}
//           </div>

//           <div>
//             <strong>Invoice No:</strong> {data.invoiceMeta.invoiceNo}<br />
//             <strong>Date:</strong> {data.invoiceMeta.invoiceDate}<br />
//             <strong>Buyer’s Order No:</strong> {data.invoiceMeta.buyerOrderNo}
//           </div>
//         </div>

//         <hr />

//         <div className="flex-row space-between">
//           <div>
//             <strong>Bill To:</strong><br />
//             {data.buyer.companyName}<br />
//             {data.buyer.address}<br />
//             GSTIN: {data.buyer.gstin}<br />
//             {data.buyer.contactPerson}, {data.buyer.contact}
//           </div>

//           <div>
//             <strong>Ship To:</strong><br />
//             {data.consignee.companyName}<br />
//             {data.consignee.address}<br />
//             GSTIN: {data.consignee.gstin}<br />
//             {data.consignee.contactPerson}, {data.consignee.contact}
//           </div>
//         </div>

//         <h3>Item Details</h3>
//         <table className="invoice-table">
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>Description</th>
//               <th>Batch</th>
//               <th>Qty</th>
//               <th>Rate</th>
//               <th>GST %</th>
//               <th>HSN</th>
//               <th>Amount</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.items.map((item, index) => {
//               const qty = Number(item.quantity);
//               const rate = Number(item.rate);
//               const amount = qty * rate;
//               return (
//                 <tr key={index}>
//                   <td>{index + 1}</td>
//                   <td>{item.description}</td>
//                   <td>{item.batch}</td>
//                   <td>{qty}</td>
//                   <td>{rate}</td>
//                   <td>{item.gst}%</td>
//                   <td>{item.hsn}</td>
//                   <td>{amount.toFixed(2)}</td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>

//         <div className="totals">
//           {/* You can pass pre-calculated totals or recalculate here */}
//           <p><strong>Subtotal:</strong> ₹ {/* total here */}</p>
//           <p><strong>CGST:</strong> ₹ {/* cgst here */}</p>
//           <p><strong>SGST:</strong> ₹ {/* sgst here */}</p>
//           <p><strong>Grand Total:</strong> ₹ {/* total with gst */}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PrintInvoice;






// import React from 'react';
// import './PrintInvoice.css'; // styling stays the same

// const PrintInvoice = ({ data, totals, onBack }) => {
//   return (
//     <div className="invoice-print">
//       <button onClick={onBack} className="no-print">Back</button>
//       <button onClick={() => window.print()} className="no-print">Print</button>

//       <div className="invoice-box">
//         <h2 className="center">TAX INVOICE</h2>

//         <div className="flex-row space-between">
//           <div>
//             <strong>Seller:</strong><br />
//             {data.seller.name}<br />
//             {data.seller.address}<br />
//             GSTIN: {data.seller.gstin}<br />
//             Phone: {data.seller.phone}
//           </div>

//           <div>
//             <strong>Invoice No:</strong> {data.invoiceMeta.invoiceNo}<br />
//             <strong>Date:</strong> {data.invoiceMeta.invoiceDate}<br />
//             <strong>Buyer’s Order No:</strong> {data.invoiceMeta.buyerOrderNo}
//           </div>
//         </div>

//         <hr />

//         <div className="flex-row space-between">
//           <div>
//             <strong>Bill To:</strong><br />
//             {data.buyer.companyName}<br />
//             {data.buyer.address}<br />
//             GSTIN: {data.buyer.gstin}<br />
//             {data.buyer.contactPerson}, {data.buyer.contact}
//           </div>

//           <div>
//             <strong>Ship To:</strong><br />
//             {data.consignee.companyName}<br />
//             {data.consignee.address}<br />
//             GSTIN: {data.consignee.gstin}<br />
//             {data.consignee.contactPerson}, {data.consignee.contact}
//           </div>
//         </div>

//         <h3>Item Details</h3>
//         <table className="invoice-table">
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>Description</th>
//               <th>Batch</th>
//               <th>Qty</th>
//               <th>Rate</th>
//               <th>GST %</th>
//               <th>HSN</th>
//               <th>Amount</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.items.map((item, index) => {
//               const qty = Number(item.quantity);
//               const rate = Number(item.rate);
//               const amount = qty * rate;
//               return (
//                 <tr key={index}>
//                   <td>{index + 1}</td>
//                   <td>{item.description}</td>
//                   <td>{item.batch}</td>
//                   <td>{qty}</td>
//                   <td>{rate}</td>
//                   <td>{item.gst}%</td>
//                   <td>{item.hsn}</td>
//                   <td>{amount.toFixed(2)}</td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>

//         <div className="totals">
//           <p><strong>Subtotal:</strong> ₹ {totals.subtotal.toFixed(2)}</p>
//           <p><strong>CGST:</strong> ₹ {totals.totalCGST.toFixed(2)}</p>
//           <p><strong>SGST:</strong> ₹ {totals.totalSGST.toFixed(2)}</p>
//           <p><strong>Grand Total:</strong> ₹ {totals.total.toFixed(2)}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PrintInvoice;


















import React from 'react';
import { toWords } from 'number-to-words';

// import './PrintInvoice.css';

const PrintInvoice = ({ data, totals }) => {
 const amountInWords = (amount) => {
  const num = parseFloat(amount);
  if (isNaN(num)) return '';

  const words = toWords(Math.floor(num));
  const capitalized = words
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return `${capitalized} Rupees Only`;
};

  return (
    <div>
      <style>{`
        body { font-family: Arial, sans-serif; }
        .main-table, .sub-table, .footer-table {
          border-collapse: collapse;
          width: 100%;
          margin-bottom: 10px;
        }
        .main-table td, .main-table th,
        .sub-table td, .sub-table th,
        .footer-table td, .footer-table th {
          border: 1px solid #000;
          padding: 8px;
          vertical-align: top;
        }
        .signature {
          margin-top: 30px;
          margin-bottom: 30px;
        }
        .bottom-row {
          border: 1px solid #000;
          width: 100%;
          height: 40px;
          margin-top: 10px;
          display: table;
        }
        .bottom-row > div {
          display: table-cell;
          border-right: 1px solid #000;
          padding: 10px;
          vertical-align: middle;
        }
        .bottom-row > div:last-child {
          border-right: none;
        }
        .identical-columns-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 10px;
        }
        .identical-columns-table td {
          border: 1px solid #000;
          padding: 8px;
          vertical-align: top;
          width: 50%;
        }
      `}</style>

      {/* Header Section */}
      <div style={{ textAlign: "left", marginBottom: "10px", fontSize: "14px", lineHeight: "1.4" }}>
        IRN: <strong>{data.ack.irn}</strong><br />
        {/* <strong>{data.irnHash}</strong><br /> */}
        Ack No.: <strong>{data.ack.ackNo}</strong><br />
        Ack Date: <strong>{data.ack.ackDate}</strong>
      </div>
      <table className="main-table">
        <tbody>
          <tr>
            <td rowSpan="2" style={{ width: "40%" }}>
              <strong>CASTLE STONE ENGINEERING</strong><br />
                P-82, DR, SUNDARI MOHAN AVENUE,<br />
                3RD FL, FL - 301<br />
                GSTIN/UIN: 19AANFC4422D1ZM<br />
                State Name: West Bengal, Code: 19<br />
                Contact person: MR. INDRANIL KUNDU<br />
                Contact: 9830090036<br />
                E-Mail: konkretepavers@gmail.com
            </td>
            <td style={{ width: "30%" }}>
              <table className="sub-table">
                <tbody>
                  <tr>
                    <td>
                      <strong>Invoice No:</strong> {data.invoiceNo} &nbsp;&nbsp;&nbsp;&nbsp; <strong>E-way Bill No:</strong> {data.ewayBillNo || '-'}
                    </td>
                  </tr>
                  <tr><td><strong> Supplier’s Ref. No & Date:</strong> {data.supplierRef || '-'}</td></tr>
                  <tr><td><strong>Buyer’s Order No.:</strong> {data.buyerOrderNo || '-'}</td></tr>
                  <tr><td><strong>Dispatch Doc No:</strong> {data.dispatchDocNo || '-'}</td></tr>
                  <tr><td><strong>Transporter Name:</strong> {data.transporterName || '-'}</td></tr>
                  <tr><td><strong>Bill of Lading/LR-RR No:</strong> {data.billOfLadingNo || '-'}</td>
                  </tr>
                  
                </tbody>
              </table>
            </td>
            <td style={{ width: "30%" }}>
              <table className="sub-table">
                <tbody>
                  <tr><td><strong>Dated:</strong> {data.invoiceDate}</td></tr>
                  <tr><td><strong>Mode/Terms of Payment:</strong> {data.paymentTerms || '-'}</td></tr>
                  {/* <tr><td><strong>Dated:</strong> {data.dated2 || '-'}</td></tr> */}
                  <tr><td><strong>Other Reference(s):</strong> {data.otherReference || '-'}</td></tr>
                  <tr><td><strong>Destination:</strong> {data.destination || '-'}</td></tr>
                  <tr><td><strong>Motor Vehicle No:</strong> {data.vehicleNo || '-'}</td></tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td colSpan="2" style={{ height: "60px" }}>
              <strong>Incoterms:</strong> {data.incoterms || '-'}
            </td>
          </tr>
        </tbody>
      </table>

      {/* Two Identical Columns Section */}
      <table className="identical-columns-table">
        <tbody>
          <tr>
            <td>
              Buyer (Bill to)<br />
               <strong>{data.buyer.name}</strong><br />
              Address: {data.buyer.address}<br />
              GSTIN/UIN: {data.buyer.gstin}<br />
              State Name: {data.buyer.stateName}<br />
              Contact person: {data.buyer.contactPerson}<br />
              Contact: {data.buyer.contact}<br />
              E-Mail: {data.buyer.email}<br />
              <br /></td>
            <td>
               Consignee(Ship to)<br />
               <strong>{data.buyer.name}</strong><br />
              Address: {data.buyer.address}<br />
              GSTIN/UIN: {data.buyer.gstin}<br />
              State Name: {data.buyer.stateName}<br />
              Contact person: {data.buyer.contactPerson}<br />
              Contact: {data.buyer.contact}<br />
              E-Mail: {data.buyer.email}<br />
              <br /></td>
          </tr>
        </tbody>
      </table>

      {/* Middle Table Section */}
      <table className="main-table">
        <thead>
          <tr>
            <th style={{ width: "5%" }}>Sl No.</th>
            <th style={{ width: "25%" }}>Description of Goods</th>
            <th style={{ width: "10%" }}> HSN/SAC</th>
            <th style={{ width: "10%" }}>GST Rate</th>
            <th style={{ width: "10%" }}>Quantity</th>
            <th style={{ width: "10%" }}>Rate</th>
            <th style={{ width: "10%" }}>Per</th>
            <th style={{ width: "10%" }}>Disc%</th>
            <th style={{ width: "10%" }}>Disc Amount</th>
            <th style={{ width: "10%" }}>Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.items && data.items.length > 0 ? (
            data.items.map((item, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{item.description}</td>
                <td>{item.hsn}</td>
                <td>{item.gstRate}%</td>
                <td>{item.quantity}</td>
                <td>{item.rate}</td>
                <td>{item.per}</td>
                <td>{item.discountPercent || 0}</td>
                <td>{item.discountAmount || 0}</td>
                <td>{item.amount}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="10" style={{ textAlign: "center", height: "100px" }}>
                No items added.
              </td>
            </tr>
          )}

          <tr>
              <td>&nbsp;</td>
              <td style={{ fontWeight: "bold", textAlign: "right" }}>Total</td>
              <td></td>
              <td></td>
              <td>{totals.totalQuantity || 0}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>{parseFloat(totals.totalAmount || 0).toFixed(2)}</td>
            </tr>

            <tr>
              <td colSpan="9" style={{ textAlign: "right", fontWeight: "bold" }}>Add: CGST</td>
              <td>{parseFloat(totals.totalCGST || 0).toFixed(2)}</td>
            </tr>

            <tr>
              <td colSpan="9" style={{ textAlign: "right", fontWeight: "bold" }}>Add: SGST</td>
              <td>{parseFloat(totals.totalSGST || 0).toFixed(2)}</td>
            </tr>

            <tr style={{ backgroundColor: "#f0f0f0", fontWeight: "bold" }}>
              <td colSpan="9" style={{ textAlign: "right" }}>Grand Total</td>
              <td>
                {(
                  parseFloat(totals.totalAmount || 0) +
                  parseFloat(totals.totalCGST || 0) +
                  parseFloat(totals.totalSGST || 0)
                ).toFixed(2)}
              </td>
            </tr>

          <tr>
            <td colSpan="10" style={{ fontWeight: "bold" }}>
              Amount Chargeable (in words):<br />
              <span style={{ fontWeight: "normal" }}>
                {
                  amountInWords(
                    (
                      parseFloat(totals.totalAmount || 0) +
                      parseFloat(totals.totalCGST || 0) +
                      parseFloat(totals.totalSGST || 0)
                    ).toFixed(2)
                  )
                }
              </span>
            </td>
          </tr>

        </tbody>
      </table>

      {/* Footer Table Section */}
      <table className="footer-table">
        <thead>
            <tr>
              <th style={{ width: "20%" }}>HSN/SAC</th>
              <th style={{ width: "20%" }}>Taxable Value</th>
              <th style={{ width: "20%" }} colSpan="2">CGST</th>
              <th style={{ width: "20%" }} colSpan="2">SGST/UTGST</th>
              <th style={{ width: "20%" }}>Total Tax Amount</th>
            </tr>
            <tr>
              <th></th>
              <th></th>
              <th style={{ width: "10%" }}>Rate</th>
              <th style={{ width: "10%" }}>Amount</th>
              <th style={{ width: "10%" }}>Rate</th>
              <th style={{ width: "10%" }}>Amount</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.hsnSummary.map((hsn, index) => (
              <tr key={index}>
                <td>{hsn.hsn}</td>
                <td>{hsn.taxableValue}</td>
                <td>{hsn.cgstRate}%</td>
                <td>{hsn.cgstAmount}</td>
                <td>{hsn.sgstRate}%</td>
                <td>{hsn.sgstAmount}</td>
                <td>{hsn.totalTaxAmount}</td>
              </tr>
            ))}
          </tbody>
          <tr>
            <td><strong>Total</strong></td>
            <td><strong>{totals.totalTaxableValue}</strong></td>
            <td>—</td>
            <td><strong>{totals.totalCGST}</strong></td>
            <td>—</td>
            <td><strong>{totals.totalSGST}</strong></td>
            <td><strong>{totals.totalTax}</strong></td>
          </tr>
      </table>

      <div style={{ marginTop: "10px", fontWeight: "bold" }}>
        <div>Tax Amount (in words): <span style={{ fontWeight: "normal" }}>{amountInWords(totals.totalTax || 0)}</span></div>
        <div>Company’s PAN: <span style={{ fontWeight: "normal" }}>{data.company.pan}</span></div>
      </div>

      {/* Signature Section */}
      {/* <div className="signature">
        <div style={{ width: "200px", borderTop: "1px solid #000", marginLeft: 0 }}>Declaration;</div>
      </div> */}

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px", fontSize: "14px" }}>
        {/* Left: Declaration */}
        <div style={{ width: "48%" }}>
          <div style={{ borderBottom: "1px solid #000", marginBottom: "5px", fontWeight: "bold" }}>
            Declaration
          </div>
          <div>
            1) We declare that the invoice shows the actual price of goods and all details are true and correct.
            <br />
            2) Interest will be charged @18% after due date.
            <br />
            3) We are reg. under MSME Act. Please comply with the provisions of MSME Act.
          </div>
        </div>

        {/* Right: Bank Details */}
        <div style={{ width: "48%" }}>
          <div style={{ fontWeight: "bold", marginBottom: "5px" }}>Company’s Bank Details</div>
          <div>
            A/c Holder’s Name: {data.bank.accountHolder}<br />
        Bank Name: {data.bank.bankName}<br />
        A/c No.: {data.bank.accountNumber}<br />
        Swift Code: {data.bank.swiftCode}<br />
        Branch & IFS Code: {data.bank.branchIFSC}
          </div>
        </div>
      </div>


      {/* Bottom Section */}
      <div className="bottom-row">
        <div style={{ width: "80%", fontWeight: "bold" }}>
          Customer’s Seal and Signature
        </div>
        <div style={{ width: "20%", textAlign: "right" }}>
          <div style={{ fontWeight: "bold" }}>for {data.company.authorizedBy}</div>
          <div style={{ marginTop: "40px", fontWeight: "bold" }}>Authorised Signatory</div>
        </div>
      </div>
    </div>
  );
};


export default PrintInvoice;


