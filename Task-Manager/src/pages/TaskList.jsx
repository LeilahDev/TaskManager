import { useContext, useState } from "react";
import { MyContext } from "../App.jsx";
import { Link } from "react-router-dom";
 
 function TaskList () {

 const {taskArray,setTaskArray} = useContext (MyContext);
 const [inputValue, setInputValue] = useState ("");
 const [searchResults , setSearchResults] = useState (null);

 function handleCompleted (taskId) {
    //USE MAP HERE COZ WE NEED TO SOMEHOW MODIFY THE ARRAY 
  const updatedTaskArray = taskArray.map ((task) => {
       if(task.id === taskId ) {
        return {...task , taskStatus : 'completed'}
       } else {
            return task;
       }
  })
    
    setTaskArray (updatedTaskArray);
 }

 function handleDelete (taskId) {

     //USE FILTER HERE COZ WE NEED NOT TO SOMEHOW MODIFY THE ARRAY 
      const updatedTaskArray = taskArray.filter ((task) => {
          return  taskId !== task.id;
      });
   setTaskArray (updatedTaskArray);
 }

 function handleChange (e) {
    setInputValue(e.target.value);
 }

 function handleSearch () {
     const results = taskArray.filter(task =>
       task.title.toLowerCase().includes(inputValue.toLowerCase())
    );
   setSearchResults (results);
 }

 const tasksToShow = searchResults !== null ? searchResults : taskArray;

 return (

        <>

        <input type="text" placeholder="Search by title" onChange={handleChange}></input> 
        <button onClick={handleSearch}>🔎 Search</button>
     <div>
       { tasksToShow.map ((task) => {
           return (
            <div key={task.id}>
                <p>{task.title}</p>
                <p>{task.subject}</p>
                <p>{task.dueDate}</p>
                <p>{task.priority}</p>
                <p>{task.taskStatus}</p>

                <button onClick={() => handleCompleted (task.id)} disabled={task.taskStatus === 'completed'}>✅ Mark as complete</button>
                <Link to = {`/edit/${task.id}`}><button >🖋️ Edit</button></Link>  
                <button onClick={ () => handleDelete (task.id)}>❌ Delete task</button>
            </div>
           )
       })

       }
     </ div>
        </>

 )
 }

 export default TaskList;