import styles from './style.module.css';

export const Input = ({ label, value, placeholder, type, ...rest }) => {
  return (
    <fieldset>
      <label>{label}</label>
      <input type={type} value={value} placeholder={placeholder} {...rest} />
    </fieldset>
  );
};
