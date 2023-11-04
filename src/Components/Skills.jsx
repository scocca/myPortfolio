function Skills({skills}){
    return(
    <div className="skills-container">
        <h2 className="skills-h">Skills</h2>
        <div className="main-card-container">
                    {skills.map((skills, index) => (
                    <div key={index} className="card-container">
                    <h3 className="card-title">{skills.category}</h3>
                <ul className="skills-list">
                    {skills.items.map((item, index) => (
                    <li className="task-li" key={index}>{item}</li>
                ))}
                </ul>
                
            </div>
            ))}
        </div>
    </div>
    )
}

export {Skills}