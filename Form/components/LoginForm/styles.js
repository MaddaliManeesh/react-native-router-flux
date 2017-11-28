import { StyleSheet } from "react-native";

export default StyleSheet.create({
  ScrollView: {
    flex: 1,
    backgroundColor: "white"
  },
  Heading: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "skyblue",
    padding: 10
  },
  Form: {
    fontSize: 20,
    color: "black"
  },
  Input: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.25)",
    justifyContent: "center",
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: "rgba(0,0,0,0.02)",
    width: 280
  },

  selectGender: {
    fontSize: 15
  },
  selectGenderView: {
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10
  }
});
