import React from 'react';
import PropTypes from 'prop-types';
import BeerList from './BeerList';
import BeerDetail from './BeerDetail';
import { connect } from 'react-redux';



function Admin(props) {

    let background = {
        backgroundColor: '#679dff'
    };

    let footerAdmin = {
        position: 'fixed',
        bottom: '0',
        left: '0',
        width: '100%',
        backgroundColor: '#e0d647',
        textAlign: 'center',
        marginBottom: '0'
    };

    let optionalSelectedBeerContent = null;
    if (props.selectedBeer.length > 0) {
        optionalSelectedBeerContent = <BeerDetail
            selectedBeer={props.beerList[props.selectedBeer]} />;
    }

    return (
        <div style={background}>

            <h2 style={footerAdmin}>Admin</h2>

            {optionalSelectedBeerContent}

            <BeerList
                beerList={props.beerList}
                currentRouterPath={props.currentRouterPath} />
        </div>
    );
}


Admin.propTypes = {
    beerList: PropTypes.array,
    currentRouterPath: PropTypes.string.isRequired,
    selectedBeer: PropTypes.string
};


const mapStateToProps = state => {
    return {
        selectedBeer: state.selectedBeer,
        beerList: state.masterBeerList
    };
};


export default connect(mapStateToProps)(Admin);