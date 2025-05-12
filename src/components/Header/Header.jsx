import React from "react";
import { NavLink, useNavigate } from 'react-router-dom'
import logo from "../../assets/img/argentBankLogo.webp";
import "./Header.css"; 
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/authSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'



function Header() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { isLoggedIn } = useSelector((state) => state.auth)
    const { firstName } = useSelector((state) => state.user)
    const { userName } = useSelector((state) => state.user)


    const handleLogout = () => {
        dispatch(logout())
        navigate('/')
    }

    return (
        <nav className="main-nav">
        <NavLink className="main-nav-logo" to="/">
            <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
            />
            <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
        <div>
            {isLoggedIn ? (
            <>
                <NavLink className="main-nav-item" to="/user">
                    <FontAwesomeIcon icon={faUserCircle} /> {userName}
                </NavLink>
                <NavLink className="main-nav-item" to="/" onClick={handleLogout}>
                    <FontAwesomeIcon icon={faSignOutAlt} /> Sign Out
                </NavLink>
            </>
            ) : (
            <NavLink className="main-nav-item" to="/signin">
                <FontAwesomeIcon icon={faUserCircle} /> Sign In
            </NavLink>
            )}
        </div>
        </nav>
    )
}

export default Header
