// src/pages/User/User.jsx
import './User.css'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserProfile, updateUserName } from '../../redux/userSlice'
import { logout } from '../../redux/authSlice'
import { useNavigate } from 'react-router-dom'
import Account from '../../components/Account/Account'


function User() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { userName, firstName, lastName } = useSelector((state) => state.user)
    const { isLoggedIn } = useSelector((state) => state.auth)

    const [editing, setEditing] = useState(false)
    const [newUserName, setNewUserName] = useState('')

    useEffect(() => {
        if (!isLoggedIn) {
        navigate('/signin')
        } else {
        dispatch(fetchUserProfile())
        }
    }, [dispatch, isLoggedIn, navigate])

    const handleSave = () => {
        dispatch(updateUserName(newUserName))
        setEditing(false)
    }

    return (
        <main className="main bg-dark">
            <div className="header">
                {!editing ? (
                <>
                    <h1>
                    Welcome back<br />
                    {firstName} {lastName}!
                    </h1>
                    <button className="edit-button" onClick={() => setEditing(true)}>
                    Edit Name
                    </button>
                </>
                ) : (
                <div className="edit-form">
                    <h2>Edit your username</h2>
                    <div className="edit-input-group">
                        <input
                        type="text"
                        value={newUserName}
                        onChange={(e) => setNewUserName(e.target.value)}
                        placeholder={userName}
                        className="edit-input"
                        />
                    </div>
                    <div className="edit-actions">
                        <button className="btn btn-save" onClick={handleSave}>Save</button>
                        <button className="btn btn-cancel" onClick={() => setEditing(false)}>Cancel</button>
                    </div>
                </div>

                )}
            </div>
            <Account
                title="Argent Bank Checking (x8349)"
                amount="$2,082.79"
                description="Available Balance"
            />
            <Account
                title="Argent Bank Savings (x6712)"
                amount="$10,928.42"
                description="Available Balance"
            />
            <Account
                title="Argent Bank Credit Card (x8349)"
                amount="$184.30"
                description="Current Balance"
            />     
        </main>
  )
}

export default User