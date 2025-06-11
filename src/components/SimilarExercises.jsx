import React from 'react';
import {Box, Stack, Typography} from '@mui/material';
import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";

const SimilarExercises = ({targetMuscleExercises, equipmentExercises}) => {
    return (
        <Box sx={{mt: {lg: '100px', xs: '0'}}}>
            <Typography sx={{fontSize: {lg: '44px', xs: '25px'}, ml: '20px'}} fontWeight={700} color="#000" mb="33px">
                Exercises that target the <span style={{color: '#ff2625', textTransform: 'capitalize'}}>same muscle</span> group
            </Typography>
            <Stack direction="row" sx={{p: '40px', position: 'relative'}}>
                {targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises} displayValue='exerciseCard'/> : <Loader/>}
            </Stack>
            <Typography sx={{fontSize: {lg: '44px', xs: '25px'}, ml: '20px'}} fontWeight={700} color="#000" mb="33px">
                Exercises that use the <span style={{color: '#ff2625', textTransform: 'capitalize'}}>same equipment</span>
            </Typography>
            <Stack direction="row" sx={{p: '40px', position: 'relative'}}>
                {equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises} displayValue='exerciseCard'/> : <Loader/>}
            </Stack>
        </Box>
    );
};

export default SimilarExercises;