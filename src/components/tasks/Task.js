import { useContext } from 'react'
import ProjectContext from "../../context/projects/projectContext"
import TaskContext from '../../context/tasks/taskContext'

const Task = ({ task }) => {

    const tasksContext = useContext(TaskContext)
    const { deleteTask, getTasks } = tasksContext

    const projectsContext = useContext(ProjectContext)
    const { selectedProject } = projectsContext

    const { name, taskState } = task

    const btnDeleteTask = id => {
        deleteTask(id)
        getTasks(selectedProject[0].id)
    }

    return (
        <li className='tarea sombra'>
            <p>{name}</p>

            <div className="estado">
                {taskState
                    ?
                    <button
                        type='button'
                        className='completo'
                    >Complete</button>
                    :
                    <button
                        type='button'
                        className='incompleto'
                    >Incomplete</button>
                }
            </div>

            <div className="acciones">
                <button
                    type='button'
                    className='btn btn-primario'
                >Edit</button>

                <button
                    type='button'
                    className='btn btn-secundario'
                    onClick={() => btnDeleteTask(task.id)}
                >Delete</button>
            </div>
        </li>
    )
}

export default Task
