import { useContext, useState, useEffect } from 'react'
import ProjectContext from "../../context/projects/projectContext"
import TaskContext from '../../context/tasks/taskContext'

const TaskForm = () => {

    const projectsContext = useContext(ProjectContext)
    const { selectedProject } = projectsContext

    const tasksContext = useContext(TaskContext)
    const { selectedTask, taskError, addTask, validateTask, getTasks, updateTask } = tasksContext

    const [task, setTask] = useState({
        name: ''
    })

    const { name } = task

    const handleChange = e => {
        setTask({
            ...task,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault()

        if (name.trim() === '') {
            validateTask()
            return
        }

        if (selectedTask === null) {
            task.projectId = selectedProject[0].id
            task.state = false
            addTask(task)
        } else {
            updateTask(task)
        }

        getTasks(selectedProject[0].id)

        setTask({ name: '' })
    }

    useEffect(() => {
        if (selectedTask !== null) {
            setTask(selectedTask)
        }
        else {
            setTask({
                name: ''
            })
        }
    }, [selectedTask])

    if (!selectedProject) return null

    return (
        <div className="formulario">
            <form
                onSubmit={onSubmit}
            >
                <div className="contenedor-input">
                    <input
                        type="text"
                        className='input-text'
                        placeholder='Task name...'
                        name='name'
                        value={name}
                        onChange={handleChange}
                    />
                </div>
                <div className="contenedor-input">
                    <input
                        type="submit"
                        className='btn btn-primario btn-submit btn-block'
                        value={selectedTask ? 'Edit task' : 'Add task'}
                    />
                </div>
            </form>
            {taskError ? <p className='mensaje'>The task name must be completed </p> : null}
        </div>
    )
}

export default TaskForm
