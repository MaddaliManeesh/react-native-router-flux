import { observable, action } from "mobx";

export default class radioButton {
  @observable checked: boolean;
  @observable typeRadioButton: string;
  @observable gender: string;
  constructor(item) {
    this.checked = this.item;
    this.typeRadioButton = this.item;
  }

  @action.bound
  setChecked(checked: boolean) {
    this.checked = checked;
  }

  @action.bound
  settypeRadioButton(typeRadioButton: string) {
    this.typeRadioButton = typeRadioButton;
  }

  @action.bound
  setGender(gender: string) {
    this.gender = gender;
  }
}
