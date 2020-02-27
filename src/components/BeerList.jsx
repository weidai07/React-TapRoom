import React from 'react';
import Beer from './Beer';
import PropTypes from 'prop-types';

function BeerList(props){
  return (
    <div>
      {Object.keys(props.beerList).map(function(beerId) {
        var beer = props.beerList[beerId];
        return <Beer 
          names={beer.names}
          location={beer.location}
          issue={beer.issue}
          formattedWaitTime={beer.formattedWaitTime}
          currentRouterPath={props.currentRouterPath}
          key={beerId}
          beerId={beerId} />;
      })}
    </div>
  );
}

BeerList.propTypes = {
  beerList: PropTypes.object,
  currentRouterPath: PropTypes.string
};

export default BeerList;