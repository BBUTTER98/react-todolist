import Item from "./Item";
function Todos(props){
    return(
    <div id="container">
    {props.list.map(obj => <Item key={obj.id} task={obj} edit={props.edit} remove={props.remove}/>)}
    </div>
    )
    
}
export default Todos;