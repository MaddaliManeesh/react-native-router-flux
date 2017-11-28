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
class Cart extends Component {
  constructor() {
    super();
  }

  onChangeButtonText = eachItem => {
    eachItem.ButtonText = "GO TO CART";
  };
  render() {
    let RenderItems = cartStore.Items.map(eachItem => {
      return (
        <View key={eachItem.id} style={styles.border}>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={{ uri: eachItem.uri }}
              style={{ width: 70, height: 70 }}
            />
            <View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignContent: "space-between"
                }}
              >
                <Text style={{ fontSize: 20 }}>{eachItem.text}</Text>
              </View>
              <Text style={{ fontSize: 20, color: "black" }}>
                ₹{eachItem.mrp}
              </Text>
            </View>
          </View>
          <View style={styles.button}>
            <Icon
              name="heart"
              type="material-community"
              color={eachItem.wishColor}
              reverseColor="red"
              onPress={() => {
                cartStore.checkwishList(eachItem);
                if (eachItem.wishList) {
                  eachItem.wishColor = "red";
                } else {
                  eachItem.wishColor = "rgba(0,0,0,0.1)";
                }
              }}
            />
            <Button
              title={eachItem.ButtonText}
              onPress={() => {
                if (eachItem.ButtonText === "ADD TO CART") {
                  cartStore.addCart(eachItem);
                  this.onChangeButtonText(eachItem);
                } else {
                  cartStore.checkCart();
                  Actions.cart1();
                }
              }}
            />
          </View>
        </View>
      );
    });
    return (
      <ScrollView
        style={styles.mainContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.TopMargin}>
          <Text style={styles.cartking}>CARTKING</Text>
          <View style={{ flexDirection: "row" }}>
            <Icon
              name="heart"
              type="material-community"
              color="white"
              reverseColor="red"
              onPress={() => {
                Actions.wishlist();
              }}
              containerStyle={{ marginRight: 10 }}
            />
            <Icon
              name="shopping-cart"
              color="white"
              onPress={() => {
                Actions.cart1();
                cartStore.checkCart();
              }}
              underlayColor="deepskyblue"
            />
          </View>
        </View>
        <View>{RenderItems}</View>
      </ScrollView>
    );
  }
}
export default Cart;
