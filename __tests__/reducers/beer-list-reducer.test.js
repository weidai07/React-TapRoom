import beerListReducer from './../../src/reducers/beer-list-reducer';
import Moment from 'moment';

describe('beerListReducer', () => {

  let action;
  const sampleBeerData = {
    names: 'Ryan & Aimen',
    location: '4b',
    issue: 'Jest is being a diva and won\'t work with Webpack!',
    timeOpen: 1500000000000,
    id: 0
  };

  test('Should return default state if no action type is recognized', () => {
    expect(beerListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new beer data to masterBeerList', () => {
    const { names, location, issue, timeOpen, id } = sampleBeerData;
    action = {
      type: 'ADD_BEER',
      names: names,
      location: location,
      issue: issue,
      timeOpen: timeOpen,
      id: id
    };
    expect(beerListReducer({}, action)).toEqual({
      [id]: {
        names: names,
        location: location,
        issue: issue,
        timeOpen: timeOpen,
        id: id
      }
    });
  });

  test('Should add freshly-calculated Moment-formatted wait time to beer entry', () => {
    const { names, location, issue, timeOpen, id } = sampleBeerData;
    action = {
      type: 'UPDATE_TIME',
      formattedWaitTime: '4 minutes',
      id: id
    };
    expect(beerListReducer({ [id]: sampleBeerData }, action)).toEqual({
      [id]: {
        names: names,
        location: location,
        issue: issue,
        timeOpen: timeOpen,
        id: id,
        formattedWaitTime: '4 minutes'
      }
    });
  });



  test('New beer should include Moment-formatted wait times', () => {
    const { names, location, issue, timeOpen, id } = sampleBeerData;
    action = {
      type: 'ADD_BEER',
      names: names,
      location: location,
      issue: issue,
      timeOpen: timeOpen,
      id: id,
      formattedWaitTime: new Moment().fromNow(true)
    };
    expect(beerListReducer({}, action)).toEqual({
      [id]: {
        names: names,
        location: location,
        issue: issue,
        timeOpen: timeOpen,
        id: id,
        formattedWaitTime: 'a few seconds'
      }
    });
  });

});