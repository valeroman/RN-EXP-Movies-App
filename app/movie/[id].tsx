import { CompleteMovie } from '@/infrastructure/interfaces/movie.interface';
import MovieCast from '@/presentation/components/movie/MovieCast';
import MovieDescription from '@/presentation/components/movie/MovieDescription';
import MovieHeader from '@/presentation/components/movie/MovieHeader';
import { useMovie } from '@/presentation/hooks/useMovie';
import { useLocalSearchParams } from 'expo-router';
import React from 'react'
import { View, Text, ActivityIndicator, ScrollView } from 'react-native';

interface Props {
    movie: CompleteMovie;
}

const MovieScreen = ({ movie }: Props) => {

    const { id } = useLocalSearchParams();
    const { movieQuery, castQuery } = useMovie( +id );


    if ( movieQuery.isLoading || !movieQuery.data ) {
        return (
            <View className='flex flex-1 justify-center items-center'>
                <Text className='mb-4'>Espere por favor</Text>
                <ActivityIndicator 
                    color="purple"
                    size={30}
                />
            </View>
        )
    }


    if ( castQuery.isLoading || !castQuery.data ) {
        return (
            <View className='flex flex-1 justify-center items-center'>
                <Text className='mb-4'>Espere por favor</Text>
                <ActivityIndicator 
                    color="purple"
                    size={30}
                />
            </View>
        )
    }

    return (
        <ScrollView>
            <MovieHeader 
                originalTitle={ movieQuery.data.originalTitle}
                poster={ movieQuery.data.poster }
                title={ movieQuery.data.title }
            />
            <MovieDescription movie={ movieQuery.data } />

            {/* Movie Cast */}
            <MovieCast cast={ castQuery.data } />
        </ScrollView>
    )
}

export default MovieScreen;