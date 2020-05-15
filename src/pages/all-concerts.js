import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import fetchAllConcerts from './../actions/all-concerts';

class AllConcertsList extends Component {
  componentDidMount() {
    this.props.fetchAllConcerts(); //No longer needed. SSR FTW!
  }

  render() {
    const { allConcerts } = this.props;
    
    return (
      <div>
        <Link to="/">
          Home
        </Link>
        <br />
        <br />
        Concerts:
        <ul>
          { allConcerts && 
            allConcerts.map(concert => (<li key={concert.id}>{concert.name}</li>))
          }
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    allConcerts: state.allConcerts
  };
}

function loadData (store) {
  return store.dispatch(fetchAllConcerts());
}

const exportComponent = connect(mapStateToProps, { fetchAllConcerts })(AllConcertsList);
export default {
  component: exportComponent,
  loadData
}
