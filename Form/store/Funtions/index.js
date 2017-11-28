import { observable, action, computed } from "mobx";
import radioButton from "../ItemClass";

class Store {
  @observable Person: Array<radioButton>;
  constructor() {
    this.Person = [
      {
        id: 1,
        gender: "Male",
        checked: false,
        typeRadioButton: "radio-button-unchecked",
        branch: ""
      },
      {
        id: 2,
        gender: "Female",
        checked: false,
        typeRadioButton: "radio-button-unchecked",
        branch: ""
      }
    ];
  }

  @action.bound
  radioButtonControl(eachItem) {
    eachItem.checked = !eachItem.checked;
    if (eachItem.checked) {
      eachItem.typeRadioButton = "radio-button-checked";
    } else {
      eachItem.typeRadioButton = "radio-button-unchecked";
    }
  }
}
const store = new Store();
export default store;
