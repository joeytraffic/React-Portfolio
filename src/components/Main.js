import Project from "./Project";

import coin from "../images/coin.png";
import fridayAnimeNightImage from "../images/fridayanimenight.png";
import jsquizImage from "../images/jsquiz.png";
import passwordImage from "../images/password.png";
import readmeImage from "../images/README.png";
import noteImage from "../images/notetaker.png";

const projects = [
  {
    title: "Eco Crypto Portal",
    screenshot: coin,
    description:
      "Eco Crypto Portal lets the user view their favorite eco friendly cyrptocurrencies on a fully responsive website.",
    available: true,
    url: "https://ecocryptoportal.herokuapp.com/",
    githubUrl: "https://github.com/arishorts/earth-coins",
  },
  {
    title: "Note Taker",
    screenshot: noteImage,
    description:
      "Note Taker is an application that allows you to write, save, and delete notes. This application uses an express backend and saves and retrieves note data from a JSON file.",
    available: true,
    url: "https://note-taker-joeytraffic.herokuapp.com/",
    githubUrl: "https://github.com/joeytraffic/Note-Taker",
  },
  {
    title: "Friday Anime Night",
    screenshot: fridayAnimeNightImage,
    description:
      "Friday Anime Night was created for those who don't know what to watch or eat on date night. The application provides you with options for food and anime. Friday anime night lets you cycle through and save your favorite choices. If you don't like the anime or food option, you can choose another by clicking the refresh button. Regardless if it's date night or not, if you need some ideas to spruce up your evening, this app is for you.",
    available: true,
    url: "https://joeytraffic.github.io/friday-anime-night/",
    githubUrl: "https://github.com/joeytraffic/friday-anime-night",
  },
  {
    title: "README Generator",
    screenshot: readmeImage,
    description:
      "A command-line application that dynamically generates a README.md from a user's input.",
    available: true,
    url: "https://github.com/joeytraffic/README-Generator",
    githubUrl: "https://github.com/joeytraffic/README-Generator",
  },
  {
    title: "JavaScript Code Quiz",
    screenshot: jsquizImage,
    description:
      "A simple multiple choice website that quizes the user on their JavaScript knowledge.",
    available: true,
    url: "https://joeytraffic.github.io/04-WebAPIs-CodeQuiz/",
    githubUrl: "https://github.com/joeytraffic/04-WebAPIs-CodeQuiz",
  },
  {
    title: "Password Generator",
    screenshot: passwordImage,
    description: "A random password generator.",
    available: true,
    url: "https://joeytraffic.github.io/Password-Generator/",
    githubUrl: "https://github.com/joeytraffic/Password-Generator",
  },
];

const Main = () => {
  return (
    <div className="main">
      <hr className="the-line" />
      <span className="more-space"></span>
      <h2 id="projects" className="projects">
        Projects:
      </h2>
      <span className="more-space"></span>
      <div>
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            screenshot={project.screenshot}
            description={project.description}
            technologiesUsed={project.technologiesUsed}
            githubUrl={project.githubUrl}
            url={project.url}
          />
        ))}
      </div>
    </div>
  );
};

export default Main;
