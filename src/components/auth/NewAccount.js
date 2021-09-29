import { useState } from 'react';
import { Link } from 'react-router-dom'

const NewAccount = () => {

    //Login state
    const [user, saveUser] = useState({
        name: '',
        email: '',
        password: '',
        confirm: ''
    })

    const { name, email, password, confirm } = user

    const handleChange = e => {
        saveUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault()

    }

    return (
        <div className='form-usuario'>
            <div className='contenedor-form sombra-dark'>
                <h1>Create account</h1>
                <form
                    onSubmit={onSubmit}
                >
                    <div className='campo-form'>
                        <label htmlFor='name'>Name</label>
                        <input
                            type='text'
                            id='name'
                            name='name'
                            placeholder='Your name...'
                            value={name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='campo-form'>
                        <label htmlFor='email'>email</label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            placeholder='Your email...'
                            value={email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='campo-form'>
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            id='password'
                            name='password'
                            placeholder='Your password...'
                            value={password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='campo-form'>
                        <label htmlFor='confirm'>Confirm Password</label>
                        <input
                            type='password'
                            id='confirm'
                            name='confirm'
                            placeholder='Repeat your password...'
                            value={confirm}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='campo-form'>
                        <input
                            type='submit'
                            className='btn btn-primario btn-block'
                            value='Register'
                        />
                    </div>
                </form>
                <Link
                    to={'/'}
                    className='enlace-cuenta'
                > Log in </Link>
            </div>
        </div>
    );
}

export default NewAccount;