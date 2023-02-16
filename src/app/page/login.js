import React from 'react'
import { Snackbar } from '@mui/material'
import { VscChromeClose } from "react-icons/vsc";
import { isEmpty } from 'lodash';
import { loginThunk } from '../slice/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Paths } from '../route/paths';

function Login() {
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [successLogin, setSuccessLogin] = React.useState(false)
    const [errorLogin, setErrorLogin] = React.useState(false)
    const dispatch = useDispatch()
    const authState = useSelector(state => state.auth)
    const navigate = useNavigate()

    function loginHandler(e) {
        e.preventDefault()
        if (authState.loading) {
            return
        }
        dispatch(loginThunk({ username, password }))
    }
    React.useEffect(() => {
        if (authState.data) {
            setSuccessLogin(true)
            navigate(Paths.HOME)
        }
        if (authState.error) {
            setErrorLogin(true)
        }
    }, [authState.data, authState.error])

    return (
        <div className='flex h-screen w-screen justify-center items-center bg-primary_white flex-col'>
            {/* success login */}
            <Snackbar
                open={successLogin}
                autoHideDuration={6000}
                onClose={() => setSuccessLogin(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                >
                <div className='bg-green-500 font-primary px-10 py-3 flex items-center gap-10 text-white p-2 rounded-md'>
                    <div>
                        Login success
                    </div>
                    <div className='cursor-pointer' onClick={() => setSuccessLogin(false)}>
                        <VscChromeClose />
                    </div>
                </div>
            </Snackbar>
            {/* error snack bar */}
            <Snackbar
                open={errorLogin}
                autoHideDuration={6000}
                onClose={() => setErrorLogin(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                >
                <div className='bg-red-500 font-primary px-10 py-3 flex items-center gap-10 text-white p-2 rounded-md'>
                    <div>
                        Please check your username and password
                    </div>
                    <div className='cursor-pointer' onClick={() => setErrorLogin(false)}>
                        <VscChromeClose />
                    </div>
                </div>
            </Snackbar>
            {/* loder spinner */}
            <div className={`flex justify-center items-center mb-4 ${authState.loading ? "visible": "invisible"}`}>
                <div className='animate-spin rounded-full h-10 w-10 border-b-2 border-primary_black'>
            </div>
            </div>            
            {/* login form */}
            <form className='flex font-primary flex-col w-1/3 bg-white rounded-md shadow-lg p-10' onSubmit={loginHandler}>
                <h1 className='text-2xl font-bold text-primary_black '>Login</h1>
                <input autoComplete='off' type='text' name='username' className='border-2 border-primary_black rounded-md p-2 mt-5' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
                <input autoComplete='off' type='password' name='password' className='border-2 border-primary_black rounded-md p-2 mt-5' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button disabled={isEmpty(username) && isEmpty(password)} className='bg-primary_black text-white rounded-md p-2 mt-5'>Login</button>
            </form>
        </div> 
    )
}

export default Login