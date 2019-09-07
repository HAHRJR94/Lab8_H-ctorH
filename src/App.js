import React, { Component } from 'react';
import './App.css';
import _ from "lodash";
import ItemComponent from './components/ItemComponent';
import ButtonComponent from './components/ButtonComponent';

class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      data:[
        {
          image: 'Hamburger.png',
          name: 'Hamburger',
          portion: '500g',
          price: 40
        }
      ]
    }
  }

  _remove(position){
    let { data } = this.state;

    let newData = [
      ...data.slice(0, position),
      ...data.slice(position + 1),
    ]


    this.setState({data: newData});
  }

  _add(){
    let { data } = this.state;

    let newData = [
      ...data,
      {
        image: 'papas.png',
        name: 'Potatoes',
        portion: '140g',
        price: Math.floor(Math.random() * 20)
      }
    ]

    this.setState({ data: newData });
  }

  _getTotal(){
    return _.sumBy(this.state.data, (o) => {return o.price});
  }
   
  
  render() {
    return (
      <div className="app">
        <h1>Lists example</h1>
        <ul className="todo-list">
          {this.state.data.map(
              (item, index) =>
                <ItemComponent data={item} key={index} onRemove={ () => this._remove(index)} />              
            )
          }
        </ul>
        <div className="footer">
            <ButtonComponent 
              onClick={this._add.bind(this)}
              name="Add Product"
            />
            <h4>
              ${this._getTotal()}
            </h4>
        </div>
      </div>
    );
  }
}


export default App;
