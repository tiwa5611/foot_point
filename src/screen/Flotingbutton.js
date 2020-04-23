import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TextInput} from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Map from './MapView';
import Modal from 'react-native-modal';
import TestModal from './Test';

export default class Flotingbutton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
    };
  }

  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };

  
  // Shar_location = () => {
  //   return( 
  //     <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
  //       { console.log(' xxxxxxxxx ' )}
  //       <Modal isVisible={this.state.isModalVisible} animationOutTiming={1000} animationInTiming={1000}>
  //         <View style={{ width:100, height:'80%', backgroundColor:'write'}}>
  //           <TextInput
  //             style={{height: 40, borderColor: 'gray', borderWidth: 1}}
  //             onChangeText={(text) => this.setState({text})}
  //             value={this.state.text}
  //           />
  //           <Button title="Hide modal" onPress={this.toggleModal} />
  //         </View>
  //       </Modal>
  //     </View>
  //   )
  // }
  
  render() {
    return (
        <View style={{flex:1, backgroundColor: '#f3f3f3'}}>
            {/* <Map/> */}
            <ActionButton buttonColor="rgb(120, 224, 143)">
                <ActionButton.Item buttonColor='rgb(255, 255, 255)' onPress={() => console.log("notes tapped!")}>
                    <Icon name="key" style={styles.actionButtonIcon} />
                </ActionButton.Item>
                <ActionButton.Item buttonColor='rgb(255, 255, 255)' onPress={() => {}}>
                    <Icon name="share-alt" style={styles.actionButtonIcon} />
                </ActionButton.Item>
                <ActionButton.Item buttonColor='rgb(255, 255, 255)' onPress={ () => { testFunction }}>
                    <Icon name="search-location" style={styles.actionButtonIcon} />
                </ActionButton.Item>
            </ActionButton>
        </View>
    );
  }
}
const testFunction = () => {
  return (
    console.log('xxxxxxx')
  )
}

const styles = StyleSheet.create({
    actionButtonIcon: {
      fontSize: 20,
      height: 22,
      color: '#2d3436',
    },
});