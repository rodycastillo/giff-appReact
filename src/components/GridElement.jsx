import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { GifGridItem } from './GifGridItem'

export const GridElement =  ({category}) => {

    const [images, setImages] = useState([])
    useEffect(() => {
        getGifs()
    }, [])
    const getGifs = async ( ) => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=rick=and=morty&limit=9&api_key=eIvwxmR01TBECGPOFpCriKzLW1gsB7MZ'
        const res = await fetch(url)
        const { data } = await res.json()

        const gifs = data.map( gif => {
            return {
                id: gif.id,
                title: gif.title,
                url: gif.images?.downsized_medium.url
            }
        })

        setImages(gifs);
    }

    return (
        <div>
            <h3>{ category }</h3>
            <ol>
                {
                    images.map((img) => {
                        return <GifGridItem
                                    key={ img.id }
                                    {...img} 
                                />
                    })
                }
            </ol>
        </div>
    )
}

GridElement.propTypes = {
    category: PropTypes.string.isRequired
}