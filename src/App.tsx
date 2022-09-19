import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Aside from './components/Aside';
import Main from './components/Main';


function App() {

const [ notes, setNotes ] = useState(["note1", "note2"])
const [text, setText] = useState('Enter your Note')

const handleTextChange = (text: any) => {

setText(text)

}


const handleTextSubmit = () => {
  
 setNotes(prevNotes => [text, ...prevNotes])

}


  return (
    <div className="App flex">
     
      <Aside notes={notes} />
      <Main text={text} onTextSubmit={handleTextSubmit} onTextChange={handleTextChange} />
    </div>
  );
}

export default App;
