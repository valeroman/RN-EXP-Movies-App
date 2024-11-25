import { View, Text, ActivityIndicator, ScrollView } from 'react-native'
import React from 'react'
import { useMovies } from '@/presentation/hooks/useMovies'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import MainSlideshow from '@/presentation/components/movies/MainSlideshow'
import MovieHorizontalList from '@/presentation/components/movies/MovieHorizontalList'

const HomeScreen = () => {

    const safeArea = useSafeAreaInsets();
    const { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery } = useMovies();

    if (nowPlayingQuery.isLoading) {
        return (
            <View className='justify-center items-center flex-1'>
                <ActivityIndicator color="purple" size={40} />
            </View>
        )
    }

    return (
        <ScrollView>
            <View className='mt-2 pb-10' style={{ paddingTop: safeArea.top }}>
                <Text className='text-3xl font-bold px-4 mb-2'>MoviesApp</Text>

                {/* Carousel de imagenes */}
                <MainSlideshow movies={nowPlayingQuery.data ?? []} />

                {/* Popular */}
                <MovieHorizontalList
                    movie={popularQuery.data ?? []}
                    title='Populares'
                    className='mt-5'
                />

                {/* Top-rated */}
                <MovieHorizontalList
                    movie={topRatedQuery.data ?? []}
                    title='Mejor calificadas'
                    className='mt-5'

                />

                {/* Upcoming */}
                <MovieHorizontalList
                    movie={upcomingQuery.data ?? []}
                    title='Proximamente en cines'
                    className='mt-5'
                />

            </View>
        </ScrollView>

    )
}

export default HomeScreen;