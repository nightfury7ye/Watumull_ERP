import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Faculty from "./pages/Faculty";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
    <Navbar/>
    {/* <Home/> */}
    <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="faculty" element={ <Faculty/> } />
      </Routes>
    </>
  );
}

export default App;
