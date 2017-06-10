import React, { Component } from 'react';

class TodoDetail extends Component {

  constructor(props) {
    super(props);
    // console.log(this.props);

    this.state = {
      id: props.todo.id,
      date: props.todo.date,
      title: props.todo.title,
      description: props.todo.description,
      status: props.todo.status
    };

    // console.log(this.state);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps() {
    this.setState({
      id: this.props.todo.id,
      date: this.props.todo.date,
      title: this.props.todo.title,
      description: this.props.todo.description,
      status: this.props.todo.status
    })
  }

  render() {
    return (
      <div>
        <h3>To do detail</h3>
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label className="col-md-2 control-label">ID </label>
            <div className="col-md-9">
              <input type="text" name="id" className="form-control" value={this.state.id} disabled/>
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-2 control-label">Date </label>
            <div className="col-md-9">
              <input type="text" name="date" className="form-control" value={this.state.date} disabled/>
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-2 control-label">Title </label>
            <div className="col-md-9">
              <input type="text" name="title" className="form-control" placeholder="title" value={this.state.title} onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-2 control-label">Description </label>
            <div className="col-md-9">
              <textarea name="description" className="form-control" value={this.state.description} onChange={this.handleChange} />
            </div>
          </div>

          <br/>
          <input type="submit" value="save" className="btn btn-success" />
        </form>
      </div>
    );
  }

  handleSubmit(event) {
    // console.log(this.state.input);
    let id = this.state.id;
    let value = {
      id: id,
      title: this.state.title,
      description: this.state.description,
      date: new Date().toLocaleTimeString(),
      status: this.state.status
    }
    this.props.updatetodo(id, value);
    // this.setState({input: ''});
    event.preventDefault();
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
    // this.setState({title: event.target.value});

  }

}

export default TodoDetail;
