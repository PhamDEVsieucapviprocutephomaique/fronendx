import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authpage from "./features/auth/Authpage";
import Homepage from "./features/home/homepage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Authpage></Authpage>} />
        <Route path="/home" element={<Homepage></Homepage>} />
        <Route path="/wallet" element={<div>Home Page</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
