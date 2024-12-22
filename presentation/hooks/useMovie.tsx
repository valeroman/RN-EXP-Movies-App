import { getMovieByIdAction } from '@/core/actions/movies/get-movie-by-id.action';
import { getMovieCastAction } from '@/core/actions/movies/get-movie-cast.action';
import { useQuery } from '@tanstack/react-query'
import React from 'react'

export const useMovie = ( id: number) => {

    const movieQuery = useQuery({
        queryKey: ['movie', id],
        queryFn: () => getMovieByIdAction( id ),
        staleTime: 1000 * 60 * 60 * 24,
    });

    const castQuery = useQuery({
        queryKey: ['movie', id, 'actor'],
        queryFn: () => getMovieCastAction( id ),
        staleTime: 1000 * 60 * 60 * 24,
    })

    return {
        movieQuery,
        castQuery,
    }
}
