import React from 'react'
import Project from './Project'

const ListProjects = () => {

    const projects = [
        { name: 'tienda virtual' },
        { name: 'tienda virtual 2' },
        { name: 'tienda virtual 3' }
    ]

    return (
        <ul className='listado-proyectos'>
            {projects.map((project) => (
                <Project project={project} />
            ))}
        </ul>
    )
}

export default ListProjects
