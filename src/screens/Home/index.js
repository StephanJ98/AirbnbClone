import React from 'react'
import { View, Text, ImageBackground, Pressable } from 'react-native'
import styles from './styles'
import Fontisto from 'react-native-vector-icons/Fontisto'

export default function HomeScreen() {
    return (
        <View>
            <ImageBackground
                source={require('../../../assets/images/wallpaper.jpg')}
                style={styles.image}
            >
                <Pressable
                    style={styles.searchButton}
                    onPress={() => console.warn('Search Button Clicked')}
                >
                    <Fontisto name='search' size={25} color={'#f15454'} />
                    <Text style={styles.searchButtonText}>Where are you going?</Text>
                </Pressable>
                <Text style={styles.title}>Go Near</Text>
                <Pressable
                    style={styles.button}
                    onPress={() => console.warn('Explore Button Clicked')}
                >
                    <Text style={styles.buttonText}>Explore nearby stays</Text>
                </Pressable>
            </ImageBackground>
        </View>
    )
}
