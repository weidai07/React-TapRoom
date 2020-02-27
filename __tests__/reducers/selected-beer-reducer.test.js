import selectedBeerReducer from './../../src/reducers/selected-beer-reducer';

describe("selectedBeerReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(selectedBeerReducer({}, { type: null })).toEqual({});
  });

  test('Should record which beer has been selected by user', () => {
    expect(selectedBeerReducer({}, { type: 'SELECT_BEER', beerId: 1 })).toEqual(1);
  });

});