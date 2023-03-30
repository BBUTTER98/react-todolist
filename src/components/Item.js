import { useState } from "react";
import Base from "./items/Base";
import Edit from "./items/Edit";
import "../App.css";
function Item(props){
    const [editable, setEditable] = useState(false);
    const setter = () =>{
        setEditable(!editable);
    }
    if(editable){
        return (
        <div className="item">
            <Edit item={props.task} edit={props.edit} setter={setter}/>
        </div>
        )
    }
    else{
        return (
            <div className="item item-container">
                <Base item={props.task} setter={setter} remove={props.remove}/>
            </div>
        )
    }
}
export default Item;