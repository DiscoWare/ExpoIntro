import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity,
         View, TextInput, Modal, ImageBackground, KeyboardAvoidingView } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import logo from './assets/logomedium.png';
import splash from './assets/splash.png'
import bgImg from './assets/bg.png'
import { enableScreens } from 'react-native-screens';
enableScreens();

export default function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName]   = useState("");
  const [email, setEmail]         = useState("");
  const [password, setPassword]   = useState("");
  const [modalVisible, setModalState] = useState(false);

const loginModal = () => {
    modalString = firstName !== "" && lastName !== "" && email !== ""
                  && password !== "" ? "Success!" : "Fail!";
    return (
      <Modal
        presentationStyle="overFullScreen"
        animationType='fade'
        transparent={false}
        visible={modalVisible}
      >
        <View style={styles.modal}>
          <Text>{modalString}</Text>
          <TouchableOpacity
            onPress={() => setModalState(!modalVisible)}
            style={styles.button}>
            <Text style={styles.buttonText}>Okay!</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    )
}
  return (
    <ImageBackground source={bgImg} style={styles.bg}>
       <LinearGradient
          style={styles.linearGradient}
          colors={["rgba(0, 0, 0, 0)", "#000000"]}
        />
      <KeyboardAvoidingView
          style={{alignItems: "center"}}
          behavior={Platform.OS == "ios" ? "position" : "height"}
          keyboardVerticalOffset={-75}
      >
        <View style={styles.container}>

          {loginModal()}

          <Image source={logo} style={styles.logo} />

          <View style={styles.inputs}>
            <Text style={styles.txt}> First Name </Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => setFirstName(text)}/>
            <Text style={styles.txt}> Last Name </Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => setLastName(text)}/>
            <Text style={styles.txt}> Email </Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => setEmail(text)}/>
            <Text style={styles.txt}> Password </Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => setPassword(text)}/>
          </View>

          <TouchableOpacity
            onPress={() => setModalState(true)}
            style={styles.button}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
          
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: {
    width: "100%",
    flex: 1,
  },
  linearGradient: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
  alignItems: "center",
  },
  txt: {
    color: '#fff',
    textAlign: "left",
    borderRadius: 10,
    borderColor: "#fff",
    alignItems: "baseline"
  },
  logo: {
    width: 217,
    height: 47,
    marginBottom: 10,
    alignItems: "center"
  },
  button: {
    backgroundColor: "#312222",
    padding: 20,
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  input: {
    color: '#bbb',
    backgroundColor: '#312222',
    alignItems: "baseline",
    padding: 8,
    margin: 10,
    height: 50,
    width: 300,
    borderRadius: 15,
  },
  inputs: {
    margin: 20,
  },
  modal: {
    backgroundColor:"#fff",
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
