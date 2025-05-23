import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Splash from './pages/Splash';
import Signup from './pages/Signup'; 
import Login from './pages/Login';
import Profile from "./pages/Profile";




import './index.css'; 


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />

       
      </Routes>
    </Router>
  );
}

export default App;
