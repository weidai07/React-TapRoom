import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import BeerList from './BeerList';
import NewBeerControl from './NewBeerControl';
import Error404 from './Error404';
import Header from './Header';
import Navbar from './Navbar';
import background from '../assets/images/background.jpg';
import Admin from './Admin';
import { v4 } from 'uuid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Moment from 'moment';

class App extends React.Component {


  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateBeerElapsedWaitTime(),
      10000
    );
  }

  componentWillUnmount() {
    clearInterval(this.waitTimeUpdateTimer);
  }

  updateBeerElapsedWaitTime() {
    const { dispatch } = this.props;
    Object.keys(this.props.masterBeerList).map(beerId => {
      const beer = this.props.masterBeerList[beerId];
      const newFormattedWaitTime = Moment(beer.timeOpen).fromNow(true);
      const action = {
        type: 'UPDATE_TIME',
        id: beerId,
        formattedWaitTime: newFormattedWaitTime
      };
      dispatch(action);
    });
  }

  render() {
    console.log("this.state.masterBeerList");
    return (
      <div>

        <Navbar />
        <Header />

        <Switch>
          <Route exact path='/' render={() => <BeerList
            beerList={this.props.masterBeerList} />} />

          <Route path='/newbeer' render={() => <NewBeerControl />} />

          <Route path='/admin' render={(props) => <Admin
            currentRouterPath={props.location.pathname}
          />} />

          <Route component={Error404} />
        </Switch>

        <style global jsx>{`
          body {
            font-family:  Arial, Helvetica, sans-serif;
            font-size: 18px;
            background: url('${background}');
          }
        `}</style>

      </div>
    );
  }
}

App.propTypes = {
  masterBeerList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterBeerList: state.masterBeerList
  };
};

export default withRouter(connect(mapStateToProps)(App));
