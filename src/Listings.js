import React, { Component } from 'react';
import './listings.css';

class Listings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      resPerPage: 6,
    }
  }
  componentDidMount(){
    console.log(this.state.page)
    this.addActive();
  }
  loopListing(array) {
    let { globalState } = this.props;
    let classView = globalState.view === 'box' ? 'box-view' : 'rectangle-view';
    return array.map((listing) => {
      return (<div className={`listing-contain mobile ${classView}`} key={listing.id}>
        <div className="listing">
          <div className="listing-image" style={{ backgroundImage: `url("${listing.img}")` }}>
            <span className="address">{listing.address}</span>
            <div className="details">
              <div className="user-details">
                <div className="user-name">John Blacksmith</div>
                <span className="post-date">Updated 04/12/1992</span>
              </div>
              <div className="detail-fa">
                <div className="floorspace"><i className="far fa-square"></i><span className="detail-text">{listing.floorSpace} ft</span>&sup2;</div>
                <div className="bedroom"><i className="fas fa-bed"></i><span className="detail-text">{listing.bedrooms} bedrooms</span></div>
              </div>
              <ul className="extra-listing">
              <h6>Extras:</h6>
              {this.mapExtras(listing.extras)}
              </ul>
            </div>
          </div>
          <div className="bottom-info">
            <span className="bottom-price">${listing.price}</span>
            <span className="bottom-location"><i className="fas fa-map-marker-alt"></i>{listing.city}, {listing.state}</span>
          </div>
        </div>
      </div>)
    });
  }

  mapExtras(array) {
    return array.map((e) => {
      return (
        <li key={e}>{e}</li>
      )
    })
  }

  renderPageResults(page = this.state.page, resPerPage = this.state.resPerPage) {
    let { listingsData } = this.props;
    //first page is 0 (0 * 6) second page is 6 (1 * 6) ect... 
    const start = (page - 1) * resPerPage;
    //first page is 6 (1 * 6) second page is 12 (2 * 6) ect... 
    const end = page * resPerPage;

    return this.loopListing(listingsData.slice(start, end));
  }

  renderButton(page = this.state.page, resPerPage = this.state.resPerPage, numResults = this.props.listingsData.length) {
    //20 results / 6 per = 3.33 so rounds up to 4 pages needed
    const pages = Math.ceil(numResults / resPerPage);
    var pageLi = [];

    for (let i = 1; i <= pages; i++) {
      pageLi.push(i);
    }

    return pageLi.map((pageNum) => {
      return (<li key={pageNum} data-page={pageNum} onClick={this.changePage} >{pageNum}</li>)
    })
  }

  changePage = (e) => {
    let page = e.target.dataset.page;
    let pages = Math.ceil(this.props.listingsData.length / this.state.resPerPage)
    //if a number
    if (!isNaN(page)) {
      this.setState({
        page
      });
    } else if (page === 'next' && this.state.page < pages) {
      this.setState({
        //was returning 11
        page: parseInt(this.state.page, 10) + 1
      });
    } else if (page === 'prev' && this.state.page > 1) {
      this.setState({
        page: this.state.page - 1
      });
    }
  }

  addActive(){
    let myArray = Array.from(document.querySelectorAll('[data-page]'));
    // console.log(myArray)
    myArray.forEach(e => {
      // console.log(e.dataset.page)
      e.classList.remove('pg-active')
      if (e.dataset.page == this.state.page) {
        e.classList.add('pg-active')
      }
    })
  }

  render() {
    this.addActive();
    const { getValues, getViews, listingsData } = this.props;
    return (<div id="listing-contain">
      <div id="listings">
        <section className="search-area">
          <input type="text" name="search" />
        </section>

        <section className="sortby-area">
          <div className="results">{listingsData.length} result{listingsData.length === 1 ? '' : 's'} found</div>
          <div className="sort-options">
            <select name="sortby" className="sortby" onChange={getValues}>
              <option value="price-asc">Lowest Price</option>
              <option value="price-dsc">Highest Price</option>
            </select>
            <div className="view">
              <i className="fas fa-th" data-view="box" onClick={getViews}></i>
              <i className="fas fa-list-ul" data-view="reactangle" onClick={getViews}></i>
            </div>
          </div>
        </section>
        <section className="listings-results">
          {/* {this.loopListing()} */}
          {this.renderPageResults()}
        </section>
      </div>

      <section id="pagination">
        <ul className="pages">
          <li className="pages-blue" data-page="prev" onClick={this.changePage}>prev</li>
          {this.renderButton()}
          <li className="pages-blue" data-page="next" onClick={this.changePage}>next</li>
        </ul>
      </section>

    </div>);
  }
}

export default Listings;
