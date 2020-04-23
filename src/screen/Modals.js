import React, {Component} from 'react';
import {Button, Text, View, TextInput, Dimensions, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';

const screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height
}
export default class ModalTester extends Component {
  state = {
    isModalVisible: false,
  };

  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };

  render() {
    return (
      <View style={{backgroundColor:'gray'}}>
        <Button title="Show modal" onPress={this.toggleModal} />
        <Modal 
          isVisible={this.state.isModalVisible} 
          animationOutTiming={1000} 
          animationInTiming={1000}
          style={styles.modal}
        >
            <View >
              <Text>เพิ่มข้อมูล</Text>
              <TextInput
                style={styles.textinput}
                value={this.state.text}
                placeholder="ชื่อร้าน"
              />
            {/* <Button title="Hide modal" onPress={this.toggleModal} style={styles.button}/> */}
            </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  modal:{
    backgroundColor:'white',
    justifyContent:'flex-start'
  },
  textinput: {
    height: 40,
    borderRadius:25,
    paddingLeft:45,
    backgroundColor:'gray',
    marginHorizontal:25
  },
  button:{
    marginLeft:50,
    marginRight:50,
    borderRadius:10,
  },
  viewinput: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
})