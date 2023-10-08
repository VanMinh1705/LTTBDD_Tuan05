import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Checkbox } from "react-native-paper";

export default function C() {
  return (
    <View style={styles.container}>
      <View style={styles.background_in}>
        <Text style={styles.header}>
          PASSWORD <br />
          GENERATOR
        </Text>

        <View style={styles.InputPassword}>
          <TextInput style={styles.txtPassword} />
        </View>

        <View
          style={{ flexDirection: "row", marginTop: 10, alignItems: "center" }}
        >
          <Text style={styles.InputText}>Password length</Text>
          <TextInput style={styles.txtlength}></TextInput>
        </View>

        <View
          style={{ flexDirection: "row", marginTop: 15, alignItems: "center" }}
        >
          <Text style={styles.InputText}>Include lower case letters</Text>
          <Checkbox.Item status="checked" color="white" />
        </View>

        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <Text style={styles.InputText}>Include upcase letters</Text>
          <Checkbox.Item status="unchecked" color="white" />
        </View>

        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <Text style={styles.InputText}>Include number</Text>
          <Checkbox.Item status="checked" color="white" />
        </View>

        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <Text style={styles.InputText}>Include special symbol</Text>
          <Checkbox.Item status="unchecked" color="white" />
        </View>

        <View style={{ alignItems: "center" }}>
          <TouchableOpacity style={styles.btnGenerate}>
            <Text style={styles.txtGenerate}>GENERATE PASSWORD</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3B3B98",
    alignItems: "center",
    justifyContent: "center",
  },
  background_in: {
    width: "322px",
    height: "605px",
    borderRadius: "15px",
    backgroundColor: "#23235B",
  },
  header: {
    marginTop: 25,
    fontWeight: 700,
    fontSize: 25,
    textAlign: "center",
    color: "#FFFFFF",
  },
  InputPassword: {
    paddingTop: "40px",
    alignItems: "center",
  },
  txtPassword: {
    width: "297px",
    height: "55px",
    backgroundColor: "#151537",
    paddingLeft: "40px",
  },

  InputText: {
    marginTop: 25,
    marginLeft: 15,
    fontSize: 20,
    fontWeight: 700,
    color: "white",
  },
  txtlength: {
    marginTop: 25,
    marginLeft: 25,
    width: 118,
    height: 33,
    backgroundColor: "#FFFFFF",
  },
  btnGenerate: {
    marginTop: 25,
    width: "300px",
    height: "50px",
    backgroundColor: "#3B3B98",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  txtGenerate: {
    color: "white",
    fontWeight: 700,
    fontSize: 21,
    textAlign: "center",
  },
});
