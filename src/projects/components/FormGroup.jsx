import React from "react";

export default function FormGroup({
  labelText,
  inputType,
  placeholder,
  values,
  onInput,
  onKeyUp,
  onChange,
  className,
  readOnly = false,
  reference,
  name,
}) {
  return (
    <div className="form-group">
      <label>{labelText}</label>
      <input
        type={inputType}
        placeholder={placeholder}
        value={values}
        onInput={onInput}
        onKeyUp={onKeyUp}
        onChange={onChange}
        className={className}
        readOnly={readOnly}
        ref={reference}
        name={name}
      />
    </div>
  );
}
