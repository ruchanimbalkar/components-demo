import PersonCard from './components/PersonCard.jsx';
import Button from './components/Button.jsx';
import Image from './components/Image.jsx';
import reactImage from '/public/react.png'
import HeadingFour from './components/HeadingFour.jsx';
import './App.css'

function App() {

  let person = {
    firstName : "Rucha",
    lastName : "Nimbalkar",
    job : "Time Traveler",
    age : 5000
  };

  let{firstName, lastName, job,age} = person;

  function handleClick() { 
    console.log("Button clicked!"); 
  }
  
  function clickWork() { 
    console.log("This button clicked!"); 
  }

  return (
    <>
     <h1>Components Practice</h1>
      <PersonCard name="Alice Wonderland" age={25} occupation="Explorer" />
      <PersonCard name="Chikoo Fruit" age={3} occupation="Lego Player" />
      <PersonCard name={firstName+lastName} age={age} occupation={job} />

      <Button onClick = {handleClick} text="Click Me"/>
      <Button onClick = {clickWork} text="Click This Button"/>
      <Button onClick = {clickWork} text="Click Now!"/>
      
      <Image path = {reactImage} altText="react-image" widthPx="300px" />
      <HeadingFour content= "This is Fun!"/>
    </>
  )
}

export default App
