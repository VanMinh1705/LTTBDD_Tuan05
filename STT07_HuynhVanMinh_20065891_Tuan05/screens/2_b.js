import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";

export default function B() {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Image
          style={{ width: 70, height: 70, marginTop: 15 }}
          source={require("../assets/usb.png")}
        />
        <Text style={styles.text1}>
          USB Bluetooth Music Receiver <br />
          HJX-001- Biến loa thường thành loa <br />
          bluetooth
        </Text>
      </View>

      <Text style={styles.text2}>Cực kỳ hài lòng</Text>

      <View style={{ flexDirection: "row" }}>
        <Image
          style={{ width: 39, height: 39, marginTop: 15, marginLeft: 15 }}
          source={require("../assets/Star 1.png")}
        />
        <Image
          style={{ width: 39, height: 39, marginTop: 15, marginLeft: 15 }}
          source={require("../assets/Star 2.png")}
        />
        <Image
          style={{ width: 39, height: 39, marginTop: 15, marginLeft: 15 }}
          source={require("../assets/Star 3.png")}
        />
        <Image
          style={{ width: 39, height: 39, marginTop: 15, marginLeft: 15 }}
          source={require("../assets/Star 4.png")}
        />
        <Image
          style={{ width: 39, height: 39, marginTop: 15, marginLeft: 15 }}
          source={require("../assets/Star 5.png")}
        />
      </View>

      <TouchableOpacity style={styles.AddImage}>
        <View style={{ flexDirection: "row" }}>
          <Image
            style={{ width: 39, height: 32 }}
            source={require("../assets/camera.png")}
          />
          <Text
            style={{ fontSize: "18px", fontWeight: 700, textAlign: "center" }}
          >
            {" "}
            Thêm hình ảnh
          </Text>
        </View>
      </TouchableOpacity>

      <View style={styles.ShareYourLike}>
        <TextInput
          style={styles.txtSYL}
          placeholder="Hãy chia sẻ những điều mà bạn thích về sản phẩm"
        />
        <Text
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            fontWeight: 700,
            fontSize: 12,
          }}
        >
          https://meet.google.com/nsj-ojwi-xpp
        </Text>
      </View>

      <TouchableOpacity style={styles.BtnSend}>
        <View>
          <Text
            style={{
              fontSize: "18px",
              fontWeight: 700,
              textAlign: "center",
              color: "white",
            }}
          >
            Gửi
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  text1: {
    marginTop: "15px",
    fontWeight: 700,
    fontSize: 18,
  },
  text2: {
    marginTop: "30px",
    fontWeight: 700,
    fontSize: 18,
  },
  AddImage: {
    width: "293px",
    height: "68px",
    borderRadius: "5px",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "40px",
    border: "1px solid var(--Purple, #1511EB)",
  },
  ShareYourLike: {
    marginTop: "15px",
    width: "289px",
    height: "222px",
    borderRadius: "5px",
    border: "1px solid var(--Gray, #C4C4C4) ",
  },
  txtSYL: {
    fontWeight: 700,
    fontSize: 18,
    lineHeight: 21,
    color: "#C4C4C4",
  },
  BtnSend: {
    backgroundColor: "#0D5DB6",
    width: "289px",
    height: "41px",
    borderRadius: "5px",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "40px",
    border: "1px solid var(#0D5DB6)",
  },
});
