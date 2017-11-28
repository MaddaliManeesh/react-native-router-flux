import React, { Component } from "react";
import {
  Image,
  Picker,
  AppRegistry,
  Button,
  Text,
  View,
  TextInput,
  StyleSheet,
  Alert,
  TouchableHighlight,
  ScrollView,
  FlatList
} from "react-native";
import { Avatar, SocialIcon, Icon, CheckBox } from "react-native-elements";

export default class CompletedListItem extends Component {
  state = { activeid: this.props.type2.id };
  render() {
    return (
      <View
        style={{ flexDirection: "row", justifyContent: "space-between" }}
        key={this.props.index}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            padding: 7,
            paddingLeft: 30,
            marginBottom: 5
          }}
          key={this.props.index}
        >
          <Image
            style={{ width: 25, height: 25 }}
            source={{
              uri: "https://maxcdn.icons8.com/Share/icon/Data//list1600.png"
            }}
          />
          <Text
            style={{
              fontSize: 20,
              fontFamily: "sans-serif-light",
              paddingLeft: 10,
              color: "black",
              textDecorationLine: "line-through"
            }}
          >
            {this.props.type2.text}
          </Text>
        </View>
        <Icon
          name="delete"
          color="#2196F3"
          underlayColor="skyblue"
          style={{ padding: 10 }}
          onPress={() => {
            this.props.delete(this.props.type2);
          }}
        />
      </View>
    );
  }
}
