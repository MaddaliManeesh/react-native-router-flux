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
  FlatList,
  Modal
} from "react-native";
import { Avatar, SocialIcon, Icon, CheckBox } from "react-native-elements";
import { observer } from "mobx-react/native";
import { observable } from "mobx";
import cartStore from "../../store/ItemStore";
import styles from "../styles.js";
import cart from "../Cart";
import { Actions } from "react-native-router-flux";
@observer
export default class WishList extends Component {
  WishList = () => {
    let RenderItems = cartStore.Items.map(eachItem => {
      if (eachItem.wishList) {
        return (
          <View key={eachItem.id} style={styles.border}>
            <View style={{ flexDirection: "row" }}>
              <Image
                source={{ uri: eachItem.uri }}
                style={{ width: 70, height: 70 }}
              />
              <View>
                <Text style={{ fontSize: 20 }}>{eachItem.text}</Text>
                <Text style={{ fontSize: 20, color: "black" }}>
                  ₹{eachItem.mrp}
                </Text>
              </View>
            </View>
            <View style={styles.button}>
              <Button
                title={eachItem.ButtonText}
                onPress={() => {
                  if (eachItem.ButtonText === "ADD TO CART") {
                    cartStore.addCart(eachItem);
                    cartStore.checkwishList(eachItem);
                    if (eachItem.wishList) {
                      eachItem.wishColor = "red";
                    } else {
                      eachItem.wishColor = "rgba(0,0,0,0.1)";
                    }
                  } else {
                    alert("Already in cart");
                    Actions.cart1();
                  }
                }}
              />
            </View>
          </View>
        );
      }
    });
    return RenderItems;
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.TopCheckoutMargin}>
          <Icon
            onPress={() => Actions.cart()}
            name="arrow-back"
            color="white"
            underlayColor="deepskyblue"
            style={{ paddingRight: 4 }}
          />
          <Text style={styles.cartking}>WISHLIST</Text>
        </View>
        <ScrollView style={styles.mainContainer}>
          <View>{this.WishList()}</View>
        </ScrollView>
      </View>
    );
  }
}
