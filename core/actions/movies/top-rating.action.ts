import { movieApi } from "@/core/api/movie-api"
import { MovieDBMoviesResponse } from "@/infrastructure/interfaces/moviedb-response"
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

interface Options {
    page?: number;
    limit?: number;

}


export const topRatedMovieAction = async ({ limit = 10, page = 1 }: Options) => {

    try {
        const { data } = await movieApi.get<MovieDBMoviesResponse>('/top_rated', {
            params: {
                page: page,
            }
        });

        const movie = data.results.map(MovieMapper.fromTheMovieDBToMovie);
        return movie;
        
    } catch (error) {
        console.log(error);
        throw 'Cannot load the top rated movie.'
    }
}