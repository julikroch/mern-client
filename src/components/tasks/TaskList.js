import { Fragment, useContext } from 'react'
import ProjectContext from "../../context/projects/projectContext"
import Task from './Task'

const TaskList = () => {

    const projectsContext = useContext(ProjectContext)
    const { selectedProject, deleteProject } = projectsContext

    const tasks = []

    if (!selectedProject) return <h2>Selecciona un proyecto</h2>

    const onClickDelete = () => deleteProject(selectedProject[0].id)

    return (
        <Fragment>
            <h2>Proyecto: {selectedProject[0].name}</h2>
            <ul className='listado-tareas'>
                {tasks.length === 0
                    ? <li>No tasks yet</li>
                    : tasks.map((task) => (
                        <Task
                            key={task.name}
                            task={task}
                        />
                    ))
                }
            </ul>

            <button
                type='button'
                className='btn btn-eliminar'
                onClick={onClickDelete}
            >Delete project &times;</button>
        </Fragment>
    )
}

export default TaskList
