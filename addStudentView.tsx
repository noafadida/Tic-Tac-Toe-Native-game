import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
  } from "react-native";
  import { useState } from "react";
  
  const App2 = () => {
    console.log("My app is running");
    const onPressCallback = () => {
      console.log("button was pressed");
    };
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    return (
      <View style={styles.container}>
        <Image
          source={require("./assets/profile-user.png")}
          style={styles.userIcon}
        ></Image>
        <TextInput
          style={styles.input}
          onChangeText={setId}
          value={id}
          placeholder={"Student Id"}
        ></TextInput>
        <TextInput
          style={styles.input}
          onChangeText={setName}
          value={name}
          placeholder={"Student Name"}
        ></TextInput>
        <TextInput
          style={styles.input}
          onChangeText={setAddress}
          value={address}
          placeholder={"Student Address"}
        ></TextInput>
        <View style={styles.buttonesContainer}>
          <TouchableOpacity onPress={onPressCallback} style={styles.button}>
            <Text style={styles.buttonText}>CANCLE</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPressCallback} style={styles.button}>
            <Text style={styles.buttonText}>SAVE</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  export default App2;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 70,
    },
    userIcon: {
      backgroundColor: "white",
      height: 250,
      resizeMode: "contain",
      alignSelf: "center",
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius:5
    },
    buttonesContainer: {
      flexDirection: "row",
    },
    button: {
      flex: 1,
      margin: 12,
      padding: 12,
      backgroundColor: "black",
      borderRadius:10
    },
    buttonText: {
      textAlign: "center",
      color:"white"
    }
  });
  