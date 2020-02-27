import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment'; 
import { connect } from 'react-redux';
import { v4 } from 'uuid';

function NewBeerForm(props) {
  let _names = null;
  let _location = null;
  let _issue = null;

  function handleNewBeerFormSubmission(event) {
    event.preventDefault();
    const { dispatch } = props;
    const action = {
      type: 'ADD_BEER',
      id: v4(),
      names: _names.value,
      location: _location.value,
      issue: _issue.value,
      timeOpen: new Moment(),
      formattedWaitTime: new Moment().fromNow(true)
    };
    dispatch(action);
    _names.value = '';
    _location.value = '';
    _issue.value = '';
  }
  return (
    <div>
      <div style={formContainer}>
        <form onSubmit={handleNewBeerFormSubmission}>
          <input style={pairNames}
            type='text'
            id='names'
            placeholder='Customer Name'
            ref={(input) => { _names = input; }} />
          <input
            type='text' style={locationInput}
            id='location'
            placeholder='Beer Type'
            ref={(input) => { _location = input; }} />
          <textarea style={issueInput}
            id='issue'
            placeholder='Are you old enough to drink?'
            ref={(textarea) => { _issue = textarea; }} />
          <button type='submit' style={submitButton}>Submit</button>
        </form>
      </div>
    </div>
  );
}


NewBeerForm.propTypes = {
  dispatch: PropTypes.func
};


NewBeerForm = connect()(NewBeerForm);

var formContainer = {
  backgroundColor: 'white',
  width: '400px',
  margin: '100px auto',
  height: '500px',
  borderRadius: '3px',
  border: '50px solid #ffc55b'
};

var pairNames = {
  border: '2px solid gray',
  width: '350px',
  height: '30px',
  margin: '20px',
  borderRadius: '3px'
};

var locationInput = {
  border: '2px solid gray',
  width: '350px',
  height: '30px',
  margin: '20px',
  borderRadius: '3px'
};

var issueInput = {
  border: '2px solid gray',
  width: '350px',
  height: '200px',
  margin: '20px'
};

var submitButton = {
  margin: '30px 0 50px 40%',
  fontSize: '25px',
  backgroundColor: 'lightgray',
  borderRadius: '5px',
  padding: '2px 10px'
};

export default NewBeerForm;
