import Item from "./Item";
function Todos(props){
    props.list.map(obj => <Item task={obj}/>
    )
}
export default Todos;