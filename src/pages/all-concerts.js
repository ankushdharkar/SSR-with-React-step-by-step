import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import fetchAllConcerts from './../actions/all-concerts';

class AllConcertsList extends Component {
  componentDidMount() {
    this.props.fetchAllConcerts(); //No longer needed. SSR FTW!
  }

  renderHeadTags() {
    const { allConcerts = [] } = this.props;
    const numConcerts = allConcerts.length;
    const displayNumStr = numConcerts > 0 ? `(${numConcerts})` : '';
    const titleTxt = `${displayNumStr} The most exclusive concerts on the planet` 
    return (
      <Helmet>
        <title> { titleTxt } </title>
        <link rel="canonical" href="http://abc.com/example" />
        <meta property="og:title" content="Concerts near you" />
        <meta property="og:image" content="public/cover-poster.png" />
      </Helmet>
    )
  }

  render() {
    const { allConcerts } = this.props;
    return (
      <div>
        { this.renderHeadTags() }
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
