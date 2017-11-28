import React, { Component } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { observer } from "mobx-react/native";
import { observable } from "mobx";

import todosList from "../../stores/TodosList";

@observer
class TodosList extends Component {
  @observable todoName: string;

  constructor(props) {
    super(props);
    this.todoName = "";
  }

  onChangeTodoName = (todoName: string) => {
    this.todoName = todoName;
  };

  addTodo = () => {
    let todo = {
      id: todosList.todos.length + 1,
      name: this.todoName,
      isCompleted: false
    };
    todosList.addTodo(todo);
  };

  displayTodos = () => {
    var Display = todosList.todos.map(todoObject => {
      return (
        <View>
          <Text>{todoObject.name}</Text>
        </View>
      );
    });
    return Display || null;
  };

  render() {
    return (
      <View>
        <Text>TodosList</Text>
        {this.displayTodos()}
        <TextInput onChangeText={text => this.onChangeTodoName(text)} />
        <Button title="Add" onPress={this.addTodo} />
      </View>
    );
  }
}

export default TodosList;
