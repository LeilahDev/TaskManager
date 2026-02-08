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

      //  console.log(task, taskArray)

       //WANTED TO USE LOCAL STORAGE TO PERSIST DATA BUT FOR NOW LET US JUST ASSUME THE 
       // THERE IS NO REFRESHING OF THE BROWSER.
       

      return (
        <>
          <form onSubmit={handleSubmit}>
              <label htmlFor="taskTitle">Title</label>
              <input type="text" id="taskTitle" required name="title" value={task.title} onChange={handleChange}></input>

              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" required  name="subject" value={task.subject} onChange={handleChange}></input>

              <label htmlFor="dueDate">Due Date</label>
              <input type= "date" id="dueDate" required name="dueDate" value={task.dueDate} onChange={handleChange}></input>

              
              <label htmlFor="priority">Priority</label>
                <select id="priority" required name="priority" value={task.priority} onChange={handleChange}>
                      <option value="">Select a priority</option>
                       <option value="low">Low</option>
                       <option value="medium">Medium</option>
                       <option value="high">High</option>
                </select>

              <label htmlFor="taskStatus">Status</label>
                <select id="taskStatus" required name="taskStatus" value={task.taskStatus} onChange={handleChange}>
                      <option value="">Select a status</option>
                       <option value="pending">Pending</option>
                       <option value="completed">Completed</option>
                </select>

              <button>Submit</button>
          </form>
        </>
      )
 }

 export default AddTask;