import Syncode from "../images/syncode.png";
import Syncode1 from "../images/syncode1.png";
import Syncode2 from "../images/syncode2.png";
import StudyNotion from "../images/studynotion.png";
import StudyNotion1 from "../images/studynotion1.png";
import StudyNotion2 from "../images/studynotion2.png";
import StudyNotion3 from "../images/studynotion3.png";
import StudyNotion4 from "../images/studynotion4.png";
import WeatherApp1 from "../images/weatherapp1.png";
import WeatherApp2 from "../images/weatherapp2.png";
import DevDetective1 from "../images/devdetective.png" ; 

export const projectsData = [
  {
    id: 1,
    title: "Syncode",
    category: "Real-time Collaborative Code Editor",
    img: [Syncode,Syncode1,Syncode2],
    github: "https://github.com/adityadev000/Syncode",
	  tech:["React","Node.js","Express","MongoDB","WebSocket" ,"yjs"],
    demo: "https://syncode-lovat.vercel.app/"
  },
  {
    id: 2,
    title: "Study Notion",
    category: "Learning Management System",
    img: [StudyNotion , StudyNotion1,StudyNotion2,StudyNotion3,StudyNotion4],
    github: "https://github.com/adityadev000/StudyNotion",
	tech: ["React","Redux","Tailwind CSS","Node.js","Express.js","MongoDB","JWT Auth","Razorpay","Cloudinary"
],
    demo: "https://studynotion-frontend-olive-beta.vercel.app/"
  },
  {
  id: 3,
  title: "Weather App",
  category: "Weather Forecast Application",
  img: [WeatherApp1, WeatherApp2],
  github: "https://github.com/adityadev000/Weather-App",
  tech: ["HTML","CSS","JavaScript","Weather API","Geolocation API"],
  demo: "https://adityadev000.github.io/Weather-App/"
},
{
  id: 4,
  title: "Dev Detective",
  category: "GitHub Profile Finder",
  img: [DevDetective1],
  github: "https://github.com/adityadev000/Dev-Detective",
  tech: ["HTML","CSS","JavaScript","GitHub API","Dark Mode","Responsive UI"],
  demo: "https://adityadev000.github.io/Dev-Detective/"
}
];