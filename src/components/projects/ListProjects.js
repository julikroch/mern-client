import { useContext, useEffect } from 'react'
import Project from './Project'
import ProjectContext from "../../context/projects/projectContext"
import { TransitionGroup, CSSTransition } from 'react-transition-group'


const ListProjects = () => {

    const projectsContext = useContext(ProjectContext)
    const { projects, getProjects } = projectsContext

    useEffect(() => {
        getProjects()
    }, [])

    if (projects.length === 0) return <p>No hay proyectos, por favor crea uno</p>

    return (
        <ul className='listado-proyectos'>
            <TransitionGroup>
                {projects.map((project) => (
                    <CSSTransition
                        key={project.id}
                        timeout={200}
                        classNames='proyecto'
                    >
                        <Project
                            project={project}
                        />
                    </CSSTransition>
                ))}
            </TransitionGroup>

        </ul>
    )
}

export default ListProjects
