
import { Link, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <div className="navbar">
        <Link to='/'><h1>Water My Plants</h1></Link>
          <div className='navBtn'>
            <Link to='/login' id='btn'>Login</Link>
            <Link to='/register'id='btn'>Register</Link>
          </div>
      </div>
      <div className='outlet'>
        <Outlet />
      </div>
    </div>

  );
}

export default App;
