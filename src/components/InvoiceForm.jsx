import React, { useState, useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { useWatch } from "react-hook-form";
import BuyerInfoSection from "./sections/BuyerInfoSection";
import ConsigneeSection from "./sections/ConsigneeSection";
import InvoiceMetaSection from "./sections/InvoiceMetaSection";
import PaymentSection from "./sections/PaymentSection";
import ItemTableSection from "./sections/ItemTableSection";
import CompanyInfoSection from "./sections/CompanyInfoSection";
import BankInfoSection from "./sections/BankInfoSection";
import AckSection from "./sections/AckDetails";
import PrintInvoice from "./PrintInvoice";
import "./InvoiceForm.css"





  



const Card = ({ title, children }) => (
  <div style={{
    background: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    marginBottom: "20px",
    flex: 1,
    minWidth: "300px",
    transition: "all 0.3s ease-in-out",
  }}>
    {title && (
      <h3 style={{
        marginBottom: "15px",
        borderBottom: "1px solid #eee",
        paddingBottom: "5px"
      }}>
        {title}
      </h3>
    )}
    {children}
  </div>
);

const Modal = ({ children, onClose }) => (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0,0,0,0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 9999,
    }}
  >
    <div
      style={{
        backgroundColor: "white",
        padding: "20px",
        maxHeight: "90vh",
        overflowY: "auto",
        width: "90%",
        maxWidth: "900px",
        borderRadius: "8px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
        position: "relative",
      }}
    >
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: 10,
          right: 10,
          fontSize: "24px",
          fontWeight: "bold",
          cursor: "pointer",
          background: "none",
          border: "none",
        }}
        aria-label="Close modal"
      >
        &times;
      </button>
      {children}
    </div>
  </div>
);



const InvoiceForm = () => {
  const [invoiceData, setInvoiceData] = useState(null);

  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue
  } = useForm({
    defaultValues: {
      items: [{}],
      company: {
        pan: "",
        authorizedBy: ""
      },
      bank: {
        accountHolder: "",
        bankName: "",
        accountNumber: "",
        swiftCode: "",
        branchIFSC: ""
      },
      ack: {
        irn: "",
        ackNo: "",
        ackDate: ""
      },
      defaultValues: {
      items: [{ description: "", hsn: "", gstRate: "", quantity: 0, rate: 0, per: "", discountPercent: 0, discountAmount: 0, amount: 0 }]
    }
    }
  });
  
  

  

  const invoiceDate = watch("invoiceDate");

    useEffect(() => {
      if (invoiceDate) {
        setValue("ack.ackDate", invoiceDate);
      }
    }, [invoiceDate, setValue]);

  const { fields, append, remove } = useFieldArray({
    control,
    name: "items"
  });

  // Watch all items
    const watchedItems = useWatch({ control, name: "items" });

    useEffect(() => {
      watchedItems.forEach((item, index) => {
        const quantity = parseFloat(item.quantity) || 0;
        const rate = parseFloat(item.rate) || 0;
        const discountPercent = parseFloat(item.discountPercent) || 0;

        const discountAmount = (quantity * rate) * (discountPercent / 100);
        const amount = quantity * rate - discountAmount;

        // Avoid unnecessary updates by checking current value
        const currentDiscount = parseFloat(item.discountAmount) || 0;
        const currentAmount = parseFloat(item.amount) || 0;

        if (
          Math.abs(currentDiscount - discountAmount) > 0.01 ||
          Math.abs(currentAmount - amount) > 0.01
        ) {
          setValue(`items.${index}.discountAmount`, discountAmount.toFixed(2), {
            shouldValidate: false,
            shouldDirty: false,
          });
          setValue(`items.${index}.amount`, amount.toFixed(2), {
            shouldValidate: false,
            shouldDirty: false,
          });
        }
      });
    }, [watchedItems, setValue]);


  // Helper to compute HSN summary
  const computeHsnSummary = (items) => {
    const summaryMap = {};

    items.forEach(item => {
      const hsn = item.hsnSac || "NA";
      if (!summaryMap[hsn]) {
        summaryMap[hsn] = {
          hsn,
          taxableValue: 0,
          cgstRate: item.gstRate ? item.gstRate / 2 : 0,
          cgstAmount: 0,
          sgstRate: item.gstRate ? item.gstRate / 2 : 0,
          sgstAmount: 0,
          totalTaxAmount: 0,
        };
      }

      const amount = parseFloat(item.amount) || 0;
      const cgstAmount = amount * (summaryMap[hsn].cgstRate / 100);
      const sgstAmount = amount * (summaryMap[hsn].sgstRate / 100);

      summaryMap[hsn].taxableValue += amount;
      summaryMap[hsn].cgstAmount += cgstAmount;
      summaryMap[hsn].sgstAmount += sgstAmount;
      summaryMap[hsn].totalTaxAmount += cgstAmount + sgstAmount;
    });

    return Object.values(summaryMap).map(hsn => ({
      hsn: hsn.hsn,
      taxableValue: hsn.taxableValue.toFixed(2),
      cgstRate: hsn.cgstRate.toFixed(2),
      cgstAmount: hsn.cgstAmount.toFixed(2),
      sgstRate: hsn.sgstRate.toFixed(2),
      sgstAmount: hsn.sgstAmount.toFixed(2),
      totalTaxAmount: hsn.totalTaxAmount.toFixed(2),
    }));
  };

  const onSubmit = (data) => {
    const totalQuantity = data.items.reduce((acc, item) => acc + (parseFloat(item.quantity) || 0), 0);
    const totalAmount = data.items.reduce((acc, item) => acc + (parseFloat(item.amount) || 0), 0);

    const hsnSummary = computeHsnSummary(data.items);

    const totalCGST = hsnSummary.reduce((acc, hsn) => acc + parseFloat(hsn.cgstAmount), 0);
    const totalSGST = hsnSummary.reduce((acc, hsn) => acc + parseFloat(hsn.sgstAmount), 0);
    const totalTax = hsnSummary.reduce((acc, hsn) => acc + parseFloat(hsn.totalTaxAmount), 0);
    const totalTaxableValue = hsnSummary.reduce((acc, hsn) => acc + parseFloat(hsn.taxableValue), 0);

    const totals = {
      totalAmount: totalAmount,
      totalTax: totalTax,
      totalTaxableValue: totalTaxableValue,
      totalCGST: totalCGST,
      totalSGST: totalSGST,
      totalQuantity: totalQuantity,
    };

    setInvoiceData({
      ...data,
      hsnSummary,
      totals,
      company: data.company || { pan: "", authorizedBy: "" },
      bank: data.bank || {
        accountHolder: "",
        bankName: "",
        accountNumber: "",
        swiftCode: "",
        branchIFSC: "",
      },
    });
  };

  const handlePrint = () => {
  const printContents = document.getElementById("printable-invoice").innerHTML;
  const newWin = window.open("", "_blank", "width=800,height=600");
      newWin.document.write(`
        <html>
          <head>
            <title>Print Invoice</title>
            <style>
              @page {
                size: A4;
                margin: 20mm;
              }
              html, body {
                width: 210mm;
                height: 297mm;
                margin: 0;
                padding: 0;
                overflow: hidden;
                font-size: 12px;
                font-family: Arial, sans-serif;
              }
              * {
                box-sizing: border-box;
              }
              .invoice-wrapper {
                width: 100%;
                height: 100%;
                page-break-inside: avoid;
                transform: scale(0.95);
                transform-origin: top left;
              }
              table {
                width: 100%;
                border-collapse: collapse;
              }
              th, td {
                border: 1px solid #000;
                padding: 5px;
                font-size: 12px;
              }
              button {
                display: none !important;
              }
            </style>
          </head>
          <body>
            <div class="invoice-wrapper">
              ${printContents}
            </div>
          </body>
        </html>
      `);
      newWin.document.close();
      newWin.focus();
      newWin.print();
      newWin.close();
    };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="invoice-heading">Generate Tax Invoice</h2>

        <div className="invoice-section">
        <AckSection register={register} readonly /></div>
        

          
            <Card title="">
              <div className="grid-left">
                <div className="invoice-container">
                  <InvoiceMetaSection register={register} />
                </div>
                
              <div className="invoice-container">
                <PaymentSection register={register} />
              </div></div>
            </Card>
          



        <Card title="">
              <div className="grid-left">
                <div className="invoice-container">
                  <BuyerInfoSection register={register} /></div>
                <div className="invoice-container">
                  <ConsigneeSection register={register} /></div>
              </div>
              </Card>

        <ItemTableSection register={register} fields={fields} append={append} remove={remove} />

        {/* New Sections */}
        <Card title="">
              <div className="grid-left">
                <div className="company-info">
                  <CompanyInfoSection register={register} /></div>
                <div className="bank-info">
                  <BankInfoSection register={register} /></div>
              </div>
        </Card>

        <div style={{
              position: "sticky",
              bottom: 0,
              background: "#fff",
              padding: "15px",
              boxShadow: "0 -2px 6px rgba(0,0,0,0.05)",
              textAlign: "right"
            }}>
          <button type="submit">Submit Invoice</button>
        </div>
      </form>

      {invoiceData && (
        <Modal onClose={() => setInvoiceData(null)}>
          <h3>Invoice Preview</h3>
          <button
            onClick={handlePrint}
            style={{ marginBottom: "10px", cursor: "pointer" }}
          >
            Print Invoice
          </button>
          <div id="printable-invoice">
            <PrintInvoice data={invoiceData} totals={invoiceData.totals} />
          </div>
        </Modal>
      )}
    </div>
  );
};

export default InvoiceForm;
