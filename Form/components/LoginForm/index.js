import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  Picker
} from "react-native";
import styles from "./styles.js";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from "react-native-simple-radio-button";
import { observer } from "mobx-react/native";
import { observable } from "mobx";
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from "moment";
import { Icon } from "react-native-elements";
import store from "../../store/Funtions";

@observer
export default class LoginForm extends Component {
  @observable value: string;
  @observable isDateTimePickerVisible: boolean;
  @observable viewDate: string;
  @observable checked: boolean;
  @observable typeRadioButton: string;
  @observable gender: string;
  @observable id: number;
  @observable name: string;
  @observable mobileNo: number;
  @observable data: string;
  constructor(props) {
    super(props);
    this.value = 0;
    this.isDateTimePickerVisible = false;
    this.viewDate = moment().format("MMMM Do YYYY");
  }

  _showDateTimePicker = () => (this.isDateTimePickerVisible = true);

  _hideDateTimePicker = () => (this.isDateTimePickerVisible = false);

  _handleDatePicked = date => {
    this.viewDate = moment(date).format("MMMM Do YYYY");
    this._hideDateTimePicker();
  };

  showGender = () => {
    let selectedGender = store.Person.map(eachItem => {
      return (
        <View key={eachItem.id} style={{ flexDirection: "row" }}>
          <Icon
            name={eachItem.typeRadioButton}
            onPress={() => store.radioButtonControl(eachItem)}
          />
          <Text style={styles.selectGender}>{eachItem.gender}</Text>
        </View>
      );
    });
    return selectedGender;
  };

  addList = () => {
    let Person = {
      id: store.Person.length,
      name: this.name,
      gender: this.gender,
      mobileNo: this.mobileNo,
      date: this.data,
      branch: this.branch,
      checked: false,
      typeRadioButton: "radio-button-unchecked"
    };
    store.addList(Person);
  };

  render() {
    return (
      <ScrollView style={styles.ScrollView}>
        <View style={styles.Heading}>
          <Text style={styles.Form}>Form</Text>
        </View>
        <View style={{ marginLeft: 20 }}>
          <View style={styles.Input}>
            <TextInput
              placeholder="Full Name"
              placeholderTextColor="rgba(0,0,0,0.25)"
              underlineColorAndroid="rgba(0,0,0,0)"
            />
          </View>
          <View style={styles.selectGenderView}>
            <Text style={styles.selectGender}>Select gender</Text>
          </View>
          <View>{this.showGender()}</View>
          <View style={styles.Input}>
            <TextInput
              placeholder="Mobile No"
              placeholderTextColor="rgba(0,0,0,0.25)"
              underlineColorAndroid="rgba(0,0,0,0)"
            />
          </View>
          <View style={styles.Input}>
            <TouchableOpacity
              onPress={this._showDateTimePicker}
              style={{ padding: 12 }}
            >
              <Text>{this.viewDate}</Text>
            </TouchableOpacity>
            <DateTimePicker
              isVisible={this.isDateTimePickerVisible}
              onConfirm={this._handleDatePicked}
              onCancel={this._hideDateTimePicker}
              datePickerModeAndroid="spinner"
            />
          </View>
          <View style={styles.Input}>
            <Picker
              selectedValue={store.Person[0].branch}
              onValueChange={itemValue => {
                store.Person[0].branch = itemValue;
              }}
              mode="dropdown"
            >
              <Picker.Item label="Western" value="Western" />
              <Picker.Item label="Classical" value="Classical" />
            </Picker>
          </View>
        </View>
      </ScrollView>
    );
  }
}
