import { useReducer } from "react";
import ProjectContext from "./projectContext";
import ProjectReducer from "./projectReducer";
import {
    PROJECT_FORM,
    GET_PROJECTS
} from "../../types";


const projects = [
    { id: 1, name: 'tienda virtual' },
    { id: 2, name: 'tienda virtual 2' },
    { id: 3, name: 'tienda virtual 3' }
]

const ProjectState = props => {
    const initialState = {
        projects: [],
        newProject: false
    }

    const [state, dispatch] = useReducer(ProjectReducer, initialState)

    const showForm = () => {
        dispatch({
            type: PROJECT_FORM
        })
    }

    const getProjects = (projects) => {
        dispatch({
            type: GET_PROJECTS,
            payload: projects
        })
    }

    return (
        <ProjectContext.Provider
            value={{
                projects: state.projects,
                newProject: state.newProject,
                showForm,
                getProjects
            }}
        >
            {props.children}
        </ProjectContext.Provider>
    )
}

export default ProjectState