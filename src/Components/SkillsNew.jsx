import { IconContext } from "react-icons";
import {FaMicrosoft} from 'react-icons/fa'
import {TbBrandVscode} from 'react-icons/tb'
import {DiVisualstudio} from 'react-icons/di'
import {FaWindows} from 'react-icons/fa'
import {SiGnubash} from 'react-icons/si'
import {SiPowershell} from 'react-icons/si'
import {FaLinux} from 'react-icons/fa'
import {FaUbuntu} from 'react-icons/fa'
import {SiGnu} from 'react-icons/si'
import {DiAndroid} from 'react-icons/di'
import {TbBrandKotlin} from 'react-icons/tb'
import {BiLogoJava} from 'react-icons/bi'
import {BsGit} from 'react-icons/bs'
import {SiGithub} from 'react-icons/si'
import {BiLogoReact} from 'react-icons/bi'
import {SiReactrouter} from 'react-icons/si'
import {SiVite} from 'react-icons/si'
import {SiNodedotjs} from 'react-icons/si'
import {FaNpm} from 'react-icons/fa'
import {SiExpress} from 'react-icons/si'
import {FaPython} from 'react-icons/fa'
import {SiJson} from 'react-icons/si'
import {TbApi} from 'react-icons/tb'
import {SiCsharp} from 'react-icons/si'
import {SiBabel} from 'react-icons/si'
import {SiBootstrap} from 'react-icons/si'
import {SiGoogle} from 'react-icons/si'
import {SiGooglecloud} from 'react-icons/si'
import {SiGoogledrive} from 'react-icons/si'
import {SiGooglechrome} from 'react-icons/si'
import {SiAndroidstudio} from 'react-icons/si'
import {SiGradle} from 'react-icons/si'
import {SiIntellijidea} from 'react-icons/si'
import {SiMdnwebdocs} from 'react-icons/si'
import {SiDiscord} from 'react-icons/si'
import {SiZoom} from 'react-icons/si'
import {SiApache} from 'react-icons/si'
import {SiFigma} from 'react-icons/si'
import {SiFirebase} from 'react-icons/si'
import {SiFirefoxbrowser} from 'react-icons/si'
import {SiJira} from 'react-icons/si'
import {DiScrum} from 'react-icons/di'
import {SiHtml5} from 'react-icons/si'
import {SiCss3} from 'react-icons/si'
import {SiJavascript} from 'react-icons/si'
import {SiInkscape} from 'react-icons/si'
import {SiJest} from 'react-icons/si'
import {SiCisco} from 'react-icons/si'
import {SiSlack} from 'react-icons/si'
import {SiOpera} from 'react-icons/si'
import {RiFileExcel2Fill} from 'react-icons/ri'
import {RiUserVoiceFill} from 'react-icons/ri'
import {RiTeamFill} from 'react-icons/ri'
// import {GrGrow} from 'react-icons/gr'
import { GiStumpRegrowth } from "react-icons/gi";
import {TbListDetails} from 'react-icons/tb'
import {RiEmpathizeFill} from 'react-icons/ri'
import {MdOutlinePublishedWithChanges} from 'react-icons/md'
import {AiFillSecurityScan} from 'react-icons/ai'
import {SiHtmlacademy} from 'react-icons/si'
import {FaJediOrder} from 'react-icons/fa'
import { TodoList } from "../Components/TodoList"


const icons =[
    {
        "Icon":<FaMicrosoft className='icons-icon'/>,
        "category": "tools",
        "level" : 75,
        "text": "Microsoft technologies"
    },
    {
        "Icon":<TbBrandVscode className='icons-icon'/>,
        "category": "Development",
        "level" : 75,
        "text": "Visual Studio Code"
    },
    {
        "Icon":<DiVisualstudio className='icons-icon'/>,
        "category": "Development",
        "level" : 50,
        "text": "Visual Studio"
    },
    {
        "Icon":<FaWindows className='icons-icon'/>,
        "category": "tools",
        "level" : 80,
        "text": "Microsoft Windows"
    },
    {
        "Icon":<SiGnu className='icons-icon'/>,
        "category": "tools",
        "level" : 50,
        "text": "GNU"
    },
    {
        "Icon":<SiGnubash className='icons-icon'/>,
        "category": "tools",
        "level" : 90,
        "text": "GNU Bash"
    },
    {
        "Icon":<SiPowershell className='icons-icon'/>,
        "category": "tools",
        "level" : 50,
        "text": "Windows PowerShell"
    },
    {
        "Icon":<FaLinux className='icons-icon'/>,
        "category": "tools",
        "level" : 60,
        "text": "GNU Linux"
    },
    {
        "Icon":<FaUbuntu className='icons-icon'/>,
        "category": "tools",
        "level" : 80,
        "text": "Ubuntu Linux"
    },
    {
        "Icon":<DiAndroid className='icons-icon'/>,
        "category": "tools",
        "level" : 80,
        "text": "Android OS",
    },
    {
        "Icon":<TbBrandKotlin className='icons-icon'/>,
        "category": "development",
        "level" : 40,
        "text": "Kotlin"
    },
    {
        "Icon":<BiLogoJava className='icons-icon'/>,
        "category": "development",
        "level" : 25,
        "text": "Java"
    },
    {
        "Icon":<BsGit className='icons-icon'/>,
        "category": "development",
        "level" : 75,
        "text": "Git"
    },
    {
        "Icon":<SiGithub className='icons-icon'/>,
        "category": "development",
        "level" : 80,
        "text": "GitHub"
    },
    {
        "Icon":<BiLogoReact className='icons-icon'/>,
        "category": "development",
        "level" : 75,
        "text": "React.JS"
    },
    {
        "Icon":<SiReactrouter className='icons-icon'/>,
        "category": "development",
        "level" : 40,
        "text": "React Router"
    },
    {
        "Icon":<SiVite className='icons-icon'/>,
        "category": "development",
        "level" : 50,
        "text": "Vite.JS"
    },
    {
        "Icon":<SiNodedotjs className='icons-icon'/>,
        "category": "development",
        "level" : 33,
        "text": "Node.JS"
    },
    {
        "Icon":<FaNpm className='icons-icon'/>,
        "category": "development",
        "level" : 70,
        "text": "Node Packet Manager"
    },
    {
        "Icon":<SiExpress className='icons-icon'/>,
        "category": "development",
        "level" : 33,
        "text": "Express.JS"
    },
    {
        "Icon":<FaPython className='icons-icon'/>,
        "category": "development",
        "level" : 40,
        "text": "Python"
    },
    {
        "Icon":<SiJson className='icons-icon'/>,
        "category": "development",
        "level" : 50,
        "text": "JSON"
    },
    {
        "Icon":<TbApi className='icons-icon'/>,
        "category": "development",
        "level" : 75,
        "text": "API's"
    },
    {
        "Icon":<SiCsharp className='icons-icon'/>,
        "category": "development",
        "level" : 15,
        "text": "C Sharp"
    },
    {
        "Icon":<SiBabel className='icons-icon'/>,
        "category": "development",
        "level" : 50,
        "text": "babel"
    },
    {
        "Icon":<SiBootstrap className='icons-icon'/>,
        "category": "development",
        "level" : 33,
        "text": "Bootstrap"
    },
    {
        "Icon":<SiGoogle className='icons-icon'/>,
        "category": "tool",
        "level" : 90,
        "text": "Google"
    },
    {
        "Icon":<SiGooglecloud className='icons-icon'/>,
        "category": "tool",
        "level" : 60,
        "text": "Google Cloud"
    },
    {
        "Icon":<SiGoogledrive className='icons-icon'/>,
        "category": "tool",
        "level" : 75,
        "text": "Google Drive"
    },
    {
        "Icon":<SiGooglechrome className='icons-icon'/>,
        "category": "tool",
        "level" : 90,
        "text": "Google Chrome"
    },
    {
        "Icon":<SiAndroidstudio className='icons-icon'/>,
        "category": "develpment",
        "level" : 60,
        "text": "Android Studio"
    },
    {
        "Icon":<SiGradle className='icons-icon'/>,
        "category": "development",
        "level" : 25,
        "text": "Gradle"
    },
    {
        "Icon":<SiIntellijidea className='icons-icon'/>,
        "category": "development",
        "level" : 60,
        "text": "Intelli J Idea"
    },
    {
        "Icon":<SiMdnwebdocs className='icons-icon'/>,
        "category": "development",
        "level" : 80,
        "text": "Mozilla Developer Networks"
    },
    {
        "Icon":<SiDiscord className='icons-icon'/>,
        "category": "tool",
        "level" : 90,
        "text": "Discord"
    },
    {
        "Icon":<SiZoom className='icons-icon'/>,
        "category": "tool",
        "level" : 70,
        "text": "Zoom Meetings"
    },
    {
        "Icon":<SiApache className='icons-icon'/>,
        "category": "development",
        "level" : 30,
        "text": "Apache"
    },
    {
        "Icon":<SiFigma className='icons-icon'/>,
        "category": "tool",
        "level" : 50,
        "text": "Figma"
    },
    {
        "Icon":<SiFirebase className='icons-icon'/>,
        "category": "development",
        "level" : 50,
        "text": "Google Firebase"
    },
    {
        "Icon":<SiFirefoxbrowser className='icons-icon'/>,
        "category": "tool",
        "level" : 70,
        "text": "Firefox Browser"
    },
    {
        "Icon":<SiJira className='icons-icon'/>,
        "category": "tool",
        "level" : 70,
        "text": "Jira"
    },
    {
        "Icon":<DiScrum className='icons-icon'/>,
        "category": "tool",
        "level" : 80,
        "text": "Scrum Agile Methodologies"
    },
    {
        "Icon":<SiHtml5 className='icons-icon'/>,
        "category": "development",
        "level" : 70,
        "text": "HTML"
    },
    {
        "Icon":<SiCss3 className='icons-icon'/>,
        "category": "development",
        "level" : 70,
        "text": "Zoom Meetings"
    },
    {
        "Icon":<SiJavascript className='icons-icon'/>,
        "category": "development",
        "level" : 70,
        "text": "Javascript"
    },
    {
        "Icon":<SiInkscape className='icons-icon'/>,
        "category": "tool",
        "level" : 40,
        "text": "InkScape"
    },
    {
        "Icon":<SiJest className='icons-icon'/>,
        "category": "development",
        "level" : 40,
        "text": "Jest"
    },
    {
        "Icon":<SiCisco className='icons-icon'/>,
        "category": "tool",
        "level" : 45,
        "text": "Cisco networks"
    },
    {
        "Icon":<SiSlack className='icons-icon'/>,
        "category": "tool",
        "level" : 70,
        "text": "Slack"
    },
    {
        "Icon":<SiOpera className='icons-icon'/>,
        "category": "tool",
        "level" : 70,
        "text": "opera Browser"
    },
    {
        "Icon":<RiFileExcel2Fill className='icons-icon'/>,
        "category": "development",
        "level" : 66,
        "text": "Microsoft Excell"
    },
    {
        "Icon":<RiUserVoiceFill className='icons-icon'/>,
        "category": "soft",
        "level" : 75,
        "text": "Active Communication"
    },
    {
        "Icon":<GiStumpRegrowth className='icons-icon'/>,
        "category": "soft",
        "level" : 90,
        "text": "Growth Mindset"
    },
    {
        "Icon":<RiTeamFill className='icons-icon'/>,
        "category": "soft",
        "level" : 75,
        "text": "Team Work"
    },
    {
        "Icon":<TbListDetails className='icons-icon'/>,
        "category": "soft",
        "level" : 95,
        "text": "Detail Orientation"
    },
    {
        "Icon":<RiEmpathizeFill className='icons-icon'/>,
        "category": "soft",
        "level" : 75,
        "text": "Empathy"
    },
    {
        "Icon":<MdOutlinePublishedWithChanges className='icons-icon'/>,
        "category": "soft",
        "level" : 95,
        "text": "Adaptability"
    },
    {
        "Icon":<AiFillSecurityScan className='icons-icon'/>,
        "category": "soft",
        "level" : 100,
        "text": "Curiosity"
    },
    {
        "Icon":<SiHtmlacademy className='icons-icon'/>,
        "category": "soft",
        "level" : 90,
        "text": "Teaching & Studying"
    },
    {
        "Icon":<FaJediOrder className='icons-icon'/>,
        "category": "soft",
        "level" : 100,
        "text": "100% Jedi"
    },
]

const SkillsNew = () =>{
    return(
        <main className='skills-main'>
            <h1 className='skills-h1'>My Skills</h1>
        <div id="icon-section-container">           
                    <TodoList>
                    <IconContext.Provider value={{ className: "icon-icons", size: 90 }}>
                        {icons.map((icons)=>(
                            <li key = {icons.text} id="skill-card-in-list">
                                <span id="icon-container">{icons.Icon}</span>
                                <div id="skill-description">
                                <p id="skill-description">{icons.text}</p>
                                <progress id="progress-bar" max={100} value={icons.level}>{icons.level}%</progress>
                                </div>
                            </li>
                        ))}
                        </IconContext.Provider>
                    </TodoList> 
        </div>
        </main>
    )
}

export {SkillsNew}





