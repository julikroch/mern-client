import { useContext } from 'react'
import ProjectContext from "../../context/projects/projectContext"
import TaskContext from '../../context/tasks/taskContext'

const Task = ({ task }) => {

    const tasksContext = useContext(TaskContext)
    const { deleteTask, getTasks, taskStateFn, saveActualTask } = tasksContext

    const projectsContext = useContext(ProjectContext)
    const { selectedProject } = projectsContext

    const { name, taskState } = task

    const btnDeleteTask = id => {
        deleteTask(id)
        getTasks(selectedProject[0].id)
    }

    const modifyTaskState = task => {
        task.taskState = !task.taskState
        taskStateFn(task)
    }

    const selectTask = task => {
        saveActualTask(task)
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
                        onClick={() => modifyTaskState(task)}
                    >Complete</button>
                    :
                    <button
                        type='button'
                        className='incompleto'
                        onClick={() => modifyTaskState(task)}
                    >Incomplete</button>
                }
            </div>

            <div className="acciones">
                <button
                    type='button'
                    className='btn btn-primario'
                    onClick={() => selectTask(task)}
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
