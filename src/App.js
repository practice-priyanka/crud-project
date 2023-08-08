// import logo from '../public/images/logo.png';
import './App.css';
import SignIn from './components/SignIn';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddStatus from './components/AddStatus';
import EmpDetails from './components/EmpDetails';
import Update from './components/Update';
import Delete from './components/Delete';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<SignIn />}></Route>
        <Route exact path="/login" element={<SignIn />}></Route>
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="/add" element={<AddStatus />}></Route>
        <Route exact path="/update" element={<Update />}></Route>
        <Route exact path="/delete" element={<Delete />}></Route>
        <Route exact path="/employee" element={<EmpDetails />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
