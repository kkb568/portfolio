import './Projects.scss'
import { projects } from '../data'
import { Link } from 'react-router-dom'

export default function Projects() {
    const projectsData = projects.map((project) => {
        return (
            <ProjectData key={project.id}
                imageUrl={project.imageUrl}
                name={project.name}
                id={project.id}/>
        )
    })

    return (
        <>
            <h3>Projects</h3>
            <div className='projects'>
                {projectsData}
            </div>
        </>
    )
}

function ProjectData(props) {
    return (
        <div className='project'>
            <img src={props.imageUrl} alt={`${props.name} image`}/>
            <p>{props.name}</p>
            <Link to={`/projects/${props.id}`}>View more</Link>
        </div>
    )
}