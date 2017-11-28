import { StyleSheet } from "react-native";

export default StyleSheet.create({
  TopMargin: {
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 10
  },
  TopCartMargin: {
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 10
  },
  TopCheckoutMargin: {
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    padding: 10
  },
  mainContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.25)"
  },
  button: {
    alignItems: "flex-end",
    alignContent: "space-between"
  },
  border: {
    margin: 4,
    backgroundColor: "white",
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  cartking: {
    fontSize: 20,
    color: "white",
    fontFamily: "bold"
  },

  cart: {
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "white",
    margin: 3,
    padding: 5,
    borderRadius: 5
  },

  total: {
    // position: "absolute",
    // top: 450,
    // bottom: 0,
    // right: 0,
    // left: 0,
    backgroundColor: "aliceblue"
  },
  checkout: {
    backgroundColor: "darkorange",
    justifyContent: "center",
    margin: 3,
    marginLeft: 30,
    borderRadius: 5
  },
  emptyCart: {
    position: "absolute",
    top: 230,
    bottom: 0,
    left: 110,
    right: 0
  }
});
