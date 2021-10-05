import { useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import ProjectContext from './projectContext';
import ProjectReducer from './projectReducer';


import {
    PROJECT_FORM,
    GET_PROJECTS,
    ADD_PROJECT,
    VALIDATE_FORM,
    SELECTED_PROJECT,
    DELETE_PROJECT
} from '../../types';

const ProjectState = props => {

    const projects = [
        { id: 1, name: 'tienda virtual' },
        { id: 2, name: 'tienda virtual 2' },
        { id: 3, name: 'tienda virtual 3' }
    ]

    const initialState = {
        projects: [],
        newProject: false,
        formError: false,
        selectedProject: null
    }

    const [state, dispatch] = useReducer(ProjectReducer, initialState)

    const showForm = () => {
        dispatch({
            type: PROJECT_FORM
        })
    }

    const getProjects = () => {
        dispatch({
            type: GET_PROJECTS,
            payload: projects
        })
    }

    const addProject = project => {
        project.id = uuid()

        dispatch({
            type: ADD_PROJECT,
            payload: project
        })
    }

    const showError = () => {
        dispatch({
            type: VALIDATE_FORM
        })
    }

    const selectProjectFn = projectId => {
        dispatch({
            type: SELECTED_PROJECT,
            payload: projectId
        })
    }

    const deleteProject = projectId => {
        dispatch({
            type: DELETE_PROJECT,
            payload: projectId
        })
    }

    return (
        <ProjectContext.Provider
            value={{
                projects: state.projects,
                newProject: state.newProject,
                formError: state.formError,
                selectedProject: state.selectedProject,
                showForm,
                getProjects,
                addProject,
                showError,
                selectProjectFn,
                deleteProject
            }}
        >
            {props.children}
        </ProjectContext.Provider>
    )
}

export default ProjectState