
import { Link, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Link 
        to='/'
      ><h1>Home Page</h1></Link>
      <Link
        to='/login'
      >Login</Link>
      <Outlet/>
    </div>
  );
}

export default App;
