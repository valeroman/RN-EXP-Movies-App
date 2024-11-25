import { movieApi } from "@/core/api/movie-api"
import { MovieDBMoviesResponse } from "@/infrastructure/interfaces/moviedb-response"
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";


export const topRatedMovieAction = async () => {

    try {

        const { data } = await movieApi.get<MovieDBMoviesResponse>('/top_rated');

        const movie = data.results.map(MovieMapper.fromTheMovieDBToMovie);

        return movie;
        
    } catch (error) {
        console.log(error);
        throw 'Cannot load the top rated movie.'
    }
}