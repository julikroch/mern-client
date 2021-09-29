import { Fragment, useState } from "react"

const NewProject = () => {

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
    }

    return (
        <Fragment>
            <button
                type='button'
                className='btn btn-block btn-primario'
            >New project</button>

            <form
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
            </form>
        </Fragment>

    )
}

export default NewProject
