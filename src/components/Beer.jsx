import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function Beer(props) {

  function handleSavingSelectedBeer(beerId) {
    const { dispatch } = props;
    const action = {
      type: 'SELECT_BEER',
      beerId: beerId
    };
    dispatch(action);
  }


  const beerInformation =
    <div>
      <h3>{props.location} - {props.names}</h3>
      <h4>{props.formattedWaitTime}</h4>
      <hr />
    </div>;
  if (props.currentRouterPath === '/admin') {
    return (
      <div onClick={() => { handleSavingSelectedBeer(props.beerId); }}>
        {beerInformation}
      </div>
    );
  } else {
    return (
      <div>
        {beerInformation}
      </div>
    );
  }
}

Beer.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  formattedWaitTime: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string,
  beerId: PropTypes.string.isRequired
};


export default connect()(Beer);
