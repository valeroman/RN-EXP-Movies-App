import { View, Text, FlatList } from 'react-native'
import React from 'react';
import { Movie } from '@/infrastructure/interfaces/movie.interface';
import MoviePoster from './MoviePoster';

interface Props {
    title: string;
    movie: Movie[];
}

const MovieHorizontalList = ({ title, movie }: Props) => {
    return (
        <View className='mt-5'>
            {
                title && (<Text className='text-3xl font-bold px-4 mb-2'>{title}</Text>)
            }

            <FlatList
                horizontal
                data={movie}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => `${item.id}`}
                renderItem={({ item }) => <MoviePoster id={item.id} poster={item.poster} smallPoster />}
            />

        </View>
    )
}

export default MovieHorizontalList;