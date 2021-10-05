import {
    PROJECT_FORM,
    GET_PROJECTS,
    ADD_PROJECT,
    VALIDATE_FORM,
    SELECTED_PROJECT,
    DELETE_PROJECT
} from '../../types'

export default (state, action) => {
    switch (action.type) {
        case PROJECT_FORM:
            return {
                ...state,
                newProject: true
            }
        case GET_PROJECTS:
            return {
                ...state,
                projects: action.payload
            }
        case ADD_PROJECT:
            return {
                ...state,
                projects: [...state.projects, action.payload],
                newProject: false,
                formError: false
            }
        case VALIDATE_FORM:
            return {
                ...state,
                formError: true
            }
        case SELECTED_PROJECT:
            return {
                ...state,
                selectedProject: state.projects.filter(project => project.id === action.payload)
            }
        case DELETE_PROJECT:
            return {
                ...state,
                projects: state.projects.filter(project => project.id !== action.payload),
                selectedProject: null
            }
        default:
            return state
    }
}