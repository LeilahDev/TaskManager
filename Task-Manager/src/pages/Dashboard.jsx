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

       <>

       <Link to ='/addTask'><button>➕ Add New Task</button></Link>
       <Link to= '/taskList'> <button>🧾 View all Tasks</button></Link>
        
       
          <div>
             <div className="card">
                <h1>{totalTasks}</h1>
                <p>Total Tasks</p>
             </div>

             <div className="card">
                <h1>{completedTasks}</h1>
                <p>Total Completed Tasks</p>
             </div>

             <div className="card">
                <h1>{pendingTasks}</h1>
                <p>Total Pending Tasks</p>
             </div>

            <div className="card">
                <h1>{taskDueToday}</h1>
                <p>Total Tasks Due Today</p>
             </div>
        </ div>
       </>

    )
}

export default Dashboard;