import PersonCard from './components/PersonCard.jsx';
import Button from './components/Button.jsx';
import Image from './components/Image.jsx';
import reactImage from '/public/react.png'
import HeadingFour from './components/HeadingFour.jsx';
import './App.css'

function App() {
  function handleClick() { 
    console.log("Button clicked!"); 
  }
  
  return (
    <>
     <h1>Components Practice</h1>
      <PersonCard name="Alice Wonderland" age={25} occupation="Explorer" />
      <Button onClick = {handleClick} text="Click Me"/>
      <Image path = {reactImage} altText="react-image" widthPx="300px" />
      <HeadingFour content= "This is Fun!"/>
    </>
  )
}

export default App
