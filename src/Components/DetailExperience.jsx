

function DetailExperience({job}){
    return(
        <div>
            <p>{job.years}</p>
            <div>
                <h2>{job.jobName}</h2>
                <p>{job.jobAt}</p>
            </div>
            <ul>
                {job.tasks.map((task, index)=>(
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </div>
    )
}

export {DetailExperience}