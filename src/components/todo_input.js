import React, { Component } from 'react';

class TodoInput extends Component {

  constructor(props) {
    super(props);

    this.state = {input: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // console.log(this.props);
  }

  render() {
    return (
      <div className="col-md-6 col-md-offset-3">
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label className="col-md-2 control-label">Task  </label>
            <div className="col-md-7">
              <input type="text" name="task"
                className="form-control"
                value={this.state.input}
                onChange={this.handleChange}
              />
            </div>
            <input type="submit" value="add" className="btn btn-default" />

          </div>
          {/* <h3 style={{display:'inline'}}>Task : </h3> <input
            className="form-control"
            value={this.state.input}
            onChange={this.handleChange} />	&nbsp; */}
        </form>
      </div>
    );
  }

  handleSubmit(event) {
    if(this.state.input !== '') {
      console.log(this.state.input);
      this.props.addtodo(this.state.input);
      this.setState({input: ''});
    }
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({input: event.target.value});
  }
}

export default TodoInput;
