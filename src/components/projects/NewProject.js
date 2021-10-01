import { Fragment, useContext, useState } from "react"
import ProjectContext from "../../context/projects/projectContext"

const NewProject = () => {

    const projectsContext = useContext(ProjectContext)
    const { newProject, showForm, addProject, formError, showError } = projectsContext

    const [project, saveProject] = useState({
        name: ''
    })

    const { name } = project

    const onChangeProject = e => {
        saveProject({
            ...project,
            [e.target.name]: e.target.value
        })
    }

    const submitProject = e => {
        e.preventDefault()
        if (name === '') {
            showError()
            return
        }

        addProject(project)
        saveProject({
            name: ''
        })
    }

    const onClickForm = () => showForm()

    return (
        <Fragment>
            <button
                type='button'
                className='btn btn-block btn-primario'
                onClick={onClickForm}
            >New project</button>

            {
                newProject ?
                    (<form
                        className='formulario-nuevo-proyecto'
                        onSubmit={submitProject}
                    >
                        <input
                            type="text"
                            className='input-text'
                            placeholder='Project name'
                            name='name'
                            value={name}
                            onChange={onChangeProject}
                        />

                        <input
                            type="submit"
                            className='btn btn-primario btn-block'
                            value='Add project'
                        />
                    </form>)
                    :
                    null
            }
            {formError ? <p className='mensaje error'>El nombre del proyecto es obligatorio</p> : null}
        </Fragment>

    )
}

export default NewProject
