import { useState, useEffect } from "react";

export const Select = ({ label, value, type, options, onChange, ...rest }) => {
  const [selectedValue, setSelectedValue] = useState(value);

  useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
    onChange(event);
  };

  return (
    <div>
      <label>{label}</label>
      <select type={type} value={selectedValue} onChange={handleSelectChange} {...rest}>
        {options.map((option) => (
          <option value={option.value} key={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};
