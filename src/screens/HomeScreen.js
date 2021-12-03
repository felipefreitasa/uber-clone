import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import NavOptions from '../components/NavOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../redux/slices/navSlices'
import tw from 'twrnc';
import NavFavourites from '../components/NavFavourites';

const HomeScreen = () => {

    const GOOGLE_MAPS_APIKEY = 'AIzaSyBEbDkJGJW-hW75vKFP94dNameR0QXf7RA'

    const dispatch = useDispatch()

    return (
        <View style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <Image
                    source={{uri: 'https://links.papareact.com/gzs'}}
                    style={styles.uberLogo}
                />

                <GooglePlacesAutocomplete
                    placeholder='Where to?'
                    query={{
                        key: GOOGLE_MAPS_APIKEY,
                        language: 'en',
                    }}
                    nearbyPlacesAPI='GooglePlacesSearch'
                    minLength={2}
                    enablePoweredByContainer={false}
                    onPress={(data, details = null) => {
                        dispatch(setOrigin({
                            location: details.geometry.location,
                            description: data.description
                        }))

                        dispatch(setDestination(null))
                    }}
                    fetchDetails={true}
                    returnKeyType={'search'}
                    styles={{
                        container: {
                            flex: 0,
                        },
                        textInput: {
                            fontSize: 18,
                        },

                    }}
                />

                <NavOptions />
                <NavFavourites/>
            </View>

        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    uberLogo: {
        width: 100,
        height: 100,
        resizeMode: 'contain'
    }
})

