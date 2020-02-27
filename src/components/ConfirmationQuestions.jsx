import React from 'react';
import PropTypes from 'prop-types';


function ConfirmationQuestions(props) {
  return (
    <div>
      <p style={header}>Are you sure you want free beer?</p>
      <button style={submitButton} onClick={props.onSubmitQuestionsAnswered}>Yes</button>
    </div>
  );
}

ConfirmationQuestions.propTypes = {
  onSubmitQuestionsAnswered: PropTypes.func
};

let header = {
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: '30px'
};

let submitButton = {
  fontSize: '25px',
  padding: '4px 10px',
  margin: '25px auto 25px 46%',
  borderRadius: '5px'
};

export default ConfirmationQuestions; 
