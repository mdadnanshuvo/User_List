
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserList from './components/UserList';
import AddUser from './components/AddUser';
import Details from './components/Details';
import NavBar from './components/NavBar';





function App()
{
  return (

    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/user/:id" element={<Details />} />
        </Routes>
      </div>
    </Router>




  );
}

export default App;
