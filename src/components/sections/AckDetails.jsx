import React from 'react';

const AckSection = ({ register }) => (
  <div>
    <h3>Ack Details</h3>
    
    <label>
      IRN Number:
      <input {...register("ack.irn")} placeholder="Enter IRN Number" />
    </label>
    <br />

    <label>
      Ack No:
      <input {...register("ack.ackNo")} placeholder="Enter Acknowledgement Number" />
    </label>
    <br />

    <label>
      Ack Date:
      <input type="date" {...register("ack.ackDate")} readonly/>
    </label>
    <br />
  </div>
);

export default AckSection;
