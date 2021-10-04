import { useContext } from 'react'
import ProjectContext from "../../context/projects/projectContext"
import TaskContext from '../../context/tasks/taskContext'

const Project = ({ project }) => {

    const projectsContext = useContext(ProjectContext)
    const { selectProjectFn } = projectsContext

    const tasksContext = useContext(TaskContext)
    const { getTasks } = tasksContext

    const selectProject = id => {
        selectProjectFn(id)
        getTasks(id)
    }

    return (
        <li>
            <button
                type='button'
                className='btn btn-blank'
                onClick={() => selectProject(project.id)}
            >{project.name}</button>
        </li>
    )
}

export default Project
