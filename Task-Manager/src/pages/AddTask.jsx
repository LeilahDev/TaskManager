import { useContext } from "react";
import { MyContext } from "../App.jsx";

 function AddTask () {

    const {task, setTask , taskArray , setTaskArray} = useContext (MyContext)
  
  function handleChange (e) {
    const {name, value} = e.target;

       setTask ((prev) => (
         {...prev , 
            [name] : value
         }
       ))

   }

   function handleSubmit (e) {
         e.preventDefault ();
         setTaskArray ([...taskArray, {id: Date.now(), ...task}]);

          alert(`${task.title} added successfully`)
         setTask (
                        {
                title: "",
                subject: "",
                dueDate: "",
                priority: "",
                taskStatus: ""
            }
         )
       }   

      return (
        <>

        <div className="add-task-container">

           <h1 className="page-title">Add a New Task</h1>
           <p className="subtitle">Fill in the details to organize your tasks</p>

         <form onSubmit={handleSubmit} className="task-form">
    
                <label htmlFor="taskTitle">Title</label>
                <input type="text" id="taskTitle" name="title" value={task.title} onChange={handleChange} required />

                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" value={task.subject} onChange={handleChange} required />

                <label htmlFor="dueDate">Due Date</label>
                <input type="date" id="dueDate" name="dueDate" value={task.dueDate} onChange={handleChange} required />

                <label htmlFor="priority">Priority</label>
                <select id="priority" name="priority" value={task.priority} onChange={handleChange} required>
                  <option value="">Select a priority</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>

                <label htmlFor="taskStatus">Status</label>
                <select id="taskStatus" name="taskStatus" value={task.taskStatus} onChange={handleChange} required>
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

 export default AddTask;