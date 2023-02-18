import React from 'react'
import { Button } from '@mui/material'
import { FaBold, FaItalic, FaUnderline } from 'react-icons/fa'
import {BsListUl} from 'react-icons/bs'
import {AiOutlineOrderedList} from 'react-icons/ai'
import {BsTextIndentLeft} from 'react-icons/bs'
import proptype from 'prop-types'

function RichTextEditor(props) {
    const [boldActive, setBoldActive] = React.useState(false);
    const [italicActive, setItalicActive] = React.useState(false);
    const [underlineActive, setUnderlineActive] = React.useState(false);
    const [listActive, setListActive] = React.useState(false);
    const [orderedListActive, setOrderedListActive] = React.useState(false);
    const editorRef = React.useRef(null);

    function checkAndUpdateStates() {
        const boldState = document.queryCommandState('bold');
        const italicState = document.queryCommandState('italic');
        const underlineState = document.queryCommandState('underline');
        const listState = document.queryCommandState('insertUnorderedList');
        const orderedListState = document.queryCommandState('insertOrderedList');
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

    function submitHandler() {
        props.submitHandler(editorRef.current.innerHTML, editorRef.current.innerText);
    }

    React.useEffect(() => {
        ['selectionchange','keyup', 'mouseup'].forEach((e) => editorRef.current.addEventListener(e, checkAndUpdateStates));
    },[])

    return (
        <div className='w-full'>
            <div ref={editorRef} className='list-disc font-primary text-sm w-full min-h-[300px] overflow-auto max-h-96 bg-gray-200 rounded-md outline-none px-5 py-3' spellCheck='false' autoCorrect='false' contentEditable={true} >
            </div>
            <div className='mt-3 flex justify-between font-primary items-center gap-24'>
                <div className='flex gap-1 flex-shrink'>    
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
                <div className='space-x-2'>
                    <Button onClick={() => editorRef.current.innerHTML=""} className='transition-all  bg-slate-50 font-primary bg-opacity-80 font-medium rounded-full px-7 shadow-md inline-flex items-center'>Reset</Button>
                    <Button onClick={submitHandler} className='transition-all  bg-violet-600 font-primary hover:bg-violet-600 hover:text-white text-white font-medium rounded-full px-7 shadow-md inline-flex items-center'>Save</Button>
                    <Button onClick={props.closeHandler} className='transition-all  bg-red-600 font-primary hover:bg-red-600 hover:text-white text-white font-medium rounded-full px-7 shadow-md inline-flex items-center'>Close</Button>
                </div>
            </div>
        </div>
    )
}

RichTextEditor.propTypes = {
    submitHandler: proptype.func.isRequired
}
export default RichTextEditor