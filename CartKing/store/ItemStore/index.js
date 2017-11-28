import { observable, action, computed } from "mobx";
import CartItem from "../CartItem";
import { Alert } from "react-native";

class Cart {
  @observable Items: Array<CartItem>;
  @observable cart: Array<CartItem>;
  @observable modalVisible: boolean;
  @observable noCart: string;
  @observable toaddQuantity: boolean;

  // @observable mrpStore: number;

  constructor() {
    this.Items = [
      {
        id: 0,
        text: "Headphones",
        uri: "http://pngimg.com/uploads/headphones/headphones_PNG7659.png",
        mrp: 999,
        ButtonText: "ADD TO CART",
        Quantity: 1,

        stock: 4,
        color: "black",
        wishList: false,
        wishColor: "rgba(0,0,0,0.1)"
      },
      {
        id: 1,
        text: "Earphones",
        uri:
          "http://www.freepngimg.com/thumb/headphones/4-headphones-png-image-thumb.png",
        mrp: 599,
        ButtonText: "ADD TO CART",
        Quantity: 1,

        stock: 3,
        color: "black",
        wishList: false,
        wishColor: "rgba(0,0,0,0.1)"
      },
      {
        id: 2,
        text: "Moto G5 plus",
        uri:
          "https://www.motorola.com/sites/default/files/library/storage/products/smartphones/moto-g5-plus-gray-1000.png",
        mrp: 15999,
        ButtonText: "ADD TO CART",
        Quantity: 1,

        stock: 1,
        color: "grey",
        wishList: false,
        wishColor: "rgba(0,0,0,0.1)"
      },
      {
        id: 3,
        text: "Wildcraft Bag",
        uri:
          "http://imgd.bags109.com/media/catalog/product/cache/1/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/8/9/8903338012498_zoom_frontangle.png",
        mrp: 1999,
        ButtonText: "ADD TO CART",
        Quantity: 1,

        stock: 4,
        color: "red",
        wishList: false,
        wishColor: "rgba(0,0,0,0.1)"
      },
      {
        id: 4,
        text: "Puma Shoes",
        uri:
          "http://static.sscontent.com/products/550/puma_faas-300-v4-running-shoes_uk6_blue--white_main.png",
        mrp: 3999,
        ButtonText: "ADD TO CART",
        Quantity: 1,

        stock: 3,
        color: "blue",
        wishList: false,
        wishColor: "rgba(0,0,0,0.1)"
      }
    ];
    this.cart = [];
    this.modalVisible = false;
    this.mrpStore = 0;
    this.noCart = "";
    this.toaddQuantity = true;
  }
  @computed
  get totalPrice() {
    let totalPrice = 0;
    this.cart.map(cartItem => {
      totalPrice = totalPrice + cartItem.mrp * cartItem.Quantity;
    });
    return totalPrice;
  }

  @computed
  get totalQuantity() {
    let quantityCount = 0;
    this.cart.map(object => {
      quantityCount = quantityCount + object.Quantity;
    });
    return quantityCount;
  }

  @action.bound
  addCart(item) {
    let repetition = true;
    for (let i = 0; i < this.cart.length; i++) {
      if (this.cart[i] === item) {
        repetition = false;
      }
    }
    if (repetition) {
      this.cart.push(new CartItem(item));
    }
  }
  // cart = [<CartItem>,<CartItem>,]

  @action.bound
  setModalVisible() {
    this.modalVisible = !this.modalVisible;
  }

  // @action.bound
  // quantityCount(eachCartItem, itemValue) {
  //   let tobeUpdatedItem = this.cart.filter(cartItem => {
  //     cartItem.id === eachCartItem.id;
  //   });
  //   tobeUpdatedItem[0].setQuantity(itemValue);
  //   {
  //     /* eachCartItem.Quantity = itemValue; */
  //   }
  // }

  @action.bound
  onDelete(eachCartItem) {
    this.Items.map(eachObject => {
      if (eachCartItem.id === eachObject.id) {
        eachObject.ButtonText = "ADD TO CART";
      }
    });
    Alert.alert("Delete", "deleting " + eachCartItem.text);
    this.cart = this.cart.filter(object => object !== eachCartItem);
  }

  @action.bound
  Reset() {
    this.cart = [];
    this.Items.map(eachObject => {
      eachObject.ButtonText = "ADD TO CART";
    });
  }

  @action.bound
  checkCart() {
    if (this.cart.length === 0) {
      this.noCart = "Empty Cart";
    } else {
      this.noCart = "";
    }
  }

  @action.bound
  checkQuantity(itemValue, eachCartItem) {
    if (itemValue > eachCartItem.stock) {
      Alert.alert(
        "Stock not available",
        "only " + eachCartItem.stock + " available"
      );
      this.toaddQuantity = false;
    }
    if (itemValue <= eachCartItem.stock) {
      this.toaddQuantity = true;
    }
  }

  @action.bound
  checkwishList(eachItem) {
    eachItem.wishList = !eachItem.wishList;
  }

  // @action.bound
  // Total() {
  //   this.mrpStore = this.mrpStore + this.cart[this.cart.length - 1].mrp;
  // }
  // @action.bound
  // TotalWithQuantity(eachItem) {
  //   this.mrpStore = this.mrpStore + eachItem.mrp * (eachItem.Quantity - 1);
  // }
}

const cartStore = new Cart();
export default cartStore;
