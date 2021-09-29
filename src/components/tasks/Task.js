import React from 'react'

const Task = ({ task }) => {

    const { name, taskState } = task

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
                >Delete</button>
            </div>
        </li>
    )
}

export default Task
