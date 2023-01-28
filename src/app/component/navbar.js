import React from 'react'
import { Button, Drawer } from '@mui/material'
import { Outlet } from 'react-router-dom'

function Navbar() {
    const [openDrawer, setOpenDrawer] = React.useState(false)
    return (
    <>
        <div className='w-full shadow-md h-14 flex justify-between pl-16 pr-14 items-center'>
            <div>
                Listner
            </div>
            <Button
                onClick={() => setOpenDrawer(!openDrawer)}
                className='h-fit text-white py-2 px-4 hover:bg-blue-700 font-primary bg-blue-600'>
                Ask a question
            </Button>
            <Drawer anchor='left' open={openDrawer} onClose={() => setOpenDrawer(false)}>
                <div className='w-screen h-screen'>
                    <div>
                        <Button onClick={() => setOpenDrawer(false)}>
                            Close
                        </Button>
                    </div>
                </div>
            </Drawer>
        </div>
        <Outlet/>
    </>
    )
}

export default Navbar