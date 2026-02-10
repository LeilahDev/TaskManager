import { useContext, useEffect } from "react";
import { MyContext } from "../App.jsx";
import { useParams } from "react-router-dom";

function EditTask () {
    const {taskArray,task, setTask,setTaskArray} = useContext (MyContext);
    const {taskId} = useParams();
    
    const task1 = taskArray.find((task) => task.id === Number(taskId));

   useEffect(() => {
      if (task1) setTask(task1);
   }, [task1]);

function handleChange (e) {
    const {name, value} = e.target;
                
     setTask(prev => ({
        ...prev,
        [name]: value
        }));

   }

   function handleSubmit (e) {
         e.preventDefault ();
         const updatedTasks = taskArray.map ((t) =>      
              t.id === Number (taskId) ?
              task 
              : t
        )
        setTaskArray (updatedTasks);

        alert(`${task1.title} edited successfully`);
  }

       if(!task1){
        return <p>No Task Found</p>
       }

     return (
        <>
        <div className="add-task-container">
           <h1 className="page-title">Edit Task</h1>
           <p className="subtitle">Update the details of {task1.title}</p>

                  <form onSubmit={handleSubmit} className="task-form">
                            <label htmlFor="taskTitle">Title</label>
                            <input type="text" id="taskTitle" required name="title" defaultValue={task1.title} onChange={handleChange}></input>

                            <label htmlFor="subject">Subject</label>
                            <input type="text" id="subject" required  name="subject" defaultValue={task1.subject} onChange={handleChange}></input>

                            <label htmlFor="dueDate">Due Date</label>
                            <input type= "date" id="dueDate" required name="dueDate" defaultValue={task1.dueDate} onChange={handleChange}></input>

                            
                            <label htmlFor="priority">Priority</label>
                              <select id="priority" required name="priority" defaultValue={task1.priority} onChange={handleChange}>
                                    <option value="">Select a priority</option>
                                    <option value="low">Low</option>
                                    <option value="medium">Medium</option>
                                    <option value="high">High</option>
                              </select>

                            <label htmlFor="taskStatus">Status</label>
                              <select id="taskStatus" required name="taskStatus" defaultValue={task1.taskStatus} onChange={handleChange}>
                                    <option value="">Select a status</option>
                                    <option value="pending">Pending</option>
                                    <option value="completed">Completed</option>
                              </select>

                            <button type="submit" className="submit-button">Submit</button>
                  </form>
         </div>
        </>
      )

}

export default EditTask;