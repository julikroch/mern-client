import React, { Fragment } from 'react'
import Task from './Task'

const TaskList = () => {

    const tasks = [
        { name: 'Select platform', taskState: true },
        { name: 'Select platform 2', taskState: false },
        { name: 'Select platform 3', taskState: false },
        { name: 'Select platform 4', taskState: true }
    ]

    return (
        <Fragment>
            <h2>Project: Tienda virtual</h2>
            <ul className='listado-tareas'>
                {tasks.length === 0
                    ? <li>No tasks yet</li>
                    : tasks.map((task) => (
                        <Task
                            task={task}
                        />
                    ))
                }
            </ul>

            <button
                type='button'
                className='btn btn-eliminar'
            >Delete project &times;</button>
        </Fragment>
    )
}

export default TaskList
