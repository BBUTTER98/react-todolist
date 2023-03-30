import { useState } from "react";
import Base from "./items/Base";
import Edit from "./items/Edit";
function Item(props){
    const [editable, setEditable] = useState(false);
    if(editable){
        return <Edit item={props.task} />
    }
    else{
        return <Base item={props.task} />
    }
}
export default Item;