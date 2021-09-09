import PropTypes from 'prop-types'

export const getGifs = async ({category}) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=21&api_key=eIvwxmR01TBECGPOFpCriKzLW1gsB7MZ`
    const res = await fetch(url)
    const { data } = await res.json()

    const gifs = data.map( gif => {
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images?.downsized_medium.url
        }
    })

    return gifs;
}

getGifs.propTypes = {
    category: PropTypes.string.isRequired
}