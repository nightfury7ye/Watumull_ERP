import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import ContactUs from "./pages/ContactUs";
import Faculty from "./pages/Faculty";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
    <Navbar/>
    {/* <Home/> */}
    <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="faculty" element={ <Faculty/> } />
        <Route path="contactus" element={ <ContactUs/> } />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
