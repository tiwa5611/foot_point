/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import React, { Component } from 'react';
import MapView from './src/screen/MapView'
import FlogtingButton  from './src/screen/Flotingbutton'
import Facebook from './src/screen/FaceBook'
import Modal from './src/screen/Modals'
import TestModal from './src/screen/Test'

export default class App extends Component {
  constructor(){
      super();
      this.state = {
      }
  }



  render() {
    return (
          <FlogtingButton/>
    )
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
  },
  big: {
      fontSize: 48
  }
});
