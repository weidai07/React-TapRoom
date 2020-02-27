import selectedBeerReducer from './selected-beer-reducer';
import beerListReducer from './beer-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  selectedBeer: selectedBeerReducer,
  masterBeerList: beerListReducer
});

export default rootReducer;