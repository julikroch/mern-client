import { useContext, useEffect } from 'react'
import Project from './Project'
import ProjectContext from "../../context/projects/projectContext"

const ListProjects = () => {

    const projectsContext = useContext(ProjectContext)
    const { projects, getProjects } = projectsContext

    useEffect(() => {
        getProjects()
    }, [])

    if (projects.length === 0) return <p>No hay proyectos, por favor crea uno</p>

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
