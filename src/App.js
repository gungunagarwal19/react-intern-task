import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Splash from './pages/Splash';
import Signup from './pages/Signup'; 
import Login from './pages/Login';
import Dashboard from "./pages/Dashboard";



import './index.css'; 


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
       
      </Routes>
    </Router>
  );
}

export default App;
