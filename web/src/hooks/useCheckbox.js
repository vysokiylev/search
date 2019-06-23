import { useState } from 'react';

export const useCheckbox = (initialChecked) => {
  const [checked, setChecked] = useState(initialChecked);

  return {
    checked,
    setChecked,
    reset: () => setChecked(false),
    bind: {
      checked,
      onChange: (e) => {
        setChecked(e.target.checked);
      }
    }
  };
};

export default useCheckbox;
