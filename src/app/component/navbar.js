import React from 'react'
import { Button, Drawer, TextField } from '@mui/material'
import { Outlet, useNavigate } from 'react-router-dom'
import { Paths } from '../route/paths'
import RichTextEditor from './richTextEditor'

function Navbar() {
    const [openDrawer, setOpenDrawer] = React.useState(false)
    const [question, setQuestion] = React.useState('')
    const navigate = useNavigate()
    function submitHandler(html) {
        console.log(html)
    }
    React.useEffect(() => {
        setQuestion('')
    }, [openDrawer])

    return (
    <>
        <div className='w-full shadow-md h-14 flex justify-between pl-16 pr-14 items-center'>
            <button className='text-purple-800 font-primary font-semibold tracking-wider' onClick={() => navigate(Paths.HOME)}>
                Listner
            </button>
            <Button
                onClick={() => setOpenDrawer(!openDrawer)}
                className='h-fit text-white py-2 px-4 hover:bg-blue-700 font-primary bg-blue-600'>
                Ask a question
            </Button>
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
        </div>
        <Outlet/>
    </>
    )
}

export default Navbar