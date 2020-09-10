import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote = (props) => {

    const [expand, setState] = useState(false);

    const [note, setNote] = useState({
        title:'',
        content:'',
    });
    
    const inputEvent = (event) => {
             
        const { name, value } = event.target;
        
        setNote( (preValue) => {
            return {
                ...preValue,
                [name]: value,
            }; 
        });
        console.log(note);
    };
     
    const addEvent = () => {
        props.passNote(note);
        setNote({
            title: '',
            content:'',
        });
    };
    const expandIt = () => {
        setState(true);
    };
    const normalBack = () => {
        setState(false);  
    };

    return (
        <>
            <div className="main_note">
                <form>
                    {expand?
                    <input
                        type="text"
                        name="title"
                        value={note.title}
                        onChange={inputEvent}
                        placeholder="Title"
                        autoComplete="off"                         
                        />:null} 
                    <textarea
                        rows=""
                        column=""
                        name="content"
                        value={note.content}
                        onChange={inputEvent}
                        placeholder="Write a note"
                        onClick={expandIt}
                        onDoubleClick={normalBack}>
                    </textarea>
                    
                        {expand?
                        <Button onClick={addEvent}>
                            <AddIcon />
                        </Button> :null}    
                    
                </form>
            </div>
              
        </>
    );
};

export default CreateNote;
