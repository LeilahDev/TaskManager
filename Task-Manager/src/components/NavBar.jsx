import {Link} from 'react-router-dom'
import logo from '../assets/logo.png'

function NavBar () {
   return (
        <div className='navBar'>
             <img src={logo} alt="logo" className='logo'/>
             <ul>

                <Link to = '/'><li>Home</li></Link>  
                 <Link to = '/dashboard'> <li>Dashboard</li></Link> 
                 <Link to = '/addTask'><li>Add Task</li></Link>  
                 <Link to = '/taskList'><li>TaskList</li></Link> 
                 
             </ul>

             <button className='navBtn'>Get Started</button>
        </div>
   )
}

export default NavBar;