import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TodoInput from './components/todo_input';
import TodoList from './components/todo_list';
import TodoDetail from './components/todo_detail';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {id: 1, title: '111', description: '111', date: new Date().toLocaleTimeString(), status: false},
        {id: 2, title: '222', description: '222', date: new Date().toLocaleTimeString(), status: false},
        {id: 3, title: '333', description: '333', date: new Date().toLocaleTimeString(), status: false},
      ],
      selectTodo: false,
      todo: null
      // todo: {
      //   id: 4,
      //   title: 111,
      //   description: '555',
      //   date: new Date().toLocaleTimeString(),
      //   status: false
      // }
    };
    // console.log(this.state);
    // this.state.todos.push({id:4});

  }

  // componentDidMount() {
  //   console.log(this.state);
  // }
  //
  // componentWillUpdate() {
  //   console.log(this.state);
  // }

  addTodo(val) {
    // console.log('addtodo', val);

    let todos = this.state.todos;

    const todo = {
      id: Math.floor((Math.random() * 100) + 1), //1-100
      title: val,
      description: '',
      date: new Date().toLocaleTimeString(),
      status: false
    }
    // Update data
    // this.state.todos.push(todo);
    todos.push(todo);
    // Update state
    this.setState({todos: todos}, () => console.log(this.state));

  }

  deleteTodo(id) {
    // console.log(id);
    let todos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({todos: todos}, () => console.log(this.state));
  }

  updateTodo(id, val) {
    console.log(id);

    // const newValue = {
    //   id: id,
    //   title: val,
    //   description: val + '555',
    //   date: new Date().toLocaleTimeString(),
    //   status: false
    // }

    const newValue = val;

    let todos = this.state.todos;
    for(let todo in todos) {
      if(todos[todo].id === id) {
          todos[todo] = newValue
        break;
      }
    }
    this.setState({todos: todos});
    this.setState({selectTodo: false});
    this.setState({todo: ''});
    console.log(this.state);
  }

  checkTodo(id) {
    console.log(id);
    let todos = this.state.todos;
    for(let i in todos) {
      if(todos[i].id === id) {
        todos[i].status = todos[i].status === true ? false : true;
        break;
      }
    }
    this.setState({todos: todos}, () => console.log(this.state));
  }

  selectTodo(id) {
    // console.log(id)
    let todos = this.state.todos
    let newTodo = todos.find(item => item.id === id);
    this.setState({
      selectTodo: true,
      todo: newTodo
    }, () => console.log(this.state.todo));
  }

  test() {
    console.log(this.state);
  }

  render() {
    // console.log(this.state);

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <br/>
        <h1 className="">
          {/* To get started, edit <code>src/App.js</code> and save to reload. */}
          To do list - Web Application
        </h1>
        <br/>
        <button onClick={this.test.bind(this)}>Test State</button>
        {/* <button onClick={e => this.test(e)}>Test</button> */}
        <div className="col-md-12">
          <TodoInput addtodo={this.addTodo.bind(this)} />
          <br/>
          <TodoList
            todos={this.state.todos}
            deletetodo={this.deleteTodo.bind(this)}
            checktodo={this.checkTodo.bind(this)}
            selecttodo={this.selectTodo.bind(this)}
          />
        </div>
        {this.state.selectTodo &&
          <div className="col-md-6 col-md-offset-3">
            <TodoDetail
              todo={this.state.todo}
              updatetodo={this.updateTodo.bind(this)}
            />
          </div>
        }

      </div>
    );
  }
}

export default App;
