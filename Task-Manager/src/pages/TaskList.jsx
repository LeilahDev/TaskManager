import { useContext, useState } from "react";
import { MyContext } from "../App.jsx";
import { Link } from "react-router-dom";
 
 function TaskList () {

 const {taskArray,setTaskArray} = useContext (MyContext);
 const [inputValue, setInputValue] = useState ("");
 const [searchResults , setSearchResults] = useState (null);
 const [currentPage, setCurrentPage] = useState(0);


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
      <div className="task-list-container">
        
              <div className="search-section">
                <input type="text" placeholder="Search by title" onChange={handleChange} />
                <button onClick={handleSearch}>🔎 Search</button>
              </div>

              <div className="tasks-grid-wrapper">
                {tasksToShow.length === 0 ? (
                  <p className="no-tasks">No tasks found</p>
                ) : (
                  <>

                          <button 
                            className="arrow left" 
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 0))}
                            disabled={currentPage === 0}
                          >
                            ◀
                          </button>

                          <div className="tasks-grid">
                            {tasksToShow
                              .slice(currentPage * 3, currentPage * 3 + 3)
                              .map(task => (
                                <div className="task-card" key={task.id}>
                                  <h3 className={`task-title ${task.taskStatus === 'completed' ? 'completed' : ''}`}>{task.title}</h3>
                                  <p>Subject: {task.subject}</p>
                                  <p>Due Date: {task.dueDate}</p>
                                  <p>Priority: {task.priority}</p>
                                  <p>Status: {task.taskStatus}</p>

                                  <div className="task-buttons">
                                    <button onClick={() => handleCompleted(task.id)} disabled={task.taskStatus === 'completed'}>✅ Complete</button>
                                    <Link to={`/edit/${task.id}`}><button>🖋️ Edit</button></Link>
                                    <button onClick={() => handleDelete(task.id)}>❌ Delete</button>
                                  </div>
                                </div>
                              ))
                            }
                          </div>

                          <button 
                            className="arrow right" 
                            onClick={() => setCurrentPage(prev => prev + 1)}
                            disabled={(currentPage + 1) * 3 >= tasksToShow.length}
                          >
                            ▶
                          </button>
                  </>
                )}
              </div>
      </div>

        </>

 )
 }

 export default TaskList;