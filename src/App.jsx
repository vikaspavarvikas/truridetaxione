
import {  BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Mainpage from './Components/MainPage';
import Features from "./Components/Features";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import HowItwORKS from "./Components/Howitworks";
import Testimonials from "./Components/Testimonials";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import GetTheApp from "./Components/GetTheApp";


function App() {
  return (
    <div>
        <Header />
      <div>
        <BrowserRouter>
   
          <Routes>
            <Route path="/" element={<Mainpage />} />
            <Route path="/features" element={<Features/>} />
            <Route path="/aboutus" element={<About/>} />
            <Route path="/howitWorks" element={<HowItwORKS />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contactus" element={<ContactUs />} /> 
            <Route path="/gettheapp" element={<GetTheApp />} /> 

          </Routes>
          </BrowserRouter>
      
         <div>
          {/* < Features/> */}
        </div> 
        <div>
          
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
