import { useState } from "react";
import Info from "./Info";
import Education from "./Education";
import Work from "./Work";
import Skills from "./Skills";
import { v4 as uuidv4 } from 'uuid';
import '../styles/CV.css'

const CV = () => {
  // Hold uuids for each Education and Work component in state
  const [eduCards, setEduCards] = useState([uuidv4()]);
  const [workCards, setWorkCards] = useState([uuidv4()]);

  // Add a uuid to the eduCard array in state
  const handleAddEdu = () => {
    setEduCards([...eduCards, uuidv4()]);
  };

  // Add a uuid to the workCard array in state
  const handleAddWork = () => {
    setWorkCards([...workCards, uuidv4()]);
  };

  // Filter out the card with the matching id
  const deleteEduCard = (id) => {
    setEduCards(eduCards.filter(cardId => cardId !== id));
  };

  // Filter out the card with the matching id
  const deleteWorkCard = (id) => {
    setWorkCards(workCards.filter(cardId => cardId !== id));
  };

  return(
    <>
      <div id="title">CV Formatter</div>
      <div id="content">
        <Info className='section'/>
        <h2>Education</h2>
        {/** For each id in the eduCards state array, create an Education component */}
        {eduCards.map(id => <Education id={id} className='section' key={id} deleteFunc={() => deleteEduCard(id)}/>)}
        {/** Button to add new Education components */}
        <button className='addbutton' onClick={handleAddEdu}>Add Education</button>
        <h2>Work</h2>
        {/** For each id in the workCards state array, create a Work component */}
        {workCards.map(id => <Work id={id} className='section' key={id} deleteFunc={() => deleteWorkCard(id)}/>)}
        {/** Button to add new Work components */}
        <button className='addbutton' onClick={handleAddWork}>Add Work</button>
        <h2>Skills</h2>
        <Skills className='section'/>
      </div>
    </>
  )
}

export default CV;