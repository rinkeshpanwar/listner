import React from 'react'
import { Button } from '@mui/material'
import { FaBold, FaItalic, FaUnderline } from 'react-icons/fa'
import {BsListUl} from 'react-icons/bs'
import {AiOutlineOrderedList} from 'react-icons/ai'
import {BsTextIndentLeft} from 'react-icons/bs'

function RichTextEditor() {
    const [boldActive, setBoldActive] = React.useState(false);
    const [italicActive, setItalicActive] = React.useState(false);
    const [underlineActive, setUnderlineActive] = React.useState(false);
    const [listActive, setListActive] = React.useState(false);
    const [orderedListActive, setOrderedListActive] = React.useState(false);
    const editorRef = React.useRef(null);

    function checkAndUpdateStates() {
        console.log("Checking");
        const boldState = document.queryCommandState('bold');
        const italicState = document.queryCommandState('italic');
        const underlineState = document.queryCommandState('underline');
        const listState = document.queryCommandState('insertUnorderedList');
        const orderedListState = document.queryCommandState('insertOrderedList');
        const indentState = document.queryCommandState('indent');
        setListActive(listState);
        setUnderlineActive(underlineState);
        setItalicActive(italicState);
        setBoldActive(boldState);
        setOrderedListActive(orderedListState);
        editorRef.current.focus();
    }
    function exeCommand(command, ui, value) {
        document.execCommand(command, ui, value);
        checkAndUpdateStates();
    }

    React.useEffect(() => {
        ['selectionchange','keyup', 'mouseup'].forEach((e) => window.addEventListener(e, checkAndUpdateStates));
        return () => {
            ['selectionchange','keyup', 'mouseup'].forEach((e) => window.removeEventListener(e, checkAndUpdateStates));
        }
    },[])
    return (
        <div className='w-full'>
            <h1>Rich Text Editor</h1>
            <div ref={editorRef} className='list-disc font-primary text-sm w-full min-h-[300px] overflow-auto max-h-96 bg-gray-200 rounded-md outline-none px-5 py-3' autoCorrect='false' contentEditable={true} >
            </div>
            <div className='mt-3 flex justify-between items-center ml-5'>
                <div className='flex gap-0-5'>    
                    <Button onClick={() =>{
                        exeCommand('bold', false, null);
                    }} className={` ${boldActive?"bg-slate-300 text-neutral-700" : "bg-slate-50 text-neutral-600"} hover:bg-slate-200 outline-none border-none text-lg py-1  shadow-none `} >
                        <FaBold />
                    </Button>
                    
                    <Button onClick={() =>{
                        exeCommand('italic', false, null);
                    }} className={` ${italicActive? "bg-slate-300 text-neutral-700" : "bg-slate-50 text-neutral-600"} hover:bg-slate-200 outline-none border-none text-lg py-1 shadow-none `} >
                        <FaItalic />
                    </Button>
                    
                    <Button onClick={() =>{
                        exeCommand('underline', false, null);
                    }} className={` ${underlineActive?"bg-slate-300 text-neutral-700" : "bg-slate-50 text-neutral-600"} hover:bg-slate-200 outline-none border-none text-lg py-1 shadow-none `} >
                        <FaUnderline />
                    </Button>
                    
                    <Button onClick={() =>{
                        exeCommand('insertUnorderedList', false, null);
                    }} className={` ${listActive?"bg-slate-300 text-neutral-700" : "bg-slate-50 text-neutral-600"} hover:bg-slate-200 outline-none border-none text-lg py-1 shadow-none `} >
                        <BsListUl />
                    </Button>
                    <Button onClick={() =>{
                        exeCommand('insertOrderedList', false, null);
                    }} className={` ${orderedListActive?"bg-slate-300 text-neutral-700" : "bg-slate-50 text-neutral-600"} hover:bg-slate-200 outline-none border-none text-lg py-1  shadow-none `} >
                        <AiOutlineOrderedList />
                    </Button>
                    <Button onClick={() =>{
                        exeCommand('indent', false, null);
                    }}  className={`bg-slate-50 text-neutral-700 hover:bg-slate-200 outline-none border-none text-lg py-4  shadow-none `} >
                        <BsTextIndentLeft />
                    </Button>
                </div>
                <div className='space-x-3 font-primary'>
                    <Button>Reset</Button>
                    <Button>Save</Button>
                </div>
            </div>
        </div>
    )
}

export default RichTextEditor