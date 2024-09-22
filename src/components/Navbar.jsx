import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="row-span-1 col-start-3 col-span-6 text-xs sm:text-lg sm:col-span-11 flex items-center gap-4 p-4 sm:gap-20 text-[#848386] font-valorant flex-wrap ">
      <NavLink to="/" className={({ isActive }) => isActive ? "text-white border-b-2 border-valorantRed" : "hover:text-[#bbb4b4]"}>Home</NavLink>
      <NavLink to="/education" className={({ isActive }) => isActive ? "text-white border-b-2 border-valorantRed" : "hover:text-[#bbb4b4]"}>Education</NavLink>
      <NavLink to="/about" className={({ isActive }) => isActive ? "text-white border-b-2 border-valorantRed" : "hover:text-[#bbb4b4] "}>About</NavLink>
      <NavLink to="/projects" className={({ isActive }) => isActive ? "text-white border-b-2 border-valorantRed" : "hover:text-[#bbb4b4]"}>Projects</NavLink>
      <Link to="/resume" className="ml-auto px-6 py-2 bg-valorantRed text-center text-xs sm:text-sm rounded-lg hover:bg-valorantRed/80 text-[#fff]">Resume</Link>
    </nav>
  );
};

export default Navbar;

