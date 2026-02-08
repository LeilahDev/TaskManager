import {Routes ,Route} from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import Home from './pages/Home.jsx'
import Dashboard from './pages/Dashboard.jsx'
import AddTask from './pages/AddTask.jsx'
import TaskList from './pages/TaskList.jsx'
import { createContext , useState} from "react";
import EditTask from './pages/EditTask.jsx'

const MyContext = createContext ();

function App() {

  const [task, setTask] = useState ({
      title: "",
      subject: "",
      dueDate: "",
      priority: "",
      taskStatus: ""
   });

   const [taskArray , setTaskArray] = useState([]);
 
  return (
      <>
       <NavBar />

       <MyContext.Provider value = {{task , setTask, taskArray , setTaskArray}}>
              <Routes>
                 <Route path='/' element ={<Home />}/>
                 <Route path='/dashboard' element = { <Dashboard />}/>
                 <Route path='/addTask'element = {<AddTask />}/>
                 <Route path='/taskList' element = {<TaskList />}/>
                 <Route path='/edit/:taskId' element = {<EditTask />} />
          </ Routes>
      </MyContext.Provider>
      </>

  )
}

export default App;
export {MyContext}
