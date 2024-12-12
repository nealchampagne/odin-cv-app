import { useState } from 'react'
import Input from './Input';
import Submit from './Submit';
import Edit from './Edit';
import '../styles/Info.css';

const Info = ({className}) => {

  const [data, setData] = useState({
    name: '',
    email: '',
    phone: '',
    submit: false
  });

  const handleChange = (e) => {
    const { value, name} = e.target
    setData({
      ...data, 
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    setData({
      ...data,
      submit: !data.submit
    });
    e.preventDefault();
  };

  return (
    <div className={className}>
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
        <p>Email: {data.email}</p>
        <p>Phone: {data.phone}</p>
        <Edit 
          onClick={handleSubmit}
        />
      </div>
    </div>
  )
}

export default Info
