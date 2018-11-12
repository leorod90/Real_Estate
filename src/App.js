import React, { Component } from 'react';
import Header from './Header';
import Filter from './Filter';
import Listings from './Listings';
import listingsData from './listingsData'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listingsData,
      sortby: 'price-dsc',
      state: 'all',
      houseType: 'any',
      bedrooms: 0,
      priceRange: { min: 0, max: 1000000 },
      floorSpace: { min: 0, max: 5000 },
      elevator: false,
      swimming_pool: false,
      basement: false,
      gym: false,
      filteredData: listingsData,
      view: 'box'
    }
  }
  componentWillMount() {
    let listingsData = this.state.listingsData.sort((a, b) => {
      return a.price - b.price;
    })
    this.setState({
      listingsData
    });
  }

  getValues = (e) => {
    let name = e.target.name;
    let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    this.setState({
      //[] uses variable
      [name]: value
    }, () => {
      this.filteredData();
    });
  }

  getViews = (e) => {
    let view = e.target.dataset.view;
    this.setState({
      view
    });
  }

  //github react-input-range
  getPriceSlider = (e) => {
    this.setState({
      priceRange: e
    }, () => {
      this.filteredData();
    })
  }
  floorSpaceSlider = (e) => {
    this.setState({
      floorSpace: e
    }, () => {
      this.filteredData();
    })
  }
  filterCheckBox(data, check) {
    return data.filter(e => {
      return e.extras.includes(check)
    })
  }
  filteredData() {
    //return matches of
    let newData = this.state.listingsData.filter(e => {
      //price
      return e.price >= this.state.priceRange.min && e.price <= this.state.priceRange.max
        //floorspace
        && e.floorSpace >= this.state.floorSpace.min && e.floorSpace <= this.state.floorSpace.max
        //bedrooms
        && e.bedrooms >= this.state.bedrooms
    })
    //filter state
    if (this.state.state !== 'all') {
      newData = newData.filter(e => {
        return e.state === this.state.state
      })
    }
    //filter houseType
    if (this.state.houseType !== 'any') {
      newData = newData.filter(e => {
        return e.houseType === this.state.houseType
      })
    }
    //filter checkbox
    if (this.state.elevator) {
      // newData = newData.filter(e => {
      //   return e.extras.includes('elevator')
      // })
      newData = this.filterCheckBox(newData, 'elevator')
    }
    if (this.state.swimming_pool) {
      newData = this.filterCheckBox(newData, 'swimming pool')     
    }
    if (this.state.basement) {
      newData = this.filterCheckBox(newData, 'basement')
    }
    if (this.state.gym) {
      newData = this.filterCheckBox(newData, 'gym')
    }

    //asc or dec
    if (this.state.sortby === 'price-asc') {
      newData = newData.sort((a, b) => {
        return a.price - b.price
      })
    }
    if (this.state.sortby === 'price-dsc') {
      newData = newData.sort((a, b) => {
        return b.price - a.price
      })
    }

    this.setState({
      filteredData: newData
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <section id="content-area">
          <Filter globalState={this.state}
            getValues={this.getValues}
            getPriceSlider={this.getPriceSlider}
            floorSpaceSlider={this.floorSpaceSlider}
            listingsData={this.state.filteredData} />

          <Listings listingsData={this.state.filteredData}
            globalState={this.state}
            getValues={this.getValues}
            getViews={this.getViews} />
        </section>
        <div id="footer"></div>
      </div>
    );
  }
}

export default App;
