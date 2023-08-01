// import logo from '../public/images/logo.png';
import './App.css';
import SignIn from './components/SignIn';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<SignIn />}></Route>
        <Route exact path="/login" element={<SignIn />}></Route>
        <Route exact path="/home" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
