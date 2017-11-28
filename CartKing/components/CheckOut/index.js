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
import { Actions } from "react-native-router-flux";
import CartItem from "../../store/CartItem";
@observer
export default class Checkout extends Component {
  cartRender = () => {
    let checkout = cartStore.cart.map(eachCartItem => {
      return (
        <View key={eachCartItem.id}>
          <View style={styles.cart}>
            <View style={{ flexDirection: "column" }}>
              <Text style={{ fontSize: 20 }}>{eachCartItem.text}</Text>
              <Text style={{ fontSize: 20, color: "black" }}>
                ₹{eachCartItem.mrp}
              </Text>
              <Text style={{ fontSize: 20 }}>Color:-{eachCartItem.color}</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              {/* <View style={{ marginLeft: 90 }}>
                <Icon
                  name="delete"
                  onPress={() => {
                    cartStore.onDelete(eachCartItem);
                    cartStore.checkCart();
                  }}
                  color="blue"
                />
              </View> */}
              <Image
                source={{ uri: eachCartItem.uri }}
                style={{ width: 60, height: 60 }}
              />
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontSize: 17, color: "black" }}>
                  Quantity:-{eachCartItem.Quantity}
                </Text>
              </View>
            </View>
          </View>
        </View>
      );
    });
    return checkout;
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.TopCheckoutMargin}>
          <Icon
            onPress={() => Actions.cart1()}
            name="arrow-back"
            color="white"
            underlayColor="deepskyblue"
            style={{ paddingRight: 4 }}
          />
          <Text style={styles.cartking}>SUMMARY</Text>
        </View>
        <ScrollView style={styles.mainContainer}>
          <View>{this.cartRender()}</View>
        </ScrollView>
      </View>
    );
  }
}
