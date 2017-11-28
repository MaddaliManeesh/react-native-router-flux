import React from 'react';
import {View, Text, StyleSheet,TextInput, ScrollView} from "react-native";
import {Actions} from "react-native-router-flux";
import {Avatar,Icon} from "react-native-elements";
import MainPage from './Register';

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state={
            ListName:''
        };
    }
    handleChange = (text) => {
        
        this.setState({ListName:text})
    }
    render(){
        return (
            <View>
                <ScrollView style={{backgroundColor:'dodgerblue',width:360,height:150}}>
                    <View style={{alignItems:'flex-end',padding:10}}>
                    <Icon size={30} type="MaterialIcons" underlayColor='cornflowerblue' name='check' onPress={()=>{}} iconStyle={{color:'white'}}/>
                    </View>
                    <View style={{justifyContent:'center'}}>
                    <Text style={{fontSize:15,color:'white',paddingTop:20,paddingLeft:20}}>List Name</Text>
                    <TextInput
                    onChangeValue={this.handleChange}
                    underlineColorAndroid='rgba(0,0,0,0)'	
                    style={{fontSize:20,padding:10,color:'white'}}						
                    autoCorrect={false}
                    />
                    <MainPage/>

                    </View>
                </ScrollView>
                <Text style={{fontSize:15,padding:20}}> List Members</Text>
                <View style={{flexDirection:'row',alignItems:'center',paddingLeft:20}}>
                    <Avatar small rounded title='M'containerStyle={{backgroundColor:'#2196f3',margin:5}}/>
                    <Text style={{fontSize:20}}>Maneesh</Text>
                </View>
            </View>
        );
    }
}

module.exports = Home;
