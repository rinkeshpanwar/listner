import React from 'react'
import { Button, ButtonGroup, Typography } from '@mui/material'
import  {BiSearchAlt} from 'react-icons/bi'
import { Box } from '@mui/system';
import { isEmpty } from 'lodash';

function Searchbar({onSearch, placeholder, showTypo}) {
    const [search, setSearch] = React.useState('');
    return (
        <div className='w-1/2'>
            <form onSubmit={(e) => {
                e.preventDefault();
                onSearch(search);
            }} >
                <ButtonGroup className='w-full bg-indigo-200'>
                    <input type="search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        autoComplete='off'
                        className='w-full border-2 border-indigo-600 outline-none px-3 h-12 font-primary'
                        placeholder= {isEmpty(placeholder) ? 'How to setup node js in windows 10?' : placeholder}
                        />
                    <Button type="submit" className='border-none hover:border-none text-indigo-700'>
                        <BiSearchAlt className='h-8 w-10'/>
                    </Button>
                </ButtonGroup>
                {
                    isEmpty(showTypo) ? 
                    <Box>
                        <Typography className='font-secondary mt-1 font-medium text-primary_black'>
                            Search for your question...
                        </Typography>
                    </Box> : ""
                }
            </form>
        </div>
    )
}

export default Searchbar