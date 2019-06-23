import React from 'react';

export default function Checkbox({ value, bind, label }) {
  return (
    <div className="form-check">
      <label className="form-check-label">
        <input
          {...bind}
          className="form-check-input"
          type="checkbox"
          value={value}
        />
        {label}
        <span className="form-check-sign">
          <span className="check"></span>
        </span>
      </label>
    </div>
  );
}
