
import './App.css';
import { useState } from 'react';
import { Header } from './header';
import {Box} from './box';
import {Footer} from './footer';
import {Note} from './Note';
function App() {
  const [notes,SetNote]=useState([]);
  function Addnote(note)
  {
    SetNote((pre)=>{return [...pre,note];});
  }
  function deleteNote(id)
  {
    SetNote((pre)=>{return pre.filter((noteItem,index)=>{return id!==index;});})
  }
  return (
    <div className="App">
      <Header/>
      <Box onAdd={Addnote}/>
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer/>
    </div>
  );
}

export default App;
