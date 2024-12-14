import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './components/Signup';
import Login from './components/Login';
import Userdashboard from './components/Userdashboard';

function App() {
  return (
    
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login></Login>}></Route>
      <Route path='/Login' element={<Login></Login>}></Route>
      <Route path='/Signup' element={<Signup></Signup>}></Route>
      <Route path='/userdashboard' element={<Userdashboard></Userdashboard>}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
