const Input = ({ label, name, type, value, onChange }) =>
  <label>
    {label}
    {' '}
    <input
      className='datafield'
      name={name}
      type={type}
      value={value}
      onChange={onChange}
    />
  </label>

export default Input;
