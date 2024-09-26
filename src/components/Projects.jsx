import todoappimg from "../assets/Todoapp.png"
import quiznestimg from "../assets/Quiznest.png"
import cypherimg from "../assets/Cypher.png"
import htmllogo from "../assets/icons/html.svg";
import csslogo from "../assets/icons/css.svg";
import jslogo from "../assets/icons/javascript.svg";
import reactlogo from "../assets/icons/react.svg";
import mongodblogo from "../assets/icons/mongodb.svg";
import tailwindlogo from "../assets/icons/tailwindcss.svg";
import reduxlogo from "../assets/icons/redux.svg";
import materiallogo from "../assets/icons/material.svg";
import pythonlogo from "../assets/icons/python.svg";
import djangologo from "../assets/icons/django.svg";
const Projects = () => {
  const projects = [
    {
      title: "QUIZNEST App",
      description:
        "A quiz platform with user authentication, quiz creation and resposive design.",
      image: quiznestimg,
      logos: [htmllogo, csslogo, jslogo, reactlogo, mongodblogo, tailwindlogo, reduxlogo, materiallogo],
      github: "https://github.com/Tawfiques/QuizNest",
      demo: "https://quiznest.onrender.com",
    },
    {
      title: "ToDo App",
      description:
        "A simple Todo App that allows users to add and manage tasks.",
      image: todoappimg,
      logos: [htmllogo, csslogo, jslogo, reactlogo, mongodblogo,materiallogo],
      github: "https://github.com/Tawfiques/ToDoApp",
      demo: "https://todoapp-two-topaz.vercel.app",
    },
    {
      title: "Cypher",
      description:
        "An app to encrypt and store files in Google Drive, ensuring their safety and privacy.",
      image: cypherimg,
      logos: [htmllogo, csslogo, pythonlogo ,djangologo ],
      github: "https://github.com/TawfiqueHassan/Cypher",
    },
  ];

  return (
    <section className="flex flex-col flex-wrap h-full gap-5 md:flex-row sm:gap-10 w-full animate-fade-in sm:p-6">
      {projects.map((project) => (
        <div className="bg-gray-800 backdrop-blur-lg h-1/5 sm:h-[calc(100vh-60vh)] flex-1 rounded-lg text-white p-2 sm:p-4 text-xs xl:text-base" key={project.title}>
          <div className="flex flex-col gap-2 h-full">
            <img
              src={project.image}
              className="object-top object-cover rounded-md h-3/6 w-full"
              alt={project.title}
            />
            <h1 className="font-semibold">{project.title}</h1>
            <p>{project.description}</p>
            <div className="hidden sm:flex gap-2">
              {project.logos?.map((logo) => (
                <img key={logo} className="h-4 w-4" src={logo} alt="" />
              ))}
            </div>
            <div className="flex gap-4 justify-between mt-auto">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:px-4 sm:py-2 bg-valorantRed rounded-lg hover:opacity-80"
              >
                Github
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 sm:px-4 sm:py-2 bg-valorantDark rounded-lg hover:opacity-80"
                >
                  Demo
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;


