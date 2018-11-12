import React, { Component } from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import './Filter.css';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentWillMount() {
    //only update the state one time
    this.setState({
      listingsData: this.props.listingsData
    })
  }
  //find largest number in array

  dynamicForm = (type) => {
    let plus = type === 'bedrooms' ? '+' : '';
    let numArray = [];

    let array = this.state.listingsData.map(item => {
      return item[type]
    });
    //set return obeject but with only 1 copy of each item
    array = new Set(array)
    //turn object into array
    array = [...array]
    //check if numbers are present then fill missing
    if (!array.some(isNaN)) {
      let largeNum = Math.max.apply(Math, array);
      for (let i = 0; i < largeNum; i++) {
        numArray.push(i);
      }
      array = numArray;
    }

    //sort
    array = array.sort()

    return array.map(e => {
      return (
        <option key={e} value={e}>{e + plus}</option>
      )
    })
  }

  toggleMobile = () =>{
    document.getElementById('filter').classList.toggle("active");
  }
  render() {
    const { getValues, getPriceSlider, floorSpaceSlider } = this.props
    const { priceRange, floorSpace } = this.props.globalState;
    return (<div id="filter-section">
      <section class="filter-mobile">
        <i class="fas fa-bars" onClick={this.toggleMobile}></i>
      </section>
      <div id="filter">
        <section className="filter-contain">
          <h2>FILTER</h2>
          <span className="title">State</span>
          <select name="state" className="filter" onChange={getValues}>
            <option value="all">All</option>
            {this.dynamicForm('state')}
          </select>

          <span className="title">House Type</span>
          <select name="houseType" className="filter" onChange={getValues}>
            <option value="any">Any</option>
            {this.dynamicForm('houseType')}
          </select>

          <span className="title">Bedrooms</span>
          <select name="bedrooms" className="filter" onChange={getValues}>
            <option value={0}>Any</option>
            {this.dynamicForm('bedrooms')}
          </select>

          <div className="filter price">
            <span className="title">Price</span>
            <div className="input-div">
              <InputRange
                minValue={0}
                maxValue={1000000}
                value={priceRange}
                onChange={getPriceSlider}
                step={10000} />
            </div>
          </div>

          <div className="filter sq-feet">
            <span className="title">Square Feet</span>
            <div className="input-div">
              <InputRange
                minValue={0}
                maxValue={5000}
                value={floorSpace}
                onChange={floorSpaceSlider}
                step={50} />
            </div>
          </div>

          <div className="filter extras">
            <span className="title">Extras</span>
            <span className="check-contain">Elevator
          <input id="box1" type="checkbox" name="elevator" value="elevator" onChange={getValues} />
              <label htmlFor="box1"></label>
            </span>

            <span className="check-contain">Swimming Pool
          <input id="box2" type="checkbox" name="swimming_pool" value="swimming_pool" onChange={getValues} />
              <label htmlFor="box2"></label>
            </span>

            <span className="check-contain">Basement
          <input id="box3" type="checkbox" name="basement" value="basement" onChange={getValues} />
              <label htmlFor="box3"></label>
            </span>

            <span className="check-contain">Gym
          <input id="box4" type="checkbox" name="gym" value="gym" onChange={this.props.getValues} />
              <label htmlFor="box4"></label>
            </span>

          </div>
        </section>
      </div >
    </div>
    );
  }
}

export default Filter;
