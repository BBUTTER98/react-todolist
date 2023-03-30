import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
function Base(props){
    console.log();
    return<>
            <div className="item-name">
                {props.item.name}
            </div>
            <button
                id="edit-item"
                onClick={()=>{
                    props.setter();
                }}
            >
                <FaEdit/>
            </button>
            <button
                id="remove-item"
                onClick={()=>{
                    props.remove(props.item.id);
                }}>
                <FaTrash/>
            </button>
        </>
}
export default Base;