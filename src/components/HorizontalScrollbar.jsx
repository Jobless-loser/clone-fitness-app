import React, {useCallback, useEffect, useState} from 'react';
import {Box} from '@mui/material';
import useEmblaCarousel from 'embla-carousel-react'
import {WheelGesturesPlugin} from "embla-carousel-wheel-gestures";

import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import ExerciseVideo from "./ExerciseVideo";

const HorizontalScrollbar = ({data, setBodyPart, bodyPart, displayValue}) => {
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true)
    const [emblaRef, emblaApi] = useEmblaCarousel({loop: false, dragFree: true}, [
        WheelGesturesPlugin({
            forceWheelAxis: 'x',
            wheelDraggingClass: 'is-dragging'
        })
    ])

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    const onSelect = useCallback((emblaApi) => {
        setPrevBtnDisabled(!emblaApi.canScrollPrev())
        setNextBtnDisabled(!emblaApi.canScrollNext())
    }, [])

    useEffect(() => {
        if (!emblaApi) return

        onSelect(emblaApi)
        emblaApi.on('reInit', onSelect).on('select', onSelect)
    }, [emblaApi, onSelect])

    return (
        <>
            {
                data.length && (
                    <div className="embla">
                        <div className="embla__viewport" ref={emblaRef}>
                            <div className="embla__container">
                                {data.map((item) => (
                                    <div className="embla__slide" key={item.id || item}>
                                        <Box
                                            itemID={item.id || item}
                                            title={item.id || item}
                                            m="0px"
                                        >
                                            {displayValue === 'bodyParts' &&
                                                <BodyPart item={item} setBodyPart={setBodyPart}
                                                          bodyPart={bodyPart}/>}
                                            {displayValue === 'exerciseCard' &&
                                                <ExerciseCard exercise={item}/>}
                                            {displayValue === 'videos' &&
                                                <ExerciseVideo video={item.video}/>}
                                        </Box>
                                    </div>
                                ))}
                            </div>
                            <div className="embla-arrows">
                                <button className="embla__prev" onClick={scrollPrev} disabled={prevBtnDisabled}>
                                    <img src={LeftArrowIcon} alt="prev"/>
                                </button>
                                <button className="embla__next" onClick={scrollNext} disabled={nextBtnDisabled}>
                                    <img src={RightArrowIcon} alt="next"/>
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
};

export default HorizontalScrollbar;