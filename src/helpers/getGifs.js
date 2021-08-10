import { apiKey } from '../Constants/Constants';

export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${encodeURI(apiKey)}&q=${category}&limit=10`
    const response = await fetch(url);
    const { data } = await response.json();
    const gifs = data.map((gif) => {
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images?.downsized_medium.url,
        };
    });
    
    return gifs;
}