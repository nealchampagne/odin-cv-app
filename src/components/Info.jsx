import { useState } from 'react'
import Input from './Input';
import Submit from './Submit';
import Edit from './Edit';
import '../styles/Info.css';

// Pass class name to component as a prop
const Info = ({className}) => {

  // Hold the input form value as data object and track submission status in state
  const [data, setData] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
    submit: false
  });

  // Update object in state on form input
  const handleChange = (e) => {
    const { value, name} = e.target
    setData({
      ...data, 
      [name]: value
    });
  };

  // Set submission value in state on submit
  const handleSubmit = (e) => {
    setData({
      ...data,
      submit: !data.submit
    });
    e.preventDefault();
  };

  return (
    <div className={className}>
      {/** Hide and show form/card based on submit boolean in state */}
      <style>
        {data.submit
        ? `.infoform {display: none}
           .info {display: grid}`
           : `.infoform {display: grid}
             .info {display: none}`}
      </style>
      <form className='infoform'>
        <Input
          label='Name'
          name='name'
          type='text'
          value={data.name}
          onChange={handleChange}
        />
        <Input
          label='Address'
          name='address'
          type='text'
          value={data.address}
          onChange={handleChange}
        />
        <Input
          label='Email'
          name='email'
          type='text'
          value={data.email}
          onChange={handleChange}
        />
        <Input
          label='Phone'
          name='phone'
          type='text'
          value={data.phone}
          onChange={handleChange}
        />
        <Submit
          onClick={handleSubmit}
        />
      </form>
      <div className='info'>
        <h1>{data.name}</h1>
        <div className="bottom">
          <p>{data.address}</p>
          <p className='dot'>•</p>
          <p>{data.email}</p>
          <p className='dot'>•</p>
          <p>{data.phone}</p>
        </div>
        <Edit 
          onClick={handleSubmit}
        />
      </div>
    </div>
  )
}

export default Info
