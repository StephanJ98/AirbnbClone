import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'

export default function Post() {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg' }}
            />
            <Text style={styles.bedrooms}>1 bed 1 bedroom</Text>
            <Text
                style={styles.description}
                numberOfLines={2}
            >
                Entire Flat. Laborum nulla eu dolor Lorem mollit cupidatat do eiusmod fugiat nostrud excepteur laboris adipisicing. Sit do nisi sunt occaecat sint anim aute culpa quis. Nostrud enim sit est est non fugiat aliquip. Incididunt id nostrud irure anim et ut aliqua irure. Mollit reprehenderit incididunt ea do laboris.
            </Text>
            <Text style={styles.prices}>
                <Text style={styles.oldPrice}>$36</Text>
                <Text style={styles.newPrice}>  $30 </Text>
                / night
            </Text>
            <Text style={styles.totalPrice}>$230 total</Text>
        </View>
    )
}
