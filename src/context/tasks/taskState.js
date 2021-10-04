import TaskContext from "./taskContext";
import TaskReducer from "./taskReducer";
import { useReducer } from "react";

import { 
    PROJECT_TASKS 
} from "../../types";

const TaskState = props => {
    const initialState = {
        tasks: [
            { name: 'Select platform', taskState: true, projectId: 1 },
            { name: 'Select platform 2', taskState: false, projectId: 2 },
            { name: 'Select platform 3', taskState: false, projectId: 3 },
            { name: 'Select platform 4', taskState: true, projectId: 4 },
            { name: 'Select platform', taskState: true, projectId: 3 },
            { name: 'Select platform 2', taskState: false, projectId: 4 },
            { name: 'Select platform 3', taskState: false, projectId: 5 },
        ],
        projectTasks: null
    }

    const [state, dispatch] = useReducer(TaskReducer, initialState)

    const getTasks = projectId => {
        dispatch({
            type: PROJECT_TASKS,
            payload: projectId
        })
    }

    return (
        <TaskContext.Provider
            value={{
                tasks: state.tasks,
                projectTasks: state.projectTasks,
                getTasks
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskState