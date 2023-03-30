import { useEffect, useRef, useState } from "react";
import { FaRegSave } from "react-icons/fa";
function Edit(props){
    const[newValue, setNewValue] = useState(props.item.name);
    const handleChange = (e) =>{
        setNewValue(e.target.value);
    }
    const inputRef = useRef(null);
    useEffect(()=>{
        inputRef.current.focus();
    },[])
    return(
        <form className="item-container" onSubmit={(e)=>{
            e.preventDefault();
            props.edit(props.item.id,newValue);
            props.setter();
        }}>
            <input ref={inputRef} type="text" className="item-name" value={newValue} onChange={handleChange} />
            <button type="submit" id="save-changes">
                <FaRegSave/>
            </button>
        </form>
    )
}
export default Edit;