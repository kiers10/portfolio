import CompositionToday from "../../images/CompositionToday.jpg";
import ContactManager from "../../images/ContactManager.jpg";
import CollegeEvents from "../../images/CollegeEvents.jpg";
import LeetCodeExtension from "../../images/LeetCodeExtension.jpg";

export const ProjectsList = {
  projects: [
    {
      title: "LeetCode Extension",
      image: LeetCodeExtension,
      description:
        "A Chrome extension that visualizes LeetCode account statistics, provides the daily problem, and recommends random LeetCode problems to users.",
      technologies: "React TypeScript Material-UI",
      projectLink: "",
      githubLink: "https://github.com/kiers10/LeetCode-Extension",
    },
    {
      title: "Composition Today",
      image: CompositionToday,
      description:
        "A revitalization project that creates an online hub for musicians by providing a centralized platform to discover opportunities in the music industry.",
      technologies: "React TypeScript MySQL",
      projectLink: "http://compositiontoday.net/",
      githubLink: "https://github.com/CompositionTodayV2",
    },
    {
      title: "College Events",
      image: CollegeEvents,
      description:
        "A web application that streamlines the management of student organizations and coordinating university events.",
      technologies: "React JavaScript PHP MySQL",
      projectLink:
        "https://docs.google.com/document/d/1ibHUR6A_beshFMCd3u0jstUul8P_feef1wViM4QY1Fk/edit?usp=sharing",
      githubLink: "",
    },
    {
      title: "Contact Manager",
      image: ContactManager,
      description:
        "A web application that allows users to effortlessly manage their contacts by providing comprehensive CRUD (Create, Read, Update, Delete) functionality.",
      technologies: "HTML CSS JavaScript MySQL",
      projectLink: "",
      githubLink: "https://github.com/jeffreydivi/ContactManager",
    },
  ],
};
