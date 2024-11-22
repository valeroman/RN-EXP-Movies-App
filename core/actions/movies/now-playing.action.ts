
// Funcion para traer las peliculas

import { movieApi } from "@/core/api/movie-api";
import { MovieDBMoviesResponse } from "@/infrastructure/moviedb-response";

export const nowPlagingAction = async () => {

    try {

        const { data } = await movieApi.get<MovieDBMoviesResponse>('/now_playing');

        console.log(data);

        return [];
        
    } catch (error) {
        console.log(error);
        throw 'Cannot load now playing movies';
    }
}