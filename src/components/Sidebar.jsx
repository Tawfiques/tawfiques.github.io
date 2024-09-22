import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <div className="flex flex-col row-span-12 col-span-1 text-xs bg-valorantDark text-[#fff] xl:text-lg sm:col-span-1">
        <Link to="/" className="self-center m-4 text-3xl text-valorantRed text-center font-valorant hover:opacity-80">TH</Link>
        <div className="flex-1 flex items-center justify-center">
          <div className="flex flex-col items-center gap-4 sm:gap-8 justify-center space-y-4">
          <div className="h-[calc(100vh-80vh)] xl:h-[calc(100vh-70vh)] self-center bg-valorantRed w-[1px] " />
            <div className="flex justify-center hover:text-[#bbb4b4]">
              <a href="http://github.com/tawfiques" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-github fa-2xl "></i>
              </a>
            </div>
            <div className="flex justify-center hover:text-[#bbb4b4]">
              <a  href="https://www.linkedin.com/in/tawfiquehassan" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin fa-2xl"></i>
              </a>
            </div>
            <div className="flex justify-center hover:text-[#bbb4b4]">
              <a href="mailto:tawfiquehassan@gmail.com" target="_blank" rel="noopener noreferrer">
                <i className="fa-regular fa-envelope fa-2xl"></i>
              </a>
            </div>
            <div className="h-[calc(100vh-80vh)] xl:h-[calc(100vh-70vh)] self-center bg-valorantRed w-[1px] " />
          </div>
        </div>
      </div>
    </>
  );
}

