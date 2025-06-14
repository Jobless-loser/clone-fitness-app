import React, {useEffect, useState} from 'react';
import Pagination from '@mui/material/Pagination'
import {Box, Stack, Typography} from '@mui/material';
import {exerciseOptions, fetchData} from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({exercises, setExercises, bodyPart, currentPage, setCurrentPage}) => {
    const exercisePerPage = 4
    const totalPage = Math.ceil(exercises.length / exercisePerPage)
    const indexOfLastExercise = exercises.length > exercisePerPage ? totalPage < currentPage ? exercisePerPage : currentPage * exercisePerPage : 1
    const indexOfFirstExercise = exercises.length > exercisePerPage ? indexOfLastExercise - exercisePerPage : 0
    const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise)

    const paginate = (e, value) => {
        setCurrentPage(value)
        window.scrollTo({top: 1800, behavior: 'smooth'})
    }

    useEffect(() => {
        const fetchExercisesData = async () => {
            let exercisesData = []
            if (bodyPart === 'all') {
                exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
            } else {
                exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions)
            }
            setExercises(exercisesData)
        }
        fetchExercisesData()
    }, [bodyPart]);

    return (
        <Box id="exercises"
             sx={{mt: {lg: '110px'}}}
             mt="50px"
             p="20px"
        >
            <Typography variant="h3" mb="46px">
                Showing Results
            </Typography>
            <Stack sx={{
                display: 'grid',
                gridTemplateColumns: {
                    xs: 'repeat(auto-fill, minmax(200px, 1fr))',
                    md: 'repeat(auto-fill, minmax(400px, 1fr))',
                },
                gap: {lg: '110px', xs: '50px'},
                justifyItems: 'center',
                mx: {
                    xs: '20px',
                    md: '50px'
                }
            }}>
                {currentExercises.map((exercise, index) => (
                    <ExerciseCard key={index} exercise={exercise}/>
                ))}
            </Stack>
            <Stack mt="100px" alignItems="center">
                {exercises.length > exercisePerPage && (
                    <Pagination color="standard"
                                shape="rounded"
                                defaultPage={1}
                                count={totalPage}
                                page={currentPage}
                                onChange={paginate}
                                size="large"/>
                )}
            </Stack>
        </Box>
    );
};

export default Exercises;