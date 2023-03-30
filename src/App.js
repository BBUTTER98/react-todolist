import { useState } from 'react';
import './App.css';
import Form from './components/form';
import Todos from './components/todos';
function App() {
  const [tasks, setTasks] = useState([]);
  const handleSubmit = (task) => {
    setTasks([...tasks,task]);
  }
  const editItem = (id,name) => {
    setTasks(tasks.map(obj=> {
      if(id === obj.id){
        return{
          id:id,
          name:name
        }
      }
      return obj;
    }));
  }
  const removeItem = (id) => {
    setTasks(tasks.filter(obj => {
      return obj.id!==id;
    }))
  }
  return(
    <div>
      <h1>ToDoList</h1>
      <div>
        <Form add={handleSubmit}/>
        <Todos list={tasks} edit={editItem} remove={removeItem}/>
      </div>
    </div>
    
  )

}

export default App;
