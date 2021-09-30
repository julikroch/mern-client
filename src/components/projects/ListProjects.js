import { useContext } from 'react'
import Project from './Project'
import ProjectContext from "../../context/projects/projectContext"

const ListProjects = () => {

    const projectsContext = useContext(ProjectContext)
    const { projects } = projectsContext

    if (projects.length === 0) return null

    return (
        <ul className='listado-proyectos'>
            {projects.map((project) => (
                <Project
                    key={project.id}
                    project={project}
                />
            ))}
        </ul>
    )
}

export default ListProjects
