import { useState } from "react";
import uniqid from "uniqid";
function Form(props){
    const [task, setTask] = useState({
        id:uniqid(),
        name: '',
    });
    const handleChange = (e) =>{
        setTask({
            id: uniqid(),
            name: e.target.value
        });
    }
    return(
        <form onSubmit={(e)=>{
            e.preventDefault();
            setTask({
                id:uniqid(),
                name: '',
            });
            props.add(task);
        }}>
            <input type="text" placeholder="Enter your task" onChange={handleChange} value={task.name}/>
            <button type="submit">Add task</button>
        </form>
    )
}
export default Form;