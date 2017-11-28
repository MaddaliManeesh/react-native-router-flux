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
export default class Cart1 extends Component {
  constructor() {
    super();
    noCart: "";
  }

  cartRender = () => {
    let cartRender = cartStore.cart.map(eachCartItem => {
      return (
        <View style={styles.cart} key={eachCartItem.id}>
          <View style={{ flexDirection: "column" }}>
            <Text style={{ fontSize: 20 }}>{eachCartItem.text}</Text>
            <Text style={{ fontSize: 20, color: "black" }}>
              ₹{eachCartItem.mrp}
            </Text>
            <Picker
              selectedValue={eachCartItem.color}
              onValueChange={itemValue => {
                eachCartItem.setColor(itemValue);
              }}
              mode="dropdown"
            >
              <Picker.Item label="Red" value="red" />
              <Picker.Item label="Black" value="black" />
              <Picker.Item label="Green" value="green" />
            </Picker>
          </View>
          <View>
            <View style={{ marginLeft: 90 }}>
              <Icon
                name="delete"
                onPress={() => {
                  cartStore.onDelete(eachCartItem);
                  cartStore.checkCart();
                }}
                color="blue"
              />
            </View>
            <Image
              source={{ uri: eachCartItem.uri }}
              style={{ width: 60, height: 60 }}
            />
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontSize: 17, color: "black" }}>Quantity</Text>
              <Picker
                selectedValue={eachCartItem.Quantity}
                onValueChange={itemValue => {
                  cartStore.checkQuantity(itemValue, eachCartItem);
                  if (cartStore.toaddQuantity) {
                    eachCartItem.setQuantity(itemValue);
                  }
                }}
                enabled={eachCartItem.QuantityFix}
                mode="dropdown"
                style={{ width: 45, height: 35 }}
              >
                <Picker.Item label="1" value={1} />
                <Picker.Item label="2" value={2} />
                <Picker.Item label="3" value={3} />
                <Picker.Item label="4" value={4} />
                <Picker.Item label="5" value={5} />
                <Picker.Item label="6" value={6} />
              </Picker>
            </View>
          </View>
        </View>
      );
    });
    return cartRender;
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <View style={styles.TopCartMargin}>
          <Icon
            onPress={() => Actions.cart()}
            name="arrow-back"
            color="white"
            underlayColor="deepskyblue"
            style={{ paddingRight: 4 }}
          />
          <Text style={styles.cartking}>MY CART</Text>
          <Icon
            name="delete-forever"
            onPress={() => {
              cartStore.Reset();
              cartStore.checkCart();
            }}
            color="white"
            type="MaterialCommunityIcons"
          />
        </View>
        <ScrollView
          style={{
            flexDirection: "column",
            backgroundColor: "rgba(0,0,0,0.25)"
          }}
          showsVerticalScrollIndicator={false}
        >
          <View>
            <View>{this.cartRender()}</View>
          </View>
        </ScrollView>
        <View style={styles.total}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View>
              <Text style={{ fontSize: 25, color: "black" }}>
                TOTAL : ₹{cartStore.totalPrice}
              </Text>
              <Text>Number of items {cartStore.totalQuantity}</Text>
            </View>
            <View style={styles.checkout}>
              <TouchableHighlight
                onPress={() => Actions.checkout()}
                underlayColor="orange"
              >
                <Text style={{ color: "white", fontSize: 15, margin: 10 }}>
                  CHECKOUT
                </Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
        <View style={styles.emptyCart}>
          <Text style={{ fontSize: 20, color: "blue" }}>
            {cartStore.noCart}
          </Text>
        </View>
      </View>
    );
  }
}
