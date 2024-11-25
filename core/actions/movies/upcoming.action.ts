import { movieApi } from "@/core/api/movie-api"
import { MovieDBMoviesResponse } from "@/infrastructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";



export const upcomingMovieAction = async () => {

    try {
        const { data } = await movieApi.get<MovieDBMoviesResponse>('/upcoming');

        const movie = data.results.map(MovieMapper.fromTheMovieDBToMovie);

        return movie;

    } catch (error) {
        console.log(error);
        throw 'Cannot load top rated movie';
    }
}