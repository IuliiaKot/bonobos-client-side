import React, { Component } from 'react';
import './App.css';
import ProductsList from './ProductsList';

class App extends Component {
  constructor(){
    super();
    this.state = {
      products: []
    }
  }
  componentDidMount(){
    fetch('http://localhost:8000/api/products.json')
      .then(result =>{
        return result.json()
      })
      .then(data => {
      
        this.setState({products: data})
      })
  }

  render() {
    return (
      <div className="App">
        <h2>List of products</h2>
        <ProductsList products={this.state.products} />
      </div>
    );
  }
}

export default App;
