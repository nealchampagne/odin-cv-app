import { useState } from 'react'
import Input from './Input';
import Submit from './Submit';
import Edit from './Edit';
import '../styles/Skills.css';

const Skills = ({className}) => {

  const [data, setData] = useState({
    skills: '',
    submit: false
  });

  const handleChange = (e) => {
    const { value, name} = e.target;
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
        <p><b>Skills:</b> {data.skills}</p>
        <Edit 
          onClick={handleSubmit}
        />
      </div>
    </div>
  )
}

export default Skills;