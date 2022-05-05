import React from "react";
import FilterBTN from "../FilterBTN";

const Status = ({ updateStatus, updatePageNumber }) => {
  let status = ["Alive", "Dead", "Unknown"];
  return (
    <div>
      <h4>Status</h4>
      <hr/>
      {status.map((item, index) => (
        <FilterBTN
          key={index}
          index={index}
          name="status"
          task={updateStatus}
          updatePageNumber={updatePageNumber}
          input={item}
        />
      ))}
    </div>
  );
};

export default Status;
