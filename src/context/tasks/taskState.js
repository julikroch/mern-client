import TaskContext from './taskContext';
import TaskReducer from './taskReducer';
import { useReducer } from 'react';

import {
    PROJECT_TASKS,
    ADD_TASK,
    VALIDATE_TASK,
    DELETE_TASK,
    TASK_STATE,
    ACTUAL_TASK, 
    UPDATE_TASK
} from '../../types';

const TaskState = props => {
    const initialState = {
        tasks: [
            { id: 1, name: 'Select platform', taskState: true, projectId: 1 },
            { id: 2, name: 'Select platform 2', taskState: false, projectId: 2 },
            { id: 3, name: 'Select platform 3', taskState: false, projectId: 3 },
            { id: 4, name: 'Select platform 4', taskState: true, projectId: 2 },
            { id: 5, name: 'Select platform', taskState: true, projectId: 3 },
            { id: 6, name: 'Select platform 2', taskState: false, projectId: 2 },
            { id: 7, name: 'Select platform 3', taskState: false, projectId: 1 },
        ],
        projectTasks: null,
        taskError: false,
        selectedTask: null
    }

    const [state, dispatch] = useReducer(TaskReducer, initialState)

    const getTasks = projectId => {
        dispatch({
            type: PROJECT_TASKS,
            payload: projectId
        })
    }

    const addTask = task => {
        dispatch({
            type: ADD_TASK,
            payload: task
        })
    }

    const validateTask = () => {
        dispatch({
            type: VALIDATE_TASK
        })
    }

    const deleteTask = id => {
        dispatch({
            type: DELETE_TASK,
            payload: id
        })
    }

    const taskStateFn = task => {
        dispatch({
            type: TASK_STATE,
            payload: task
        })
    }

    const saveActualTask = task => {
        dispatch({
            type: ACTUAL_TASK,
            payload: task
        })
    }

    const updateTask = task => {
        dispatch({
            type: UPDATE_TASK,
            payload: task
        })
    }

    return (
        <TaskContext.Provider
            value={{
                tasks: state.tasks,
                projectTasks: state.projectTasks,
                taskError: state.taskError,
                selectedTask: state.selectedTask,
                getTasks,
                addTask,
                validateTask,
                deleteTask,
                taskStateFn,
                saveActualTask,
                updateTask
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskState