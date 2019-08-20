import  React  from 'react';


const ProyectSummary = ({project}) => {
    return(
    <div className="card z-depth-0 proyecy summary">
        <div className="card-content grey-text text-darken-3">
            <span className="card-title">{project.title}</span>
            <p>Some testing posting shit</p>
            <p className="grey-text">3rd month and bla bla</p>
        </div>
    </div> 
    )
}

export default ProyectSummary;