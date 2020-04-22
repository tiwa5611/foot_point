import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import MapView, {PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import ActionButton from 'react-native-action-button';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default class Mapiew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat:null,
      lng:null
    };
  }

  componentDidMount() {
    Geolocation.getCurrentPosition( (position) => {
      console.log('position: ', position)
      this.setState({
        lat:position.coords.latitude,
        lng:position.coords.longitude
      })
      console.log('coords', position)
      // console.log('longitude', position.coords.longitude)
    }, (err) => {
      console.log('error:', err)
    },
    { enableHighAccuracy: true, timeout: 100 , maximumAge: 0,})
  }

  render() {
    console.log('-------------------')
    console.log('latitude', this.state.lat)
    console.log('longitude', this.state.lng)
    return (
      <View style={{flex:1, backgroundColor: '#f3f3f3'}}>
        <MapView ref="map" mapType="terrain" style={styles.map} initialRegion={{latitude:this.state.lat, longitude:this.state.lng,latitudeDelta: 0.0922, longitudeDelta: 0.0421}}>
          <MapView.Marker coordinate={{latitude: this.state.lat, longitude: this.state.lng}}>
            <View style={styles.radius}>
              <View style={styles.marker} />
            </View>
          </MapView.Marker>
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  map: {
    width: width,
    height: height,
    zIndex: -1
  },
  radius: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    overflow: 'hidden',
    backgroundColor: 'rgba(0, 122, 255, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(0, 122, 255, 0.3)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  marker: {
    height: 20,
    width: 20,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 20 / 2,
    overflow: 'hidden',
    backgroundColor: '#007AFF'
  },
  actionButton: {
    position: 'absolute',
    width: 20,
    height: 20,
    top: 10,
    left: 10,
    zIndex: 10
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white'
  }
});
