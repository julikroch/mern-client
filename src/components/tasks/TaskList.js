import { Fragment, useContext } from 'react'
import ProjectContext from "../../context/projects/projectContext"
import Task from './Task'
import TaskContext from '../../context/tasks/taskContext'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const TaskList = () => {

    const projectsContext = useContext(ProjectContext)
    const { selectedProject, deleteProject } = projectsContext

    const tasksContext = useContext(TaskContext)
    const { projectTasks } = tasksContext

    if (!selectedProject) return <h2>Selecciona un proyecto</h2>

    const onClickDelete = () => deleteProject(selectedProject[0].id)

    return (
        <Fragment>
            <h2>Proyecto: {selectedProject[0].name}</h2>
            <ul className='listado-tareas'>
                {projectTasks.length === 0
                    ? <li>No tasks yet.</li>
                    :
                    <TransitionGroup>
                        {projectTasks.map((task) => (
                            <CSSTransition
                                key={task.id}
                                timeout={200}
                                classNames='tarea'
                            >
                                <Task
                                    task={task}
                                />
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
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
