import { Snackbar } from '@mui/material';
import { isEmpty } from 'lodash';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../component/loader';
import Searchbar from '../component/searchbar';
import { downloadYoutubeMp3, validateYoutubeUrl } from '../slice/youtubeConvertor';
import ResultCards from '../component/youtubeCard';

function Youtube() {
  const youtube = useSelector((state) => state.youtube);
  const dispatch = useDispatch();
  const [error, setShowError] = React.useState(false);

  async function submitHandler(value) {
    if (!value || youtube.loading) return;
    const response = await dispatch(validateYoutubeUrl(value));
    if (!isEmpty(response.error)) {
      setShowError(true);
    }
  }

  const downloadVideo = React.useCallback((url) => {
    dispatch(downloadYoutubeMp3(url));
  }, [dispatch]);
  return (<>
    <Snackbar open={error}
      autoHideDuration={3000}
      onClose={() => setShowError(false)}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
    >
      <div className='font-secondary w-fit bg-red-400 font-medium text-sm px-5 py-3 text-white'>
        Please check the url.
      </div>
    </Snackbar>
    <div className='flex h-[90vh] justify-center'>
      <div className='mt-10 w-full flex items-center flex-col'>
        <div className={`${youtube.loading ?  "visible" : "invisible"} mb-3`}>
          <Loader />
        </div>
        <Searchbar onSearch={submitHandler} showTypo={"no"} placeholder="Enter youtube url here to download mp3"/>
        <div className='w-full px-10 mt-10 space-y-4'>
          {
            youtube.data.map((item, index) => <ResultCards key={index+"_youtubeResult"} item={item} downloadVideo={downloadVideo} />
            )
          }
        </div>
      </div>
    </div>
  </>
  )
}

export default Youtube;

