import React, { Component } from "react";
import {
  CheckBox,
  Picker,
  AppRegistry,
  Text,
  View,
  TextInput,
  StyleSheet,
  Alert,
  TouchableHighlight,
  ScrollView,
  FlatList,
  Image,
  Dimensions
} from "react-native";
import { Icon } from "react-native-elements";

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { showText: true };
    setInterval(() => {
      this.setState(previousState => {
        return { showText: !previousState.showText };
      });
    }, 1000);
  }

  render() {
    let display = this.state.showText ? this.props.text : " ";
    return <Text style={{ fontSize: 30 }}>{display}</Text>;
  }
}

export default class Names extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      titleStore: [],
      completedTitles: [],
      onoffValue: false,
      id: 0,
      category: [],
      Acess: true
    };
  }

  handleChange = text => {
    this.setState({ title: text });
  };

  onSubmitEdit = () => {
    if (this.state.title.length > 0) {
      let array1 = { id: this.state.id, text: this.state.title };
      this.setState({
        titleStore: [array1, ...this.state.titleStore],
        id: this.state.id + 1,
        title: ""
      });
    }
  };
  onCall = item => {
    const result = this.state.titleStore.filter(
      titleObject => titleObject.id !== item.id
    );
    const result1 = this.state.titleStore.filter(
      titleObject => titleObject === item
    );

    this.setState({
      titleStore: result,
      completedTitles: [result1[0], ...this.state.completedTitles]
    });
  };

  onDelete = fd => {
    const Delete = this.state.completedTitles.filter(
      titleObject => titleObject !== fd
    );
    this.setState({ completedTitles: Delete });
  };

  onClear = () => {
    let cleararray = this.state.titleStore;
    while (cleararray.length) {
      cleararray.pop();
    }
    this.setState({ titleStore: cleararray });
  };

  render() {
    const extractKey = ({ id }) => id;
    console.log(this.state.language);
    let { width, height } = Dimensions.get("window");
    return (
      <View style={{ flex: 1 }}>
        <Image
          source={require("../images/background.jpg")}
          style={{ position: "absolute", width: width, height: height }}
          resizeMode="cover"
        />

        <View style={{ flex: 1 }}>
          <View style={{ padding: 10 }}>
            <View
              style={{
                backgroundColor: "darkseagreen",
                width: 340,
                flexDirection: "row",
                alignItems: "center",
                borderRadius: 5
              }}
            >
              <Text style={{ color: "white", fontSize: 30, padding: 10 }}>
                +
              </Text>
              <TextInput
                style={{
                  height: 60,
                  width: 320,
                  paddingTop: 10,
                  paddingBottom: 10,
                  paddingLeft: 0,
                  paddingRight: 10
                }}
                underlineColorAndroid="rgba(0,0,0,0)"
                placeholder="Add a to-do..."
                placeholderTextColor="white"
                returnKeyType="done"
                value={this.state.title}
                onChangeText={this.handleChange}
                onSubmitEditing={this.onSubmitEdit}
              />
            </View>

            <FlatList
              style={{ paddingTop: 10, paddingRight: 2, paddingLeft: 2 }}
              data={this.state.titleStore}
              renderItem={({ item }) => (
                <View
                  style={{
                    flexDirection: "row",
                    padding: 7,
                    marginBottom: 2,
                    backgroundColor: "white",
                    borderRadius: 5
                  }}
                >
                  <CheckBox
                    onValueChange={() => {
                      this.onCall(item);
                    }}
                    value={false}
                  />

                  <View style={{ padding: 2 }}>
                    <Text style={{ fontSize: 20 }}>{item.text}</Text>
                    <Text>{this.state.category}</Text>
                  </View>
                </View>
              )}
              keyExtractor={extractKey}
            />

            <TouchableHighlight
              onPress={() => {
                this.setState({ Acess: true });
              }}
            >
              <View>
                <Text>show completed lists</Text>
              </View>
            </TouchableHighlight>

            <FlatList
              style={{ paddingTop: 10, paddingRight: 2, paddingLeft: 2 }}
              data={this.state.completedTitles}
              renderItem={({ item }) => (
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: 7,
                    marginBottom: 2,
                    backgroundColor: "white",
                    borderRadius: 5
                  }}
                >
                  <View style={{ padding: 2 }}>
                    <Text
                      style={{
                        fontSize: 20,
                        textDecorationLine: "line-through"
                      }}
                    >
                      {item.text}
                    </Text>
                    <Text>{this.state.category}</Text>
                  </View>
                  <Icon
                    name="delete"
                    color="#2196F3"
                    underlayColor="skyblue"
                    style={{ padding: 10 }}
                    onPress={() => {
                      this.onDelete(item);
                    }}
                  />
                </View>
              )}
              keyExtractor={extractKey}
            />
          </View>
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent("AwesomeProject", () => Names);

// <ScrollView style={{flex: 1}}>
// 				<Image source={require('../images/background.jpg')} resizeMode="cover" style={{position: 'absolute', flex: 1}} />

// 				<View style = {{flex:1,backgroundColor:"orange"}}>
// 					<View style={{padding:10}}>
// 						<View style={{backgroundColor:'darkseagreen',width:340,flexDirection:'row',alignItems:'center'}}>
// 							<Text style={{color:'white',fontSize:30,padding:10}}>+</Text>
// 							<TextInput
// 								style={{height:60,width:320,paddingTop:10,paddingBottom:10,paddingLeft:0,paddingRight:10}}
// 								underlineColorAndroid='rgba(0,0,0,0)'
// 								placeholder="Add a to-do... "
// 								placeholderTextColor='white'
// 								returnKeyType='done'
// 								value={this.state.title}
// 								onChangeText={this.handleChange}
// 								onSubmitEditing={this.onSubmitEdit}
// 							/>
// 							</View>

//             <FlatList
//                 style={{padding:10}}
//                 data={this.state.titleStore}
// 								renderItem={({item}) =>
//                 <View style={{flexDirection:'row',padding: 7,marginBottom:2 ,backgroundColor: 'white'}}>
// 									<CheckBox
// 									  onValueChange={()=>{ this.onCall(item)}}
// 										value = {false} 	/>
// 									<View style={{padding:2}}>
// 										<Text style={{fontSize:20}}>{item.text}</Text>
// 										<Text>{this.state.category}</Text>
// 									</View>
// 								</View>								}
//                 keyExtractor={extractKey}
//             />
//             <FlatList
//                 style={{padding:10}}
//                 data={this.state.completedTitles}
// 								renderItem={({item}) =>
//                 <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',padding: 7,marginBottom:5 ,backgroundColor: 'gainsboro'}}>
// 									<View style={{padding:2}}>
// 										<Text style={{fontSize:20,textDecorationLine:'line-through'}}>{item.text}</Text>
// 										<Text>{this.state.category}</Text>
// 									</View>
// 									<Icon name='rowing' color='#2196F3' underlayColor='skyblue' style={{padding:10}} onPress={() => {this.onDelete(item)}}/>
// 							</View>								}
//                 keyExtractor={extractKey}
//             />
//           </View>

//  </View>

// 			</ScrollView>
