import { useState } from 'react'
import Input from './Input';
import Submit from './Submit';
import Edit from './Edit';
import Delete from './Delete';

const Education = ({id, deleteFunc}) => {
  const [data, setData] = useState({
    id: id,
    degree: '',
    school: '',
    start: '',
    end: '',
    submit: false
  });

  const handleChange = (e) => {
    const { value, name} = e.target
    setData({
      ...data, 
      [name]: value
    })
  };

  const handleSubmit = (e) => {
    setData({
      ...data,
      submit: !data.submit
    });
    e.preventDefault();
  };

  return (
    <>
      <style>
        {data.submit
        ? `#form${data.id} {display: none}
          #card${data.id} {display: grid}`
        : `#form${data.id} {display: grid}
          #card${data.id} {display: none}`}
      </style>
      <Delete
        onClick={deleteFunc}
      />
      <form id={'form'+data.id} className='eduform'>
        <Input
          label='Degree'
          name='degree'
          type='text'
          value={data.degree}
          onChange={handleChange}
        />
        <Input
          label='School'
          name='school'
          type='text'
          value={data.school}
          onChange={handleChange}
        />
        <Input
          label='Start date'
          name='start'
          type='text'
          value={data.start}
          onChange={handleChange}
        />
        <Input
          label='End date'
          name='end'
          type='text'
          value={data.end}
          onChange={handleChange}
        />
        <Submit
          onClick={handleSubmit}
        />
      </form>
      <div id={'card'+data.id} className='edu'>
        <p>Degree: {data.degree}</p>
        <p>School: {data.school}</p>
        <p>{data.start} - {data.end}</p>
        <Edit 
          onClick={handleSubmit}
        />
      </div>
    </>
  )
}

export default Education;