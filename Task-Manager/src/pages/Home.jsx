import { Link } from "react-router-dom";


function Home  () {

    return (
        <div className="homepage">
            <div className="container">
                   <div className="content">
                      <h1>Welcome to Your Task Manager!</h1>
                      <p>Stay organized and boost your productivity.
                        Add tasks, mark them as completed and keep track of what's done.
                        Clear completed tasks, view progress and never miss a thing again
                        - all in one simple, easy-to-use app
                      </p>

                        <div className="buttons">
                             <Link to= '/addTask'><button>Add new task</button></Link>    
                             <Link to='/taskList'><button>View all tasks</button></Link>  
                        </div>

                   </div>
                    <div className="background">
                       <div className="image"></div>
                    </div>
            </div>

        </ div>
    )
  
}

export default Home;