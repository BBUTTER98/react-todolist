import { useState } from "react";
import { FaPlus } from "react-icons/fa";
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
        <form
            id="main-form" 
            onSubmit={(e)=>{
            e.preventDefault();
            if(task.name!==''){
                props.add(task);
            }
            else{
                alert("Do not insert empty task, no reason for that");
            }
            setTask({
                id:uniqid(),
                name: '',
            });
        }}>
            <input type="text" placeholder="Enter your task" onChange={handleChange} value={task.name} />
            <button type="submit">
                <FaPlus id="add-item"/>
            </button>
        </form>
    )
}
export default Form;