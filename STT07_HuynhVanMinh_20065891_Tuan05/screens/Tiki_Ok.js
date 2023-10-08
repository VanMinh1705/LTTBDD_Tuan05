import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Tiki_Ok() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Image
            style={{ width: 104, height: 127 }}
            source={require("../assets/book.png")}
          />
          <View
            style={{ justifyContent: "space-between", flexDirection: "column" }}
          >
            <Text style={styles.Text1}>Nguyên hàm tích phân và ứng dụng</Text>
            <Text style={styles.Text2}>Cung cấp bởi Tiki Trading</Text>
            <Text style={styles.Text3}>141.800 đ</Text>
            <Text style={styles.Text4}>141.800 đ</Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              <TouchableOpacity>
                <Image
                  style={{ width: "14.22px", height: "16px" }}
                  source={require("../assets/btnminus.png")}
                />
              </TouchableOpacity>
              <Text style={{ fontWeight: 700, fontSize: "15px" }}>1</Text>
              <TouchableOpacity>
                <Image
                  style={{ width: "14.22px", height: "16px" }}
                  source={require("../assets/btnadd.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Text
                  style={{
                    fontWeight: 700,
                    fontSize: "15px",
                    color: "#134FEC",
                  }}
                >
                  Mua sau
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.InputText5}>
          <Text style={styles.Text5}>Mã giảm giá đã lưu</Text>
          <TouchableOpacity>
            <Text style={styles.btnWatchHere}>Xem tại đây</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.Apply}>
          <View style={styles.setApply}>
            <Image
              style={{ width: "32px", height: "16px", marginLeft: 15 }}
              source={require("../assets/yellow_block.png")}
            />
            <TextInput style={styles.DiscountCode} placeholder="Mã giảm giá" />
          </View>
          <TouchableOpacity style={styles.btnApply}>
            <Text style={styles.TextApply}>Áp dụng</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.Voucher}>
        <Text style={styles.TextVoucher}>
          Bạn có phiếu quà tặng Tiki/Got it/ Urbox?
        </Text>
        <TouchableOpacity>
          <Text style={styles.btnVoucher}>Nhập tại đây?</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.Estimate}>
        <Text style={styles.TextEstimate}>Tạm tính</Text>
        <Text style={styles.CostEstimate}>141.800 đ</Text>
      </View>

      <View style={styles.Amount}>
        <View style={styles.setAmount}>
          <Text style={styles.TextAmount}>Thành tiền</Text>

          <Text style={styles.TotalAmount}>141.800 đ</Text>
        </View>

        <View style={{ alignItems: "center", marginTop: "10px" }}>
          <TouchableOpacity style={styles.btnOrder}>
            <Text style={styles.TextOrder}>TIẾN HÀNH ĐẶT HÀNG</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C4C4C4",
    alignItems: "center",
    width: "360px",
    height: "640px",
  },
  header: {
    backgroundColor: "white",
    width: "400px",
    height: "283px",
  },
  Text1: {
    fontWeight: 700,
    fontSize: "12px",
    marginTop: "10px",
    lineHeight: 14,
  },
  Text2: {
    fontWeight: 700,
    fontSize: "12px",
    marginTop: "10px",
    lineHeight: 14,
  },
  Text3: {
    color: "#EE0D0D",
    fontWeight: 700,
    fontSize: "18px",
  },
  Text4: {
    color: "#808080",
    fontSize: "12px",
    textDecorationLine: "line-through",
  },
  InputText5: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginRight: "100px",
  },
  Text5: {
    fontWeight: 700,
    fontSize: "15px",
    marginTop: "10px",
  },
  btnWatchHere: {
    fontWeight: 700,
    fontSize: "15px",
    color: "#134FEC",
    marginTop: "10px",
  },
  Apply: {
    marginTop: "50px",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  setApply: {
    width: 208,
    height: 45,
    borderRadius: "2px",
    border: "1px solid var(#808080)",
    backgroundColor: "rgba(196, 196, 196, 0.30)",
    flexDirection: "row",
    alignItems: "center",
  },
  DiscountCode: {
    width: 160,
    height: 45,
    paddingLeft: 20,
    fontSize: 18,
    fontWeight: 700,
  },
  btnApply: {
    backgroundColor: "#0A5EB7",
    justifyContent: "center",
    alignItems: "center",
    width: "99px",
    height: "45px",
  },
  TextApply: {
    fontSize: "20px",
    fontWeight: 700,
    color: "white",
  },
  Voucher: {
    width: 400,
    height: "51px",
    backgroundColor: "white",
    marginTop: "15px",
    flexDirection: "row",
  },
  TextVoucher: {
    fontWeight: 700,
    fontSize: "12px",
    marginTop: "10px",
    marginLeft: "10px",
  },
  btnVoucher: {
    marginLeft: 15,
    fontWeight: 700,
    fontSize: "12px",
    color: "#134FEC",
    marginTop: "10px",
  },
  Estimate: {
    width: 400,
    height: "51px",
    backgroundColor: "white",
    marginTop: "15px",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  TextEstimate: {
    fontWeight: 700,
    fontSize: "20px",
    marginTop: "10px",
    marginLeft: "10px",
  },
  CostEstimate: {
    color: "#EE0D0D",
    fontWeight: 700,
    fontSize: "18px",
    marginTop: "10px",
    marginRight: "10px",
  },
  Amount: {
    width: 400,
    height: "120px",
    backgroundColor: "white",
    marginTop: "120px",
  },
  setAmount: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  TextAmount: {
    fontWeight: 700,
    fontSize: "20px",
    marginTop: "10px",
    marginLeft: "10px",
    color: "#808080",
  },
  TotalAmount: {
    color: "#EE0D0D",
    fontWeight: 700,
    fontSize: "18px",
    marginTop: "10px",
    marginRight: "10px",
  },
  btnOrder: {
    backgroundColor: "#E53935",
    width: "331px",
    height: "45px",
    justifyContent: "center",
    alignItems: "center",
  },
  TextOrder: {
    fontSize: "20px",
    fontWeight: 700,
    color: "white",
  },
});
