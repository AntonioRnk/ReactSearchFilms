import axios from "axios";
import {playApiKey} from "./config";

export const getPlayerMovieUrl= async(idImdb, isLoading)=>{
    isLoading(true);
    const moviePlayer = await axios.get(`https://5124.svetacdn.in/api/short`,
    {params: {
        api_token : playApiKey,
        imdb_id: idImdb,
    }})
    const [player]  = await moviePlayer.data.data;
    isLoading(false);
    return player;
}