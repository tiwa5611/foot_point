import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput, Dimensions, TouchableOpacity} from 'react-native';

width = Dimensions.get('window').width
height = Dimensions.get('window').height

export default class Forminput extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
            <View>
                <Text style={styles.textHeader}>ชื่อร้าน</Text>
                <TextInput
                  style={styles.textInput}
                />
            </View>
            <View>
                <Text style={styles.textHeader}>Categories</Text>
                <TextInput
                  style={styles.textInput}
                />
            </View>
            <View>
                <Text style={styles.textHeader}>รายละเอียดสินค้า</Text>
                <TextInput
                  style={styles.textInput}
                />
            </View>
            <View >
                <Text style={styles.textHeader}>Studen ID.</Text>
                <TextInput
                  style={styles.textInput}
                />
            </View>
            <View >
                <Text style={styles.textHeader}>ชื่อ</Text>
                <TextInput
                  style={styles.textInput}
                />
            </View>
            <View>
                <Text style={styles.textHeader}>Tel</Text>
                <TextInput
                  style={styles.textInput}
                />
            </View>
            <View>
                <Text style={styles.textHeader}>Line ID.</Text>
                <TextInput
                  style={styles.textInput}
                />
            </View>
            <View>
                <Text style={styles.textHeader}>Province</Text>
                <TextInput
                  style={styles.textInput}
                />
            </View>
            <View>
                <Text style={styles.textHeader}>พิกัด</Text>
                <TextInput
                  style={styles.textInput}
                />
            </View>
            <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', marginTop:20}}>
              <TouchableOpacity style={styles.buttonSuccess} activeOpacity={0.5}>
                <Text>บันทึก</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonCancel} activeOpacity={0.5}>
                <Text>ยกเลิก</Text>
              </TouchableOpacity>
            </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        margin:20
    },
    textHeader:{
      fontSize:width*0.05
    },
    textInput: {
      borderWidth:2,
      borderColor:'skyblue',
      padding:0,
      borderRadius:5,
      height:height*0.07
    },
    buttonSuccess: {
      backgroundColor:'#2ecc71',
      height:50,
      width:80,
      borderRadius:5,
      justifyContent:'center', 
      alignItems:'center',
      marginRight:10

    },
    buttonCancel: {
      backgroundColor:'#e74c3c',
      height:50,
      width:80,
      borderRadius:5,
      justifyContent:'center', 
      alignItems:'center',
      marginLeft:10

    }
})