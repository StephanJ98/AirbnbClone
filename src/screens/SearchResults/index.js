import React from 'react'
import { View, Text, FlatList } from 'react-native'
import Post from '../../components/Post'
import feed from '../../../assets/data/feed'

export default function SearchResultsScreen() {
    return (
        <View>
            <FlatList
                data={feed}
                renderItem={({ item }) => <Post post={item} />}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}
