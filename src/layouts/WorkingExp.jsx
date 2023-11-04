import jobsData from '../workData.json'
import works from '../assets/workinExperience.svg'
import { WorkExperience } from '../Components/WorkExperience'

const WorkingExp=()=>{
    return(
        <>
            <WorkExperience works={works} jobs={jobsData}/>
        </>
    )
}

export {WorkingExp}
