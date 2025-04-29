// src/pages/SignIn/SignIn.jsx
import './SignIn.css'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../../redux/authSlice'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

function SignIn() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { isLoggedIn, loading, error } = useSelector((state) => state.auth)
    const [form, setForm] = useState({ email: '', password: '' })

    useEffect(() => {
        if (isLoggedIn) {
        navigate('/user')
        }
    }, [isLoggedIn, navigate])

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(loginUser(form))
    }

    return (
        <>
            <main className="main bg-dark">
            <section className="sign-in-content">
                <FontAwesomeIcon icon={faUserCircle} className="sign-in-icon" />
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                <div className="input-wrapper">
                    <label htmlFor="email">Email</label>
                    <input
                    type="text"
                    id="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input
                    type="password"
                    id="password"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    required
                    />
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me" />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                {error && <p className="error">{error}</p>}
                <button className="sign-in-button" type="submit" disabled={loading}>
                    {loading ? 'Loading...' : 'Sign In'}
                </button>
                </form>
            </section>
            </main>
        </>
    )
}

export default SignIn
