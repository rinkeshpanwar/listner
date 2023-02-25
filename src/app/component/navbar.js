import React from 'react'
import { Button, Drawer, Snackbar, TextField } from '@mui/material'
import { Outlet, useNavigate } from 'react-router-dom'
import { Paths } from '../route/paths'
import RichTextEditor from './richTextEditor'
import { useDispatch, useSelector } from 'react-redux'
import { createQuestionThunk } from '../slice/questionSlice'
import { VscChromeClose } from "react-icons/vsc"
import {AiOutlineLogout} from 'react-icons/ai'
import { authSlice } from '../slice/authSlice'
import {IoMdSettings} from 'react-icons/io'
import {ImYoutube2} from 'react-icons/im'
import {AiOutlineClose} from 'react-icons/ai'

function Navbar() {
    const [openDrawer, setOpenDrawer] = React.useState(false)
    const [question, setQuestion] = React.useState('')
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(false)
    const [success, setSuccess] = React.useState(false)
    const [extraDrawer, setExtraDrawer] = React.useState(false)
    const dispatch = useDispatch()
    const authState = useSelector(state => state.auth)
    const navigate = useNavigate()

    React.useEffect(() => {
        if (!authState.data) {
            navigate(Paths.LOGIN)
        }
    })
    async function submitHandler(html, text) {
        if (loading) {
            return
        }
        setLoading(true)
        setError(false)
        setSuccess(false)
        const data = {
            title: question,
            description: html,
            description_text_tag: text.replace( /\n/g, " " ).split( " " )
        }
        const response = await dispatch(createQuestionThunk(data))
        if (response.meta.requestStatus === 'fulfilled') {
            setSuccess(true)
            setOpenDrawer(false)
        }
        if (response.meta.requestStatus === 'rejected') {
            setError(true)
        }
        setLoading(false)
    }
    React.useEffect(() => {
        setQuestion('')
    }, [openDrawer])

    return (
    <>
    <Snackbar
        open={success}
        autoHideDuration={6000}
        onClose={() => setSuccess(false)}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        >
        <div className='bg-green-500 font-primary px-10 py-3 flex items-center gap-10 text-white p-2 rounded-md'>
            <div>
                Succesfully posted question
            </div>
            <div className='cursor-pointer' onClick={() => setSuccess(false)}>
                <VscChromeClose />
            </div>
        </div>
    </Snackbar>
        {/* error snack bar */}
        <Snackbar
            open={error}
            autoHideDuration={6000}
            onClose={() => setError(false)}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            >
            <div className='bg-red-500 font-primary px-10 py-3 flex items-center gap-10 text-white p-2 rounded-md'>
                <div>
                    There was an error posting your question please try again later...
                </div>
                <div className='cursor-pointer' onClick={() => setError(false)}>
                    <VscChromeClose />
                </div>
            </div>
            </Snackbar>
        <div className='w-full shadow-md h-14 flex justify-between pl-16 pr-14 items-center'>
            <button className='text-purple-800 font-primary font-semibold tracking-wider' onClick={() => navigate(Paths.HOME)}>
                Listner
            </button>
            <div className='inline-flex items-center'>
                <Button
                    onClick={() => setOpenDrawer(!openDrawer)}
                    className='h-fit text-white py-2 px-4 hover:bg-blue-700 font-primary bg-blue-600'>
                    Ask a question
                </Button>
                <button className='pl-4 pr-3' onClick={() => dispatch(authSlice.actions.logout())}>
                    <AiOutlineLogout className='text-red-500' size={23} />
                </button>
                <button className='px-4 outline-none border-none' onClick={() => setExtraDrawer(!extraDrawer)}>
                    <IoMdSettings className='text-purple-800 animate-[spin_3s_linear_infinite]' size={23} />
                </button>
            </div>
            <Drawer anchor='left' open={openDrawer} onClose={() => setOpenDrawer(false)}>
                <div className='w-screen lg:w-[calc(100vw-20vw)] h-screen space-y-6 px-9 mt-10'>
                    <div className='font-primary capitalize font-semibold text-primary_black'>
                        Please be specific and clear with your question. Don't forget to check for duplicate questions before posting.
                    </div>
                    <input spellCheck='false' autoCorrect='false' className='w-full h-12 outline-none px-2 border rounded-sm focus:shadow-sm transition-all duration-200 border-indigo-500' type="text" max={40} placeholder='Enter your question here' value={question} onChange={(e) => setQuestion(e.target.value)} />
                    <div>
                        <RichTextEditor submitHandler={submitHandler} closeHandler={() => setOpenDrawer(false)} />
                    </div>
                </div>
            </Drawer>
            {/* right side drawer */}
            <Drawer anchor='right' open={extraDrawer} onClose={() => setExtraDrawer(false)}>
                <div className='w-screen lg:w-[calc(100vw-70vw)] h-screen space-y-6 mt-10'>
                    <div className='flex justify-end'>
                        <AiOutlineClose onClick={() => setExtraDrawer(false)}/>
                    </div>
                    <div className='hover:bg-violet-500 flex gap-3 items-center cursor-pointer hover:text-white hover:border-l-2 border-l-violet-800'>
                        <ImYoutube2 size={23}/> <span>Youtube To Mp3</span>
                    </div>
                    <div className='hover:bg-red-200 hover:text-white'>
                        <AiOutlineLogout size={23} className='text-red-500'/>
                        <span>Logout</span>
                    </div>
                </div>
            </Drawer>
        </div>
        <Outlet/>
    </>
    )
}

export default Navbar