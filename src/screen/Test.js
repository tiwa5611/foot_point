import React, { Component, useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  TextInput,
  ScrollView 
} from "react-native";

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                {/* <ScrollView style={styles.scrollViews}> */}
                    <View style={styles.viewFormInput}>
                        <Text style={styles.textDetail}>ชื่อร้าน</Text>
                        <TextInput
                            style={styles.textInput}
                        />
                    </View>
                    <View style={styles.viewFormInput}>
                        <Text style={styles.textDetail}>Categories</Text>
                        <TextInput
                            style={styles.textInput}
                        />
                    </View>
                    <View style={styles.viewFormInput}>
                        <Text style={styles.textDetail}>Student ID.</Text>
                        <TextInput
                            style={styles.textInput}
                        />
                    </View>
                    <View style={styles.viewFormInput}>
                        <Text style={styles.textDetail}>รุ่น</Text>
                        <TextInput
                            style={styles.textInput}
                        />
                    </View>
                    <View style={styles.viewFormInput}>
                        <Text style={styles.textDetail}>ชื่อ</Text>
                        <TextInput
                            style={styles.textInput}
                        />
                    </View>
                    <View style={styles.viewFormInput}>
                        <Text style={styles.textDetail}>Tel</Text>
                        <TextInput
                            style={styles.textInput}
                        />
                    </View>
                    <View style={styles.viewFormInput}>
                        <Text style={styles.textDetail}>Line ID.</Text>
                        <TextInput
                            style={styles.textInput}
                        />
                    </View>
                    <View style={styles.viewFormInput}>
                        <Text style={styles.textDetail}>Province</Text>
                        <TextInput
                            style={styles.textInput}
                        />
                    </View>
                    <View style={styles.viewFormInput}>
                        <Text style={styles.textDetail}>พิกัด</Text>
                        <TextInput
                            style={styles.textInput}
                        />
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <TouchableHighlight
                        style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                        onPress={() => {
                            setModalVisible(!modalVisible);
                        }}
                        >
                            <Text style={styles.textStyle}>บันทึก</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                        style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                        onPress={() => {
                            setModalVisible(!modalVisible);
                        }}
                        >
                            <Text style={styles.textStyle}>ยกเลิก</Text>
                        </TouchableHighlight>
                    </View>
                {/* </ScrollView> */}
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  scrollViews:{
    // flexGrow: 1,
    flex: 1,
    // justifyContent: 'space-between'
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    width:'90%',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  textDetail:{
    fontSize:20,
    marginRight:10
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  textInput:{
      borderRadius:10,
      height: 40, 
      borderColor: 'gray', 
      borderWidth: 1, 
      flex:1
  },
  viewFormInput:{
    flexDirection:'row'
  }
});

export default App;
