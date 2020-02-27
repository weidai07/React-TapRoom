import rootReducer from './../../src/reducers/index';
import selectedBeerReducer from './../../src/reducers/selected-beer-reducer';
import beerListReducer from './../../src/reducers/beer-list-reducer';
import { createStore } from 'redux';

let store = createStore(rootReducer);

describe("rootReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterBeerList: {},
      selectedBeer: {}
    });
  });

  test('Should contain beerListReducer logic', () => {
    expect(store.getState().masterBeerList).toEqual(beerListReducer(undefined, { type: null }));
  });

  test('Should contain selectedBeerReducer logic', () => {
    expect(store.getState().selectedBeer).toEqual(selectedBeerReducer(undefined, { type: null }));
  });

});