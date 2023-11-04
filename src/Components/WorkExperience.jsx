
import React from "react"


function WorkExperience({works, jobs}){
    return (
        <div className="workContainer">
            <div className="graphics-container">
            <h2 className="experience-text">Work <br/>     Experience</h2> 
                <div className="left r we-bg">
                    <span className="circle-cont"><a className="circle-inner" id="circle-one" /></span>
                    <span className="circle-cont-1" ><a className="circle-inner" id="circle-two" /></span>
                    <span className="circle-cont-2" ><a className="circle-inner" id="circle-three" /></span>
                </div>
            </div>
            <div className="right">
            <span src={works} alt='work experience'/>
                {jobs.map((job, index) => (
                <div key={index} className="work">
                <p className="years-p">{job.years}</p>
                <div className="jobs-container">
                    <h2 className="job-name-h2">{job.jobName}</h2>
                    <p className="job-at-p">{job.jobAt}</p>
                </div>
            <ul className="tasks-ul">
                {job.tasks.map((task, index) => (
                <li className="task-li" key={index}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    )
}

export {WorkExperience}