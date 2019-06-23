import React from 'react';

export default function ToggleButton({ bind, id }) {
  return (
    <div className="togglebutton">
      <label
        htmlFor={id}
        data-toggle="collapse"
        data-target="#priorityFiltersGroup"
        aria-expanded="false"
        aria-controls="priorityFiltersGroup">
        Enable priority search{' '}
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
