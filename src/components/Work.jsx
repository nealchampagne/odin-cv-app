import { useState } from 'react'
import Input from './Input';
import Submit from './Submit';
import Edit from './Edit';
import Delete from './Delete';
import '../styles/Work.css';


// Pass id, classname, and delete function as props to the component
const Work = ({id, className, deleteFunc}) => {

  // Hold the input form value as data object and track submission status in state
  const [data, setData] = useState({
    id: id,
    position: '',
    company: '',
    location: '',
    start: '',
    end: '',
    responsibilities: '',
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
        ? `#form${data.id} {display: none}
          #card${data.id} {display: grid}`
        : `#form${data.id} {display: grid}
          #card${data.id} {display: none}`}
      </style>
      {/** Delete button gets passed the same delete function as the component */}
      <Delete 
        onClick={deleteFunc}
      />
      <form id={'form'+data.id} className='workform'>
        <Input
          label='Company'
          name='company'
          type='text'
          value={data.company}
          onChange={handleChange}
        />
        <Input
          label='Position'
          name='position'
          type='text'
          value={data.position}
          onChange={handleChange}
        />
        <Input
          label='Location'
          name='location'
          type='text'
          value={data.location}
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
        <Input
          label='Responsibilities'
          name='responsibilities'
          type='text'
          value={data.responsibilities}
          onChange={handleChange}
        />
        <Submit
          onClick={handleSubmit}
        />
      </form>
      <div id={'card'+data.id} className='workcard'>
        <div className="top">
          <div className="topleft">
            <p><b>{data.company}</b></p>
            <p>{data.position}</p>
          </div>
          <div className="topright">
            <p>{data.location}</p>
            <p>{data.start} - {data.end}</p>
          </div>
        </div>
        <p>Responsibilites: {data.responsibilities}</p>
        <Edit 
          onClick={handleSubmit}
        />
      </div>
    </div>
  )
}

export default Work;