import '../styles/Input.css'

const Input = ({ label, name, type, value, onChange }) =>
  <div className="inputcontainer">
    <label for={name}>{label}
    </label>
    <input
      className='datafield'
      name={name}
      type={type}
      value={value}
      onChange={onChange}
    />
  </div>

export default Input;
