export const Input = ({ label, value, placeholder, type, ...rest }) => {
  return (
    <div>
      <label>{label}</label>
      <input type={type} value={value} placeholder={placeholder} {...rest} />
    </div>
  );
};
