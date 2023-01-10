import classNames from "classnames";
import { ProjectTypes } from "./types";
import pic from "../../../public/images/projects/Resturant.png";
// whenever wee need to change default className value we will use this
export const cx = classNames;

// nav data
export const navData = [ "About", "Experience", "Works", "Contact" ]

// project data
export const projects: ProjectTypes[] = [
  {
    title: "Portfolio website",
    description:
      "Personal Website V2 Second iteration of my personal website. Designed and developed with a conscious effort to avoid Personal Website V1 Second iteration of my personal website. and Also I add Blog section and saleing system",
    tech: ["Next js 13", "Tailwind CSS", "Express js", "MongoDB"],
    code: "https://github.com/vats147/devloper-portfolio",
    live: "#",
    thumnail: "portfolio-v2.png",
    featured: true,
  },

  {
    title: "Givemereport Auto Crop PDF",
    description:
      "This tool is desgin for E-commerce seller, with the help of this seller easily crop pdf automatically ",
    tech: ["HTML", "CSS", "Python", "Node js"],
    live: "https://givemereport.vercel.app",
    thumnail: "Auto_Crop_Solution.png",
    featured: true,
  },


  {
    title: "Resturant Website",
    description:
      "An Online Resturant Website which will manage all resturant work.",
    tech: ["PHP", "BootStrap", "HTML", "JavaScript"],
    // code: "https://github.com/vats147/developer-portfolio",  
    live: "#",
    thumnail: "Resturant.png",
    featured: true,
  },


//   for not featured 
  // {
  //     title : "Amazon clone",
  //     description : "I clone World Largest E-commerce website Amazon using react js",
  //     tech : [ "React js", "Redux" ],
  //     code : 'https://github.com/raihanhosen011/amazon-nw',
  //     live : 'https://amazon-nw.vercel.app/',
  //     thumnail : "amazon.png"
  // },

  // {
  //     title : "Powermall",
  //     description : "This is an largest e-commerce website of bangladesh",
  //     tech : [ "next js", "tailwind css", "MERN" ],
  //     live : 'https://powermall.com',
  //     thumnail : "powermall.png"
  // }
];