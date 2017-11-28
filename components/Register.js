// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
import { Actions } from "react-native-router-flux";
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
// });

// export default class Register extends React.Component {
//   render() {
//     return <View style={styles.container}>
//       <Text>Register page</Text>
//       <Button onPress={()=>Actions.register2()}>Register</Button>
//       <Button onPress={Actions.home}>Replace screen</Button>
//       <Button onPress={Actions.pop}>Back</Button>
//     </View>
//   }
// }

import CompletedListItem from "./CompletedListItem";
import ListItems from "./ListItems";

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
import Home from "./Home";

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subList: "",
      list: "",
      listStore: [],
      Listid: 0,
      subListid: 0,
      activeid: 0
    };
  }

  toAdd = () => {
    // let newObject = { id: this.state.id, text: this.state.list };
    if (this.state.list.length > 0) {
      let newObject = {
        Listid: this.state.Listid,
        text: this.state.list,
        subListStore: [],
        showSubLists: false,
        completedSublistStore: []
      };
      // let newObject = this.state.list;
      let previousArray = this.state.listStore;
      previousArray.push(newObject);
      this.setState({
        listStore: previousArray,
        Listid: this.state.Listid + 1,
        showTextInput: !this.state.showTextInput,
        list: "",
        index: 0
      });
    }
  };

  toAddSubList = type => {
    if (this.state.subList.length > 0) {
      let subListObject = {
        subListid: this.state.subListid,
        text: this.state.subList
      };
      type.subListStore.push(subListObject);
      this.setState({
        // subListStore: [subListObject, ...array],
        showSubLists: !this.state.showSubLists,
        subList: "",
        subListid: this.state.subListid + 1
      });
    }
  };

  onhandleChange = text => {
    this.setState({ list: text });
  };

  renderTextInput = () => {
    //showing lists
    if (this.state.showTextInput) {
      return (
        <View style={{ padding: 20, paddingTop: 0 }}>
          <TextInput
            onChangeText={text => this.onhandleChange(text)}
            value={this.state.list}
          />
          <Button onPress={this.toAdd} title="Add" color="#841584" />
        </View>
      );
    }
    return null;
  };
  toggleShowInput = () => {
    this.setState({ showTextInput: !this.state.showTextInput });
  };
  //State =====> setState()
  toggleShowSub = type => {
    // let newListStore = this.state.listStore.slice();
    // newListStore.map((eachnewList, index) => {
    //   if (type.Listid === eachnewList.Listid) {
    //     eachnewList.showSubLists = !eachnewList.showSubLists;
    //   }
    //   if (type.Listid !== eachnewList.Listid) {
    //     eachnewList.showSubLists = false;
    //   }
    // });
    // this.setState({
    //   listStore: newListStore
    // });

    this.setState({ activeid: type.Listid });
  };
  //destructuring
  onSublistDelete = type2 => {
    let newlistStore1 = this.state.listStore.slice();
    newlistStore1.map((newList, index) => {
      let { id, text, sublistStore } = newList;
      const Delete1 = newList.completedSublistStore.filter(
        object => object !== type2
      );
      newList.completedSublistStore = Delete1;
    });
    this.setState({ listStore: newlistStore1 });
  };

  //... - spread operator
  onAddCompletedList = (type, type1) => {
    // alert(type1.subListid + "Ma");
    let newlistStore2 = this.state.listStore.slice();
    newlistStore2.map((newList, index) => {
      if (newList.Listid === type.Listid) {
        const Add = newList.subListStore.filter(
          object => object.subListid === type1.subListid
        );
        newList.completedSublistStore = [
          Add[0],
          ...newList.completedSublistStore
        ];
      }
    });
    this.setState({ listStore: newlistStore2 });
  };
  renderListOfItems = type => {
    //maping of subListstore
    let values = type.subListStore.map((type1, index) => {
      return (
        <SubListItems
          type={type}
          type1={type1}
          index={index}
          completedList={this.onAddCompletedList}
        />
      );
    });
    return values;
  };

  renderCompletedListitems = type => {
    // alert(type.completedSublistStore.length + "mANESSH");
    let completedValues = type.completedSublistStore.map((type2, index) => {
      return (
        <CompletedListItem
          type2={type2}
          index={index}
          delete={this.onSublistDelete}
        />
      );
    });
    return completedValues;
  };

  onDelete = type => {
    const Delete = this.state.listStore.filter(object => object !== type);
    this.setState({ listStore: Delete });
  };

  subLists = type => {
    //subLists view
    // alert(this.state.activeid);
    if (this.state.activeid === type.Listid) {
      return (
        <View style={{ padding: 10 }}>
          <TextInput
            onChangeText={text => this.setState({ subList: text })}
            value={this.state.subList}
          />
          <Button
            onPress={() => {
              this.toAddSubList(type);
            }}
            title="Add Sub List"
            color="cornflowerblue"
          />
          {this.renderListOfItems(type)}
          {this.renderCompletedListitems(type)}
        </View>
      );
    }
  };
  render() {
    var ListCall = this.state.listStore.map((type, index) => {
      //mapping of lists
      return (
        <ListItems
          type={type}
          index={index}
          toggleShowSub={this.toggleShowSub}
          onDelete={this.onDelete}
          subLists={this.subLists}
          activeid={this.state.activeid}
        />
      );
    });
    return (
      //Main Screen
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "darkseagreen",
            width: 400,
            height: 60,
            alignItems: "center"
          }}
        >
          <Avatar
            small
            rounded
            title="M"
            containerStyle={{ backgroundColor: "#2196f3", margin: 5 }}
          />
          <Text style={{ color: "white", fontSize: 20 }}>Maneesh</Text>
        </View>
        <View>{ListCall}</View>
        <View>
          <TouchableHighlight
            onPress={this.toggleShowInput}
            underlayColor="aliceblue"
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                padding: 10,
                paddingTop: 20,
                paddingBottom: 20,
                marginBottom: 5
              }}
            >
              <Avatar
                title="+"
                overlayContainerStyle={{ backgroundColor: "rgba(0,0,0,0)" }}
                titleStyle={{ fontSize: 30, color: "#2196f3" }}
                activeOpacity={0.1}
              />
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: "sans-serif-light",
                  paddingLeft: 10,
                  color: "#2196f3"
                }}
              >
                Create List
              </Text>
            </View>
          </TouchableHighlight>
          {this.renderTextInput()}
        </View>
      </ScrollView>
    );
  }
}

const SubListItems = props => {
  return (
    <View
      style={{ flexDirection: "row", justifyContent: "space-between" }}
      key={props.index}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          padding: 7,
          marginBottom: 5
        }}
        key={props.index}
      >
        <CheckBox
          onPress={() => props.completedList(props.type, props.type1)}
        />
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
          {props.type1.text}
        </Text>
      </View>
    </View>
  );
};
