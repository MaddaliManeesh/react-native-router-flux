// import React from 'react';
// import {View, Text, StyleSheet} from "react-native";
// import Button from "react-native-button";
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#F5FCFF",
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: "center",
//     margin: 10,
//   },
//   instructions: {
//     textAlign: "center",
//     color: "#333333",
//     marginBottom: 5,
//   },
// });

// export default class extends React.Component {
//   static onEnter = () => {
//     Actions.refresh({
//       title: 'Login!',
//       rightTitle: 'rightTitle',
//       onRight: () => {},
//     });
//   };

//   render() {
//     const title = this.props.title || 'No Title';
//     const data = this.props.data || 'No Data';
//     console.log("Login RENDER");
//     return (
//       <View style={[styles.container, this.props.style]}>
//         <Text>Login page 1</Text>
//         <Text>Title: {title}</Text>
//         <Text>Data: {data}</Text>
//         <Button onPress={() => Actions.loginModal2({data: "Custom data2", title: "Custom title2"})}>Login 2</Button>
//         <Button onPress={() => Actions.refresh({title: "Changed title", data: "Changed data"})}>Change title</Button>
//         <Button onPress={Actions.pop}>Back</Button>
//       </View>
//     );
//   }
// }

import React from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableHighlight,
  ScrollView
} from "react-native";
import { Actions } from "react-native-router-flux";

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color1: "black"
    };
  }
  render() {
    return (
      <ScrollView style={{ backgroundColor: "white" }}>
        <View
          style={{
            alignItems: "center",
            padding: 10,
            borderBottomWidth: 0.5,
            borderBottomColor: "rgba(0,0,0,0.25)"
          }}
        >
          <Image source={require("../images/quickbytz.png")} />
        </View>
        <View style={{ alignItems: "center", padding: 40 }}>
          <Text style={{ color: "black" }}>Login to your account. </Text>
        </View>
        <View style={{ paddingLeft: 20, paddingRight: 20, paddingBottom: 5 }}>
          <Text style={{ color: "rgba(0,0,0,0.75)", paddingLeft: 2 }}>
            EMAIL ADDRESS / MOBILE NUMBER
          </Text>
          <TextInput />
        </View>
        <View style={{ paddingLeft: 20, paddingBottom: 5, paddingRight: 20 }}>
          <Text style={{ color: "rgba(0,0,0,0.75)", paddingLeft: 2 }}>
            PASSWORD
          </Text>
          <TextInput secureTextEntry={true} />
        </View>
        <View
          style={{
            borderWidth: 0.5,
            marginLeft: 22,
            marginRight: 22,
            marginTop: 30,
            borderColor: this.state.color1
          }}
        >
          <TouchableHighlight
            onPress={Actions.Login2}
            underlayColor="rgba(0,0,0,0)"
          >
            <View style={{ alignItems: "center" }}>
              <Text style={{ color: "black", margin: 10 }}>LOGIN</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style={{ alignItems: "center", paddingTop: 40 }}>
          <Text style={{ color: "rgba(0,0,0,0.75)" }}>
            FORGOT YOUR PASSWORD? RECOVER.
          </Text>
        </View>
        <View style={{ alignItems: "center", paddingTop: 30 }}>
          <Text style={{ color: "rgba(0,0,0,0.75)" }}>
            NOT A USER? REGISTER HERE.
          </Text>
        </View>
        <View style={{ marginTop: 100 }}>
          <View
            style={{
              alignItems: "center",
              backgroundColor: "rgb(59,89,152)"
            }}
          >
            <Text style={{ color: "white", padding: 20 }}>
              LOG IN WITH FACEBOOK
            </Text>
          </View>
          <View
            style={{ alignItems: "center", backgroundColor: "rgb(208,1,27)" }}
          >
            <Text style={{ color: "white", padding: 20 }}>
              LOG IN WITH GOOGLE
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}
