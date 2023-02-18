import React from 'react';
import { Button, Snackbar } from '@mui/material';
import { intervalToDuration } from 'date-fns';
import { BiDownvote, BiUpvote } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { downvoteThunk, getQuestionByKeyThunk, upvoteThunk } from '../slice/questionSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { Paths } from '../route/paths';
import Loader from '../component/loader';
import { isEmpty } from 'lodash';

function TimeCalculator({start, end, maxElement = 2}) {
    let totalElement = 0;

    const interValDuration = intervalToDuration({
        start: start,
        end: end
    });

    for( let i in interValDuration) {
        if(interValDuration[i] === 0) {
            delete interValDuration[i];
        } else {
            if (totalElement === maxElement) {
                delete interValDuration[i];
            } else {
                totalElement++;
            }
        }
    }
    return (
        <div className='flex items-center'>
            {
                Object.keys(interValDuration).map((key, index) => {
                    return (
                        <div key={index+"time_calculator"}>
                            <span className='font-primary text-zinc-800 font-normal'>&nbsp; {interValDuration[key]} </span>
                            <span className='font-primary text-zinc-800 font-normal'>{key}.</span>
                        </div>
                    )
                    })
            }
        </div>
    )
}
function DetailQuestion(props) {
  const {id} = useParams();
  const dispatch  = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(false);
  const [vote, setVote] = React.useState(0);
  const [upvoteSuccess, setUpvoteSuccess] = React.useState(false);
  const [upvoteLoading, setUpvoteLoading] = React.useState(false);
  const [upvoteError, setUpvoteError] = React.useState(false);
  const [downvoteSuccess, setDownvoteSuccess] = React.useState(false);
  const [downvoteLoading, setDownvoteLoading] = React.useState(false);
  const [downvoteError, setDownvoteError] = React.useState(false);
  const [updateUi, setUpdateUi] = React.useState(false);

  async function upvoteHandler() {
    if (!isEmpty(data) && !upvoteLoading) {
        setUpvoteLoading(true);
        setUpvoteError(false);
        setUpvoteSuccess(false);
        const response = await dispatch(upvoteThunk(data.key));
        if (response.meta.requestStatus === 'fulfilled') {
            setUpvoteSuccess(true);
        } else if (response.meta.requestStatus === 'rejected') {
            setUpvoteError(true);
        }
        setUpvoteLoading(false);
        setUpdateUi((prev) => !prev);
    }
  }

  async function downvoteHandler() {
    if (!isEmpty(data) && !downvoteLoading) {
        setDownvoteLoading(true);
        setDownvoteError(false);
        setDownvoteSuccess(false);
        const response = await dispatch(downvoteThunk(data.key));
        if (response.meta.requestStatus === 'fulfilled') {
            setDownvoteSuccess(true);
        } else if (response.meta.requestStatus === 'rejected') {
            setDownvoteError(true);
        }
        setDownvoteLoading(false);
        setUpdateUi((prev) => !prev);
    }
    }
  React.useEffect(() => {
    async function getQuestionData(params) {
        setLoading(true);
        setError(false);
        const response  = await dispatch(getQuestionByKeyThunk(id));
        if (response.meta.requestStatus === 'fulfilled') {
            setData(response.payload);
        } else {
            setError(true);
        }
        setLoading(false);
    }
    if (id) {
        getQuestionData();
    } else {
        navigate(Paths.HOME);
    }
  }, [id, updateUi]);
  
  React.useEffect(() => {
    if (data) {
        if (Object.keys(data).includes("upvotes")) {
            if (data.downvotes === 0 && data.upvotes === 0){
                setVote(0);
            } else if (data.upvotes !== 0 || data.downvotes !== 0) {
                setVote((data.upvotes / (data.upvotes + data.downvotes)) * 100);
            } else {
                setVote(0);
            }
        } else {
            setVote(0);
        }
    } 
  }, [data]);

  if (loading) {
    return <div className='flex justify-center items-center h-[calc(100vh-30vh)'>
        <Loader />
    </div>;
  }
  if (error) {
    return <div>Something went wrong</div>;
  }
  return (
    <div className='px-10'>
        {/* upvote success handler */}
        <Snackbar
            open={upvoteSuccess}
            autoHideDuration={3000}
            onClose={() => setUpvoteSuccess(false)}>
                <div className='bg-green-500 text-white font-primary font-normal p-2 rounded-md'>
                    Upvote success
                </div>
        </Snackbar>
        {/* upvote error handler */}
        <Snackbar
            open={upvoteError}
            autoHideDuration={3000}
            onClose={() => setUpvoteError(false)}>
                <div className='bg-red-500 text-white font-primary font-normal p-2 rounded-md'>
                    Upvote failed
                </div>
        </Snackbar>
        {/* downvote success handler */}
        <Snackbar
            open={downvoteSuccess}
            autoHideDuration={3000}
            onClose={() => setDownvoteSuccess(false)}>
                <div className='bg-green-500 text-white font-primary font-normal p-2 rounded-md'>
                    Downvote success
                </div>
        </Snackbar>
        {/* downvote error handler */}
        <Snackbar
            open={downvoteError}
            autoHideDuration={3000}
            onClose={() => setDownvoteError(false)}>
                <div className='bg-red-500 text-white font-primary font-normal p-2 rounded-md'>
                    Downvote failed
                </div>
        </Snackbar>
        <div className='flex mt-10 mb-3 font-primary items-start flex-wrap'>
            <p className='font-semibold text-zinc-800'>{data.title}</p>
        </div>  
        <div className='flex text-xs gap-8 flex-wrap'>
            <div className='flex flex-col items-center'>
                <span className='font-primary text-gray-500 font-normal'>Asked</span>
                {!isEmpty(data.created_at) ? <><TimeCalculator start={new Date()} end={new Date(data.created_at)} />
                <span className='font-primary text-zinc-800 font-normal'>&nbsp;ago</span></> : "NA"}
            </div>
            <div className='flex flex-col items-center'>
                <span className='font-primary text-gray-500 font-normal'>Modified</span>
                {!isEmpty(data.updated_at) ? <><TimeCalculator start={new Date()} end={new Date(data.updated_at)} /> </>: "NA"}
            </div>
            <div className='flex flex-col items-center'>
                <span className='font-primary text-gray-500 font-normal'>Viewed</span>
                {!isEmpty(data.views) ? <>{new Intl.NumberFormat().format(data.views)} Times</>: "0 Times"}
            </div>
            <div className='flex flex-col items-center text-violet-800'>
                <span className='font-primary text-gray-500 font-normal'>Asked By</span>
                <span className='font-semibold'>{data.username}</span>
            </div>
        </div>
        <hr className='my-3 '/>
        <div className='flex gap-8'>
            <div className='w-[3%] flex flex-col items-center gap-2 font-secondary cursor-pointer'>
                <BiUpvote className='text-4xl text-green-500 ' onClick={upvoteHandler}/>
                <span className='font-primary text-zinc-600 font-normal'>
                    {Math.round(vote)}
                </span>
                <BiDownvote className='text-4xl text-red-500 cursor-pointer' onClick={downvoteHandler}/>
            </div>
            <div className='w-[70%] font-primary text-neutral-900 flex-shrink'>
                {/* <div className='px-4' dangerouslySetInnerHTML={{__html: data.description}}></div> */}
                {/* Future use ui */}
                {
                    !isEmpty(data.description) ? <div className=' px-8 py-7 rounded-md bg-slate-300 max-h-screen overflow-auto max-w-full scroll-smooth' dangerouslySetInnerHTML={{__html: data.description}}>
                    </div> : <div className='text-lg text-violet-700 font-secondary font-semibold'>No Description available for this question...</div>
                }
                
            </div>
            <div className='bg-red-400 w-[26%]'>
                suggestion
            </div>
        </div>
    </div>
  )
}

export default DetailQuestion