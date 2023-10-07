import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useState } from "react";
import { TextInput } from "react-native";

const A = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const onChangeName = (text) => {
    setName(text);
  };
  const onChangePassword = (text) => {
    setPassword(text);
  };

  const onClick = () => {
    if (name === "" || password === "") {
      return alert("Vui long nhap day du thong tin");
    } else if (name === "admin" && password === "admin") {
      alert("Dang nhap thanh cong");
      return alert("Name: " + name + "\nPassword: " + password);
    } else {
      return alert("Dang nhap that bai");
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text
          style={{
            textAlign: "center",
            fontSize: "30px",
            fontWeight: 700,
            right: "120px",
            marginTop: "75px",
          }}
        >
          LOGIN
        </Text>
        <View style={styles.sectionInputName}>
          <Image
            style={{ width: "32px", height: "32px" }}
            source={require("../assets/avatar_user.png")}
          />
          <TextInput
            value={name}
            onChangeText={setName}
            style={styles.inputName}
            placeholder="Name"
          />
        </View>
        <View style={styles.sectionInputPass}>
          <Image
            style={{ width: "32px", height: "32px" }}
            source={require("../assets/lock.png")}
          />
          <TextInput
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
            style={styles.inputPass}
            placeholder="Password"
          />
          <Image
            style={{ width: "32px", height: "32px", left: "250px" }}
            source={require("../assets/eye.png")}
          />
        </View>
        <TouchableOpacity style={styles.btnLogin}>
          <Text
            onPress={onClick}
            style={{
              color: "#fff",
              textAlign: "center",
              fontSize: "20px",
              fontWeight: 700,
            }}
          >
            LOGIN
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            textAlign: "center",
            fontSize: "20px",
            fontWeight: 700,
            marginTop: "45px",
          }}
        >
          Forgot your password?
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default A;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    width: "360px",
    height: "640px",
    border: "1px solid #000",
    backgroundImage: "linear-gradient(180deg, #FBCB00 0%, #BF9A00 100%)",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    alignItems: "center",
  },
  sectionInputName: {
    width: "330px",
    height: "54px",
    border: "1px solid var(--Gray-6, #F2F2F2)",
    backgroundColor: "rgba(196, 196, 196, 0.30)",
    flexDirection: "row",
    alignItems: "center",
    marginTop: "82px",
  },
  inputName: {
    width: "330px",
    height: "54px",
    position: "absolute",
    paddingLeft: "45px",
    fontSize: "18px",
    fontWeight: 400,
  },
  sectionInputPass: {
    width: "330px",
    height: "54px",
    border: "1px solid var(--Gray-6, #F2F2F2)",
    backgroundColor: "rgba(196, 196, 196, 0.30)",
    flexDirection: "row",
    alignItems: "center",
    marginTop: "20px",
  },
  inputPass: {
    width: "330px",
    height: "54px",
    position: "absolute",
    paddingLeft: "45px",
    fontSize: "18px",
    fontWeight: 400,
  },
  btnLogin: {
    borderRadius: "2px",
    backgroundColor: "#060000",
    width: "330px",
    height: "45px",
    padding: "6px",
    marginTop: "59px",
  },
});
