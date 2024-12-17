import { useState } from 'react'
import Input from './Input';
import Submit from './Submit';
import Edit from './Edit';
import '../styles/Skills.css';

// Pass class name to the component as a prop
const Skills = ({className}) => {

  // Hold the input form value as data object and track submission status in state
  const [data, setData] = useState({
    skills: '',
    submit: false
  });

  // Update object in state on form input
  const handleChange = (e) => {
    const { value, name} = e.target;
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