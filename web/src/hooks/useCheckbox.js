import { useState } from "react";

export const useCheckbox = initialChecked => {
  const [checked, setChecked] = useState(initialChecked);

  return {
    checked,
    setChecked,
    reset: () => setChecked(false),
    bind: {
      checked,
      onChange: event => {
        setChecked(event.target.checked);
      }
    }
  };
};

export default useCheckbox