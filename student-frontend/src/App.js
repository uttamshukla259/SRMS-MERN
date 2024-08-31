
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import Profile from './Profile';
import Admin from './Admin';
import Logout from './Logout';
import Student from './Student';
import Signup from './Signup';
import Login from './Login';
import PrivateComponent from './PrivateComponent';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route element={<PrivateComponent />}>
          <Route path="/" element={<Home/>} />
          <Route path="/student" element={<Student />} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/profile" element={ <Profile />} />
          <Route path="/logout" element={<Logout />} />
         </Route>
        
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
