import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./components/Forms/Login";
import Signup from "./components/Forms/Signup";
import Contact from "./components/contactus/Contact"
import {

  Routes,
  Route,
} from "react-router-dom";
import Aboutus from "./components/AboutUS/Aboutus";
import Navbar from "./components/navbar/Navbar";
function App() {
  return (
    <div className="App">
      
      <Navbar />
      
      <Routes>
            <Route path="/" element={<Header/>} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/Signup" element={<Signup/>} />
            <Route path="/Form" element = {<Form />} />
            <Route path="/About" element = {<Aboutus />} />   
            <Route path="/Contact" element = {<Contact />} />   
        </Routes>

      <Footer />
    </div>

  );
}

export default App;
