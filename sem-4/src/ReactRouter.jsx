//5-10 marks
//to use browser router, import react-router-dom
//browseroruter, routes, route, link- components of browserrouter in react router

import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Courses from "./Courses";
import Faculty from "./Faculty";

function Home(){
    return <h1>Home Page</h1>
}
function About(){
    return <h1>About Page</h1>
}
function Contact(){
    return <h1>Contact Page</h1>
}

function ReactRouter() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about"> About</Link> | 
        <Link to="/contact"> Contact</Link> | 
        <Link to="/courses"> Courses</Link> | 
        <Link to="/faculty"> Faculty</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/faculty" element={<Faculty />} />
      </Routes>
    </BrowserRouter>
  );
}

export default ReactRouter;