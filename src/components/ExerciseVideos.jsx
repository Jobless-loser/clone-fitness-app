import React from 'react';
import {Box, Stack, Typography} from '@mui/material';
import HorizontalScrollbar from "./HorizontalScrollbar";

const ExerciseVideos = ({exerciseVideos, name}) => {
    if (!exerciseVideos.length) return 'Loading...'
    return (
        <Box sx={{marginTop: {lg: '200px', xs: '20px'}}} p="20px">
            <Typography variant="h3" mb="33px">
                Watch <span style={{color: '#ff2625', textTransform: 'capitalize'}}>{name}</span> exercise videos
            </Typography>
            <Stack justifyContent="flex-start" flexWrap="wrap" alignItems="center" sx={{
                flexDirection: {lg: 'row'}, gap: {lg: '110px', xs: '0'}
            }}>
                <HorizontalScrollbar data={exerciseVideos} displayValue="videos"/>
            </Stack>
        < /Box>
    );
};

export default ExerciseVideos;