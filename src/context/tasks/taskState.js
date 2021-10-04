import TaskContext from "./taskContext";
import TaskReducer from "./taskReducer";
import { useReducer } from "react";

import {
    PROJECT_TASKS,
    ADD_TASK,
    VALIDATE_TASK,
    DELETE_TASK
} from "../../types";

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
        taskError: false
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

    return (
        <TaskContext.Provider
            value={{
                tasks: state.tasks,
                projectTasks: state.projectTasks,
                taskError: state.taskError,
                getTasks,
                addTask,
                validateTask,
                deleteTask
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskState