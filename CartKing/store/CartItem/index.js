import { observable, action } from "mobx";

class CartItem {
  @observable id: number;
  @observable text: string;
  @observable uri: string;
  @observable mrp: number;
  @observable ButtonText: string;
  @observable Quantity: number;
  @observable stock: number;
  @observable color: string;
  @observable wishList: boolean;
  @observable wishColor: string;

  constructor(item) {
    this.id = item.id;
    this.text = item.text;
    this.uri = item.uri;
    this.mrp = item.mrp;
    this.ButtonText = item.ButtonText;
    this.Quantity = item.Quantity;
    this.stock = item.stock;
    this.color = item.color;
    this.wishList = item.wishList;
    this.wishColor = item.wishColor;
  }

  @action.bound
  setId(id: number) {
    this.id = id;
  }

  @action.bound
  setText(text: string) {
    this.text = text;
  }
  @action.bound
  setUri(uri: string) {
    this.uri = uri;
  }
  @action.bound
  setMrp(mrp: number) {
    this.mrp = mrp;
  }
  @action.bound
  setButtonText(ButtonText: string) {
    this.ButtonText = ButtonText;
  }

  @action.bound
  setQuantity(Quantity: number) {
    this.Quantity = Quantity;
  }

  @action.bound
  setStock(stock: number) {
    this.stock = stock;
  }

  @action.bound
  setColor(color: string) {
    this.color = color;
  }

  @action.bound
  serwishList(wishList: boolean) {
    this.wishList = wishList;
  }

  @action.bound
  setwishColor(wishColor: string) {
    this.wishColor = wishColor;
  }
}

export default CartItem;
