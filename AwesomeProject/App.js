/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import MapView, {AnimatedRegion, Marker, Polyline, PROVIDER_GOOGLE} from "react-native-maps";
import haversine from "haversine";
//
// const instructions = Platform.select({
//     ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//     android:
//         'Double tap R on your keyboard to reload,\n' +
//         'Shake or press menu button for dev menu',
// });

// const LATITUDE = 46.94809;
// const LONGITUDE = 7.44744;
// const LATITUDE_DELTA = 0.009;
// const LONGITUDE_DELTA = 0.009;

type Props = {};
export default class App extends Component<Props> {
    constructor(props) {
        super(props);

        this.state = {
            location: null
        };

        // this.state = {
        //     latitude: LATITUDE,
        //     longitude: LONGITUDE,
        //     routeCoordinates: [],
        //     distanceTravelled: 0,
        //     prevLatLng: {},
        //     coordinate: new AnimatedRegion({
        //         latitude: LATITUDE,
        //         longitude: LONGITUDE,
        //         latitudeDelta: 0,
        //         longitudeDelta: 0
        //     })
        // };
    }

    componentDidMount(): void {

        // const { coordinate } = this.state;
        //
        // // gives us the information about user’s location whenever it get’s changed
        // this.watchID = navigator.geolocation.watchPosition(
        //     position => {
        //         const {coordinate, routeCoordinates, distanceTravelled} = this.state;
        //         const {latitude, longitude} = position.coords;
        //
        //         const newCoordinate = {
        //             // latitude: LATITUDE + (Math.random() - 0.5) * (LATITUDE_DELTA / 2),
        //             // longitude: LONGITUDE + (Math.random() - 0.5) * (LONGITUDE_DELTA / 2),
        //             latitude,
        //             longitude
        //         };
        //
        //         console.log({ newCoordinate });
        //
        //         // animate the marker to these new coordinates
        //         if (Platform.OS === "android") {
        //             if (this.marker) {
        //                 this.marker._component.animateMarkerToCoordinate(
        //                     newCoordinate,
        //                     500
        //                 );
        //             }
        //         } else {
        //             coordinate.timing(newCoordinate).start();
        //         }
        //
        //         // coordinate.timing(newCoordinate).start();
        //
        //         // update our initial states with the new one
        //         this.setState({
        //             latitude,
        //             longitude,
        //             routeCoordinates: routeCoordinates.concat([newCoordinate]),
        //             distanceTravelled: distanceTravelled + this.calcDistance(newCoordinate),
        //             prevLatLng: newCoordinate
        //         });
        //     },
        //     error => console.log(error),
        //     {
        //         enableHighAccuracy: true,
        //         timeout: 20000,
        //         maximumAge: 1000
        //     }
        // );
    }

    // componentWillUnmount() {
    //     navigator.geolocation.clearWatch(this.watchID);
    // }

    // find my current coordinates
    findCoordinates = () => {
        navigator.geolocation.getCurrentPosition(
            position => {
                const location = JSON.stringify(position);

                this.setState({ location });
            },
            error => Alert.alert(error.message),
            {
                enableHighAccuracy: true,
                timeout: 20000,
                maximumAge: 1000
            }
        );
    };

    // function that returns all necessary information needed
    getMapRegion = () => ({
        latitude: this.state.latitude,
        longitude: this.state.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
    });

    // Calculating Distance Travelled
    calcDistance = newLatLng => {
        const { prevLatLng } = this.state;
        return haversine(prevLatLng, newLatLng) || 0;
    };

    render() {
        return (

            <View style={styles.container}>

                {/*<Text style={styles.welcome}>Welcome to React Native!</Text>*/}
                {/*<Text style={styles.instructions}>To get started, edit App.js</Text>*/}
                {/*<Text style={styles.instructions}>{instructions}</Text>*/}
                {/*<MapView*/}
                    {/*style={styles.map}*/}
                    {/*provider={PROVIDER_GOOGLE}*/}
                    {/*showUserLocation*/}
                    {/*followUserLocation*/}
                    {/*loadingEnabled*/}
                    {/*region={this.getMapRegion()}*/}
                {/*>*/}
                    {/*<Polyline coordinates={this.state.routeCoordinates} strokeWidth={5}/>*/}
                    {/*<Marker.Animated*/}
                        {/*ref={marker => {*/}
                            {/*this.marker = marker*/}
                        {/*}}*/}
                        {/*coordinate={this.state.coordinate}*/}
                    {/*/>*/}
                {/*</MapView>*/}
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={this.findCoordinates}
                        style={[styles.bubble, styles.button]}>
                        {/*<Text style={styles.bottomBarContent}>*/}
                            {/*{parseFloat(this.state.distanceTravelled).toFixed(2)} km*/}
                        {/*</Text>*/}
                        <Text> Find my Coords </Text>
                        <Text>Location: {this.state.location}</Text>
                    </TouchableOpacity>

                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#77b9e8',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    bubble: {
        flex: 1,
        backgroundColor: "rgba(255,255,255,0.8)",
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 20
    },
    latlng: {
        width: 200,
        alignItems: "stretch"
    },
    button: {
        width: 80,
        paddingHorizontal: 12,
        alignItems: "center",
        marginHorizontal: 10
    },
    buttonContainer: {
        flexDirection: "row",
        marginVertical: 20,
        backgroundColor: "transparent"
    }
    // welcome: {
    //     fontSize: 36,
    //     fontWeight: 'bold',
    //     textAlign: 'center',
    //     margin: 10,
    //     color: '#eee'
    // },
    // instructions: {
    //     textAlign: 'center',
    //     color: '#333333',
    //     marginBottom: 5,
    // },
});
