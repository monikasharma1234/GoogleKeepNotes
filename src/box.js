import { Button } from '@mui/material';
import { useState } from 'react';
import './box.css';
import AddToPhotosOutlinedIcon from '@mui/icons-material/AddToPhotosOutlined';
function Box(probs)
{   
    const [isExpanded, setExpanded] = useState(false);
    const [note,setNote]=useState({title:"",content:""});
    function handleChange(event)
    { 
       const {name,value}=event.target;
        setNote((prevNote)=>{return { ...prevNote,[name]:value};
    });
    }
    function submitNote(event)
    {
       probs.onAdd(note);
       setNote({
        title:"",
        content:""
       });
       event.preventDefault();
    }
    function expand() {
        setExpanded(true);
      }
    
    return (<>
    <form className="create-note">
		{isExpanded && <input type="text" 
        name="title" 
        value={note.title} 
        onChange={handleChange} 
        placeholder='Title'/>}

        <textarea 
        placeholder='write a note........' 
        name="content" 
        value={note.content} 
        onChange={handleChange}
        onClick={expand}
        rows={isExpanded ? 3 : 1}
         columns="" 
         className="input1" />	
        
        <Button>
        <AddToPhotosOutlinedIcon className='submit' onClick={submitNote}/>
        </Button>
	</form>

    </>);
}
export {Box};
