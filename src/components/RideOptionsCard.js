import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'
import { useSelector } from 'react-redux'
import tw from 'twrnc'
import { selectTravelTimeInformation } from '../redux/slices/navSlices'

const data = [
    {
        id: 'Uber-X-123',
        title: 'UberX',
        multiplier: 1,
        image: 'https://links.papareact.com/3pn'
    },
    {
        id: 'Uber-XL-456',
        title: 'Comfort',
        multiplier: 1.2,
        image: 'https://links.papareact.com/5W8'
    },
    {
        id: 'Uber-LUX-789',
        title: 'Flash',
        multiplier: 1.75,
        image: 'https://links.papareact.com/7pf'
    },
]

const SURGE_CHARGE_RATE = 1.5


const RideOptionsCard = () => {

    const navigation = useNavigation()

    const [selected, setSelected] = useState(null)

    const travelTimeInformation = useSelector(selectTravelTimeInformation)

    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
            <View style={styles.rideOptionsHeader} >
                <TouchableOpacity
                    onPress={() => navigation.navigate('NavigateCard')}
                >
                    <Icon
                        name="chevron-left"
                        type="fontawesome"
                    />
                </TouchableOpacity>
                <Text style={styles.rideOptionsHeaderTitle}>
                    Preços um pouco mais altos do que o normal
                </Text>
            </View>

            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => setSelected(item)}
                        style={[tw`${item.id === selected?.id && 'bg-gray-200'}`, styles.rideOptionsButton]}
                    >
                        <View style={styles.rideOptionsButtonLeft}>
                            <Image
                                source={{ uri: item.image }}
                                style={styles.rideOptionCar}
                            />

                            <View style={tw`-ml-6`}>
                                <Text style={tw`text-xl font-bold`}>{item.title}</Text>
                                <Text>{travelTimeInformation?.duration.text}</Text>
                            </View>
                        </View>

                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                            {'R$' + ((travelTimeInformation?.duration.value * SURGE_CHARGE_RATE * item.multiplier) / 100).toFixed(2)}
                        </Text>
                    </TouchableOpacity>
                )}
            />

            <View>
                <TouchableOpacity style={tw`bg-black py-3 m-3 ${!selected && 'bg-gray-300'}`}>
                    <Text style={tw`text-center text-white text-xl`}>Confirmar {selected?.title}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default RideOptionsCard

const styles = StyleSheet.create({
    rideOptionsHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    rideOptionsHeaderTitle: {
        fontSize: 13,
        paddingVertical: 20,
        color: '#C9CBCC'
    },
    rideOptionsButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    rideOptionsButtonLeft: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between'
    },
    rideOptionCar: {
        width: 85,
        height: 85,
        resizeMode: 'contain',
        marginRight: 30,
    }
})
