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

export default class ListItems extends Component {
  shouldComponentUpdate(nextProps) {
    if (this.props.type.Listid === nextProps.activeid) {
      alert("MAneesh");
      return true;
    }
    return false;
  }
  render() {
    return (
      <View key={this.props.index}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableHighlight
            onPress={() => this.props.toggleShowSub(this.props.type)}
            underlayColor="#2196f3"
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                padding: 7,
                marginBottom: 5
              }}
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
                  color: "black"
                }}
              >
                {this.props.type.text}
              </Text>
            </View>
          </TouchableHighlight>
          <Icon
            name="delete"
            color="#2196F3"
            underlayColor="skyblue"
            style={{ padding: 10 }}
            onPress={() => {
              this.props.onDelete(this.props.type);
            }}
          />
        </View>
        {this.props.subLists(this.props.type)}
      </View>
    );
  }
}
