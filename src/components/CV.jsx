import { useState } from "react";
import Info from "./Info";
import Education from "./Education";
import Work from "./Work";
import Skills from "./Skills";
import { v4 as uuidv4 } from 'uuid';

const CV = () => {
  const [eduCards, setEduCards] = useState([uuidv4()]);
  const [workCards, setWorkCards] = useState([uuidv4()]);

  const handleAddEdu = () => {
    setEduCards([...eduCards, uuidv4()])
  }

  const handleAddWork = () => {
    setWorkCards([...workCards, uuidv4()])
  }

  const deleteEduCard = (id) => {
    setEduCards(eduCards.filter(cardId => cardId !== id))
  }

  const deleteWorkCard = (id) => {
    setWorkCards(workCards.filter(cardId => cardId !== id))
  }

  return(
    <>
      <Info />
      {eduCards.map(id => <Education id={id} key={id} deleteFunc={() => deleteEduCard(id)}/>)}
      <button onClick={handleAddEdu}>Add Education</button>
      {workCards.map(id => <Work id={id} key={id} deleteFunc={() => deleteWorkCard(id)}/>)}
      <button onClick={handleAddWork}>Add Work</button>
      <Skills />
    </>
  )
}

export default CV;