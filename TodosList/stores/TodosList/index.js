import { observable, action } from "mobx";
import type { IObservableArray } from "mobx";
import todoItem from "../TodoItem";

class TodosList {
  @observable todos: Array<TodoItem>;

  constructor() {
    this.todos = [];
  }

  @action.bound
  addTodo(todo) {
    alert(todo);
    // let newTodo = new todoItem(todo);
    this.todos.push(newTodo);
  }

  @action.bound
  setTodos(todos) {
    todos.map(todo => {
      this.todos.push(new todoItem(todo));
    });
  }
}

const todosList = new TodosList();
export default todosList;
