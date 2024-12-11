import { useState } from 'react'
import Input from './Input';
import Submit from './Submit';
import Edit from './Edit';

const Skills = () => {

  const [data, setData] = useState({
    skills: '',
    submit: false
  });

  const handleChange = (e) => {
    const { value, name} = e.target
    setData({
      ...data, 
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    setData({
      ...data,
      submit: !data.submit
    });
    e.preventDefault();
  }

  return (
    <>
      <style>
        {data.submit
        ? `.skillsform {display: none}
           .skills {display: grid}`
           : `.skillsform {display: grid}
             .skills {display: none}`}
      </style>
      <form className='skillsform'>
        <Input
          label='Skills'
          name='skills'
          type='textarea'
          value={data.skills}
          onChange={handleChange}
        />
        <Submit
          onClick={handleSubmit}
        />
      </form>
      <div className='skills'>
        <p>Skills: {data.skills}</p>
        <Edit 
          onClick={handleSubmit}
        />
      </div>
    </>
  )
}

export default Skills