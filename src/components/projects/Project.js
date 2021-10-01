import { useContext } from 'react'
import ProjectContext from "../../context/projects/projectContext"

const Project = ({ project }) => {

    const projectsContext = useContext(ProjectContext)
    const { selectProjectFn } = projectsContext

    return (
        <li>
            <button
                type='button'
                className='btn btn-blank'
                onClick={() => selectProjectFn(project.id)}
            >{project.name}</button>
        </li>
    )
}

export default Project
