import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Map from './MapView';

export default class Flotingbutton extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={{flex:1, backgroundColor: '#f3f3f3'}}>
            <Map/>
            <ActionButton buttonColor="rgb(120, 224, 143)">
                <ActionButton.Item buttonColor='rgb(255, 255, 255)' onPress={() => console.log("notes tapped!")}>
                    <Icon name="key" style={styles.actionButtonIcon} />
                </ActionButton.Item>
                <ActionButton.Item buttonColor='rgb(255, 255, 255)' onPress={() => {}}>
                    <Icon name="share-alt" style={styles.actionButtonIcon} />
                </ActionButton.Item>
                <ActionButton.Item buttonColor='rgb(255, 255, 255)' onPress={() => {}}>
                    <Icon name="search-location" style={styles.actionButtonIcon} />
                </ActionButton.Item>
            </ActionButton>
        </View>
    );
  }
}
const styles = StyleSheet.create({
    actionButtonIcon: {
      fontSize: 20,
      height: 22,
      color: '#2d3436',
    },
});