import { Skills } from "../Components/Skills"
import skillsData from '../skills.json'
const Skill=()=>{
    return(
        <>
        <Skills skills={skillsData}/>
        </>
    )
}
export {Skill}