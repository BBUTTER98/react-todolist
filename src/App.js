import { useState } from 'react';
import './App.css';
import Form from './components/form';
import Todos from './components/todos';
function App() {
  const [tasks, setTasks] = useState([]);
  
  const handleSubmit = (task) => {
    setTasks([...tasks,task]);
    
}
  return(
    <div>
      <Form add={handleSubmit}/>
      <Todos list={tasks} />
    </div>
  )

}

export default App;
