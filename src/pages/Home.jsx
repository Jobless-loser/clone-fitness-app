import React, {useState} from 'react';
import {Box} from '@mui/material'
import Exercises from '../components/Exercises'
import SearchExercises from '../components/SearchExercises'
import HeroBanner from '../components/HeroBanner'

const Home = () => {
    const [bodyPart, setBodyPart] = useState('all')
    const [exercises, setExercises] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    console.log(bodyPart)

    return (
        <Box>
            <HeroBanner/>
            <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}
                             setCurrentPage={setCurrentPage}/>
            <Exercises setExercises={setExercises} bodyPart={bodyPart} exercises={exercises} currentPage={currentPage}
                       setCurrentPage={setCurrentPage}/>
        </Box>
    );
};

export default Home;