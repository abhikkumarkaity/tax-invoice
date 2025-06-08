import React from 'react';
const thStyle = {
  border: "1px solid #ccc",
  padding: "8px",
  textAlign: "left",
  backgroundColor: "#f9f9f9"
};

const tdStyle = {
  border: "1px solid #ccc",
  padding: "6px"
};

const inputStyle = {
  width: "100%",
  padding: "6px",
  border: "1px solid #ddd",
  borderRadius: "4px",
  boxSizing: "border-box"
};

const removeBtnStyle = {
  background: "#ff4d4f",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  padding: "6px 10px",
  cursor: "pointer"
};

const addBtnStyle = {
  marginTop: "15px",
  padding: "10px 20px",
  backgroundColor: "#1890ff",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer"
};




const ItemTableSection = ({ register, fields, append, remove }) => (
  <div>
    <h3 style={{ marginBottom: "10px" }}>Items</h3>
    <div style={{ overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "1000px" }}>
        <thead>
          <tr style={{ backgroundColor: "#f5f5f5" }}>
            <th style={thStyle}>Description</th>
            <th style={thStyle}>HSN/SAC</th>
            <th style={thStyle}>GST Rate</th>
            <th style={thStyle}>Quantity</th>
            <th style={thStyle}>Rate</th>
            <th style={thStyle}>Per</th>
            <th style={thStyle}>Disc %</th>
            <th style={thStyle}>Disc Amt</th>
            <th style={thStyle}>Amount</th>
            <th style={thStyle}></th>
          </tr>
        </thead>
        <tbody>
          {fields.map((item, index) => (
            <tr key={item.id}>
              <td style={tdStyle}>
                <input {...register(`items.${index}.description`)} style={inputStyle} placeholder="Description" />
              </td>
              <td style={tdStyle}>
                <input {...register(`items.${index}.hsn`)} style={inputStyle} placeholder="HSN/SAC" />
              </td>
              <td style={tdStyle}>
                <input {...register(`items.${index}.gstRate`)} style={inputStyle} placeholder="GST Rate" />
              </td>
              <td style={tdStyle}>
                <input {...register(`items.${index}.quantity`)} style={inputStyle} placeholder="Quantity" />
              </td>
              <td style={tdStyle}>
                <input {...register(`items.${index}.rate`)} style={inputStyle} placeholder="Rate" />
              </td>
              <td style={tdStyle}>
                <input {...register(`items.${index}.per`)} style={inputStyle} placeholder="Per" />
              </td>
              <td style={tdStyle}>
                <input {...register(`items.${index}.discountPercent`)} style={inputStyle} placeholder="Disc %" />
              </td>
              <td style={tdStyle}>
                <input {...register(`items.${index}.discountAmount`)} style={inputStyle} placeholder="Disc Amt" />
              </td>
              <td style={tdStyle}>
                <input {...register(`items.${index}.amount`)} style={inputStyle} placeholder="Amount" />
              </td>
              <td style={tdStyle}>
                <button type="button" onClick={() => remove(index)} style={removeBtnStyle}>
                  ✕
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <button type="button" onClick={() => append({})} style={addBtnStyle}>+ Add Item</button>
  </div>
);
export default ItemTableSection;












