import {Link} from 'react-router-dom'

function NavBar () {
   return (
        <div>
             <p>Logo</p>
             <ul>

                <Link to = '/'><li>Home</li></Link>  
                 <Link to = '/dashboard'> <li>Dashboard</li></Link> 
                 <Link to = '/addTask'><li>Add Task</li></Link>  
                 <Link to = '/taskList'><li>TaskList</li></Link> 
                 
             </ul>
        </div>
   )
}

export default NavBar;