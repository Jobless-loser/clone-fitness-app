import React from 'react';
import {Box, Typography} from "@mui/material";

const ExerciseVideo = ({video}) => {
    return (
        <a
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${video.videoId}`}
            target="_blank"
            rel="noreferrer">
            <img src={video.thumbnails[0].url} alt={video.title}/>
            <Box>
                <Typography variant="h5" color="#000" sx={{minHeight: '100px'}}>
                    {video.title}
                </Typography>
                <Typography variant="h6" color="rgba(0,0,0,0.5)">
                    {video.channelName}
                </Typography>
            </Box>
        </a>
    );
};

export default ExerciseVideo;