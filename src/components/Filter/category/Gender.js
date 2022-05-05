import React from "react";
import FilterBTN from "../FilterBTN";

const Gender = ({ updateGender, updatePageNumber }) => {
  let genders = ["female", "male", "genderless", "unknown"];
  return (
    <div>
      <h4>Genders</h4>
      <hr/>
      {genders.map((items, index) => {
        return (
          <FilterBTN
            name="gender"
            index={index}
            key={index}
            updatePageNumber={updatePageNumber}
            task={updateGender}
            input={items}
          />
        );
      })}
    </div>
  );
};

export default Gender;
