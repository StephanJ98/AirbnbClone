import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Text, TextInput, FlatList, Pressable } from 'react-native'
import styles from './styles'
import Entypo from 'react-native-vector-icons/Entypo'

import searchResults from '../../../assets/data/search'

export default function DestinationSearchScreen() {

    const [inputText, setInputText] = useState('')
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                placeholder={'Where are you going?'}
                value={inputText}
                onChangeText={setInputText}
            />
            <FlatList
                data={searchResults}
                renderItem={({ item }) => (
                    <Pressable
                        style={styles.row}
                        onPress={() => navigation.navigate('Guests')}
                    >
                        <View style={styles.iconContainer}>
                            <Entypo name={"location-pin"} size={30} color={'black'} />
                        </View>
                        <Text style={styles.locationText}>{item.description}</Text>
                    </Pressable>
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}
