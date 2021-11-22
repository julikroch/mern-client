import { useState, useContext } from 'react';
import { Link } from 'react-router-dom'
import AlertContext from '../../context/alerts/alertContext';

const NewAccount = () => {

    const alertContext = useContext(AlertContext)
    const { alert, showAlert } = alertContext

    //Login state
    const [user, saveUser] = useState({
        name: '',
        email: '',
        password: '',
        confirm: ''
    })

    const { name, email, password, confirm } = user

    const fieldArray = [name, email, password, confirm]

    const handleChange = e => {
        saveUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault()
        if (fieldArray.includes('')) {
            showAlert('Todos los campos son obligatorios', 'alerta-error')
            return
        }

        if (password.length < 6) {
            showAlert('La contraseña debe ser de al menos 6 caracteres', 'alerta-error')
            return
        }

        if (password !== confirm) {
            showAlert('Las contraseñas no coinciden', 'alerta-error')
            return
        }
    }

    return (
        <div className='form-usuario'>
            {alert ? <div className={`alerta ${alert.category}`}>{alert.msg}</div> : null}
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
                        <label htmlFor='email'>Email</label>
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