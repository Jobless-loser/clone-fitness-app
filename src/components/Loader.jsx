import React from 'react';
import {Stack} from '@mui/material'
import {MoonLoader} from 'react-spinners'

const Loader = () => {
    return (
        <Stack direction="row" justifyContent="center" alignItems="center" width="100%">
            <MoonLoader color="gray"/>
        </Stack>
    );
};

export default Loader;