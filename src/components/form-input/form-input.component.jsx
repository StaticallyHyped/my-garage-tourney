import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="group">
      <input
        className="form-input"
        onChange={handleChange} //these are the props coming from sign-in.component
        {...otherProps}
      />
      {label ? ( //if the label is not nothing, execute following. else null
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`} //if the props.value array is not zero, 'shrink'
        >
          {label} {/* this is the label inside the email/pw form */}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
