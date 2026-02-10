import { useContext } from "react";
import { MyContext } from "../App.jsx";
import { Link } from "react-router-dom";

function Dashboard () {
    const { taskArray} = useContext (MyContext);
    
    const totalTasks = taskArray.length;
    const completedTasks = taskArray.filter ((task) => task.taskStatus === 'completed').length;
    const pendingTasks = taskArray.filter ((task) => task.taskStatus === 'pending').length;

    const today = new Date().toISOString().split("T")[0];


    const taskDueToday = taskArray.filter ((task) => task.dueDate === today).length;

    return (

       <div className="dashboard">

       <div className="welcomeMsg">
         <h1>Hello, welcome to your dashboard 👋</h1>
         <p>This is your personal space to manage tasks,
             track progress, and stay organized. View your 
             task statistics, check what’s completed, and see 
             what needs attention 
         </p>
       </div>
  
     <div className="linkBtns">
       <Link to ='/addTask'><button>➕ Add New Task</button></Link>
       <Link to= '/taskList'> <button>🧾 View all Tasks</button></Link>
     </div>

          <div className="cardsContainer">
             <div className="card">
                <p className="icon">🧾</p>
                <h1>{totalTasks}</h1>
                <p className="text">Total Tasks</p>
             </div>

             <div className="card">
               <p  className="icon">✅</p>
                <h1>{completedTasks}</h1>
                <p className="text">Total Completed Tasks</p>
             </div>

             <div className="card">
                <p className="icon">⌛</p>
                <h1>{pendingTasks}</h1>
                <p className="text">Total Pending Tasks</p>
             </div>

            <div className="card">
                <p className="icon">🗓️</p>
                <h1>{taskDueToday}</h1>
                <p className="text">Total Tasks Due Today</p>
             </div>
        </ div>
       </div>

    )
}

export default Dashboard;