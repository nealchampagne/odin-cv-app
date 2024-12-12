import '../styles/Submit.css'

const Submit = ({ onClick }) => 
  <input
    className='submit'
    name='submit'
    type='submit'
    value='Submit'
    onClick={onClick}
  />

export default Submit;