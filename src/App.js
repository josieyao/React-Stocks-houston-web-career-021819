import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

class App extends Component {

  state = {
    stocks: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/stocks')
    .then( res => res.json())
    .then( data => 
      // console.log(data)
      this.setState({
        stocks: data
      })
    )
  }

  handleClick = (id) => {
    // console.log('hello')
    this.setState({
      stocks: this.state.stocks.map( stock => {
        if (stock.id === id) {
          return {...stock,
          owned: !stock.owned }
        } else {
          return stock
        }
      })
    })
  }



  render() {
    let allStocks = this.state.stocks

    return (
      <div>
        <Header/>
        <MainContainer allStocks={allStocks} handleClick={this.handleClick}/>
      </div>
    );
  }
}

export default App;
