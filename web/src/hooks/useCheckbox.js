import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBoostingField, removeBoostingField } from '../actions/search';

export const useCheckbox = (initialChecked, value) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(initialChecked);

  return {
    checked,
    setChecked,
    reset: () => setChecked(false),
    bind: {
      checked,
      onChange: (e) => {
        setChecked(e.target.checked);
        if (value)
          dispatch(
            e.target.checked
              ? addBoostingField.request(value)
              : removeBoostingField.request(value)
          );
      }
    }
  };
};

export default useCheckbox;
