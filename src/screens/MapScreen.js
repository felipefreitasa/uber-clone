import { useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import tw from 'twrnc'
import Map from '../components/Map'
import NavigateCard from '../components/NavigateCard'
import RideOptionsCard from '../components/RideOptionsCard'

const MapScreen = () => {

    const Stack = createStackNavigator()

    const navigation = useNavigation()

    return (
        <View >

            <TouchableOpacity
                onPress={() => navigation.navigate('HomeScreen')}
                style={tw` bg-gray-100 absolute top-10 left-5 z-50 rounded-full shadow-lg p-3`}>
                <Icon type="antdesign" name="arrowleft" />
            </TouchableOpacity>

            <View style={tw`h-1/2`}>
                <Map />
            </View>

            <View style={tw`h-1/2`}>
                <Stack.Navigator>
                    <Stack.Screen
                        name="NavigateCard"
                        component={NavigateCard}
                        options={{
                            headerShown: false,
                        }}
                    />

                    <Stack.Screen
                        name="RideOptionsCard"
                        component={RideOptionsCard}
                        options={{
                            headerShown: false,
                        }}
                    />
                </Stack.Navigator>
            </View>

        </View>
    )
}

export default MapScreen

