import { useState } from "react";
import Info from "./Info";
import Education from "./Education";
import Work from "./Work";
import Skills from "./Skills";
import { v4 as uuidv4 } from 'uuid';
import '../styles/CV.css'

const CV = () => {
  const [eduCards, setEduCards] = useState([uuidv4()]);
  const [workCards, setWorkCards] = useState([uuidv4()]);

  const handleAddEdu = () => {
    setEduCards([...eduCards, uuidv4()]);
  };

  const handleAddWork = () => {
    setWorkCards([...workCards, uuidv4()]);
  };

  const deleteEduCard = (id) => {
    setEduCards(eduCards.filter(cardId => cardId !== id));
  };

  const deleteWorkCard = (id) => {
    setWorkCards(workCards.filter(cardId => cardId !== id));
  };

  return(
    <div id="content">
      <Info className='section'/>
      {eduCards.map(id => <Education id={id} className='section' key={id} deleteFunc={() => deleteEduCard(id)}/>)}
      <button className='addbutton' onClick={handleAddEdu}>Add Education</button>
      {workCards.map(id => <Work id={id} className='section' key={id} deleteFunc={() => deleteWorkCard(id)}/>)}
      <button className='addbutton' onClick={handleAddWork}>Add Work</button>
      <Skills className='section'/>
    </div>
  )
}

export default CV;