import './App.css';
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

//Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Natiq from "./pages/Natiq";
import Error from "./pages/Error";

export default function App() {
  return (
    <Routes>
      <Route index path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/natiq" element={<Natiq />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
}