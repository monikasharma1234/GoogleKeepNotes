import './Note.css';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Button } from '@mui/material';
function Note(probs)
{
   function handleClick()
   {
    probs.onDelete(probs.id);
   }
    return (<>
      <div className="note">
        <h1>
            {probs.title} 
            <Button onClick={handleClick}>
                <DeleteOutlineOutlinedIcon/>
            </Button>
        </h1>
        <p className='container3'>
         {probs.content}
        </p>
      </div>
    </>);
}
export {Note};
