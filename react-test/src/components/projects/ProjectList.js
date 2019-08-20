import React from 'react';
import ProyectSummary from './ProjectSummary'

const ProjectList = ({projects}) =>{
    return(
        <div className="project-list section">
            { projects && projects.map(project => {
                return(
                    <ProyectSummary project={project} key={project.id} />
                )
            })}
        
    
            

        </div>
    )
}

export default ProjectList;