import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchAllConcerts from './../actions/all-concerts';

class AllConcertsList extends Component {
  componentDidMount() {
    this.props.fetchAllConcerts(); //No longer needed. SSR FTW!
  }

  render() {
    const { allConcerts } = this.props;
    
    return (
      <div>
        List Goes here:
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

export default connect(mapStateToProps, { fetchAllConcerts })(AllConcertsList);
