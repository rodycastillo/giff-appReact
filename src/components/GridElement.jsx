// import React, { useState, useEffect } from 'react'
import React from 'react';
import PropTypes from 'prop-types'
// import { GifGridItem } from './GifGridItem'
// import { getGifs } from '../helpers/getGifs'

export const GridElement =  ({category}) => {

    // const [images, setImages] = useState([])
    // useEffect(() => {
    //     getGifs(category)
    //         .then(setImages)
    // }, [category])

    return (
        <>
            <h3>{ category }</h3>
            {/* <div  className="card-grid">
                {
                    images.map((img) => {
                        return <GifGridItem
                                    key={ img.id }
                                    {...img} 
                                />
                    })
                }
            </div> */}
        </>
    )
}

GridElement.propTypes = {
    category: PropTypes.string.isRequired
}