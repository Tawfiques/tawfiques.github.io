import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Projects from "./components/Projects";
import Education from "./components/Education";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="h-screen grid grid-cols-8 grid-rows-12 sm:grid-cols-12 sm:grid-rows-12 animate-fade-in bg-[linear-gradient(50deg,rgba(47,39,50,1)_0%,rgba(79,45,54,1)_10%,rgba(64,42,52,1)_20%,rgba(36,36,48,1)_45%,rgba(29,35,47,1)_75%)]">
          <Sidebar />
          <Navbar />
          <Main> 
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/education" element={<Education />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/projects" element={<Projects />}/>
          </Routes>
          </Main>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

