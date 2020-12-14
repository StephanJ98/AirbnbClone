import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Text, Pressable } from 'react-native'
import styles from './styles'

export default function GuestsScreen() {

    const [adults, setAdults] = useState(0)
    const [children, setChildren] = useState(0)
    const [infants, setInfants] = useState(0)
    const navigation = useNavigation()

    return (
        <View style={{ justifyContent: 'space-between', height: '100%' }}>
            <View>
                <View style={styles.row}>
                    <View>
                        <Text style={styles.tag}>Adults</Text>
                        <Text style={styles.subtag}>Ages 13 or above</Text>
                    </View>
                    <View style={styles.buttonsContainer}>
                        <Pressable
                            onPress={() => setAdults(Math.max(0, adults - 1))}
                            style={styles.button}
                        >
                            <Text style={styles.simbol}>-</Text>
                        </Pressable>
                        <Text style={styles.value}>{adults}</Text>
                        <Pressable
                            onPress={() => setAdults(adults + 1)}
                            style={styles.button}
                        >
                            <Text style={styles.simbol}>+</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={styles.row}>
                    <View>
                        <Text style={styles.tag}>Children</Text>
                        <Text style={styles.subtag}>Ages 2-12</Text>
                    </View>
                    <View style={styles.buttonsContainer}>
                        <Pressable
                            onPress={() => setChildren(Math.max(0, children - 1))}
                            style={styles.button}
                        >
                            <Text style={styles.simbol}>-</Text>
                        </Pressable>
                        <Text style={styles.value}>{children}</Text>
                        <Pressable
                            onPress={() => setChildren(children + 1)}
                            style={styles.button}
                        >
                            <Text style={styles.simbol}>+</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={styles.row}>
                    <View>
                        <Text style={styles.tag}>Infants</Text>
                        <Text style={styles.subtag}>Under 2</Text>
                    </View>
                    <View style={styles.buttonsContainer}>
                        <Pressable
                            onPress={() => setInfants(Math.max(0, infants - 1))}
                            style={styles.button}
                        >
                            <Text style={styles.simbol}>-</Text>
                        </Pressable>
                        <Text style={styles.value}>{infants}</Text>
                        <Pressable
                            onPress={() => setInfants(infants + 1)}
                            style={styles.button}
                        >
                            <Text style={styles.simbol}>+</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
            <Pressable
                style={styles.searchButton}
            /*onPress={() => navigation.navigate('')}*/
            >
                <Text style={{ fontSize: 16, color: 'white' }}>Search</Text>
            </Pressable>
        </View>
    )
}
