import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  render() {

    return (
      <div>
        <SearchBar />

          <div className="row">
            <div className="col-8">

              <StockContainer unownedStocks={this.props.allStocks.filter( stock => !stock.owned )} handleClick={this.props.handleClick}/>

            </div>
            <div className="col-4">

              <PortfolioContainer ownedStocks={this.props.allStocks.filter( stock => stock.owned )} handleClick={this.props.handleClick}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
