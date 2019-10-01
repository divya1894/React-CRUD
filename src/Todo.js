import React, { Component } from 'react';
import './Todo.css';
import './App.css';

class Todo extends Component {

  constructor(props) {
    super(props);

    this.state = {
      edit: false,
      id: null,
      mockData: [{
        id: '1',
        title: 'Buy Tea',
        done: false,
        date: new Date()
      }, {
        id: '2',
        title: 'Buy Coffee',
        done: false,
        date: new Date()
      }, {
        id: '3',
        title: 'Buy Black Tea',
        done: false,
        date: new Date()
      }, {
        id: '4',
        title: 'Buy Black Coffee',
        done: false,
        date: new Date()
      }]
    }
  }

  onSubmitHandle(event) {
    event.preventDefault();

    this.setState({
      mockData: [...this.state.mockData, {
        id: Date.now(),
        title: event.target.item.value,
        done: false,
        date: new Date()
      }]
    });

    event.target.item.value = '';
  }

  onDeleteHandle() {
    let id = arguments[0];

    this.setState({
      mockData: this.state.mockData.filter(item => {
        if (item.id !== id) {
          return item;
        }
      })
    });
  }

  onEditHandle(event) {
    this.setState({
      edit: true,
      id: arguments[0],
      title: arguments[1]
    });
  }

  onUpdateHandle(event) {
    event.preventDefault();

    this.setState({
      mockData: this.state.mockData.map(item => {
        if (item.id === this.state.id) {
          item['title'] = event.target.updatedItem.value;
          return item;
        }

        return item;
      })
    });

    this.setState({
      edit: false
    });
  }

  renderEditForm() {
      if (this.state.edit) {
      return <form style={{backgroundColor: "Black"}} onSubmit={this.onUpdateHandle.bind(this)}>
        <input type="text" name="updatedItem" className="item" defaultValue={this.state.title} />
        <button className="update-add-item">Update</button>
      </form>
    }
  }

  render() {
    return (
      <div>        
        <h1 style={{color: "blue"}}>CRUD</h1>
        {this.renderEditForm()}
        <form style={{backgroundColor: "Black"}} onSubmit={this.onSubmitHandle.bind(this)}>
          <input type="text" name="item" className="item" />
          <button className="btn-add-item">Add</button>
        </form>
        <ul style={{backgroundColor: "skyblue"}}>
          {this.state.mockData.map(item => (
            <li key={item.id} className={ item.done ? 'done' : 'hidden' }>
              {item.title}
              <button onClick={this.onDeleteHandle.bind(this, item.id)}>Delete</button>
              <button onClick={this.onEditHandle.bind(this, item.id, item.title)}>Edit</button>
              
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Todo;