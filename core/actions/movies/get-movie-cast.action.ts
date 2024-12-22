import { movieApi } from "@/core/api/movie-api";
import { CreditsResponse } from "@/infrastructure/interfaces/moviedb-cast-response";
import { CastMapper } from "@/infrastructure/mappers/cast.mapper";


export const getMovieCastAction = async (movieId: number) => {

    try {

        const { data } = await movieApi.get<CreditsResponse>(`/${movieId}/credits`);
        const actors = data.cast.map(CastMapper.fromTheMovieDBCastToEntity)
        return actors;
        
    } catch (error) {
        console.log(error);
        throw 'Cannot load cast';
    }

}