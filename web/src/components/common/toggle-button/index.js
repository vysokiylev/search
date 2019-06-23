import React from 'react';

export default function ToggleButton({ bind, id, target, controls, label = '' }) {
  return (
    <div className="togglebutton">
      <label
        htmlFor={id}
        data-toggle="collapse"
        data-target={target}
        aria-expanded="false"
        aria-controls={controls}>
        {label}
        <input
          {...bind}
          id={id}
          type="checkbox"
        />
        <span className="ml-1 toggle"></span>
      </label>
    </div>
  );
}
