import { observable, action } from "mobx";

class TodoItem {
  @observable id: number;
  @observable name: string;
  @observable isCompleted: boolean;

  constructor(todoObject) {
    // this.id = todoObject.id;
    // this.name = todoObject.name;
    // this.isCompleted = todoObject.isCompleted;
  }

  @action.bound
  setId(id: number) {
    this.id = id;
  }

  @action.bound
  setName(name: string) {
    this.name = name;
  }

  @action.bound
  setIsCompleted(isCompleted: boolean) {
    this.isCompleted = isCompleted;
  }
}

const todoItem = new TodoItem();
export default todoItem;
