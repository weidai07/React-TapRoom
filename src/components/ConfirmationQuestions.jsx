import React from 'react';
import PropTypes from 'prop-types';


function ConfirmationQuestions(props) {
  return (
    <div>
      <p style={header}>Have you gone through all the steps on the Learn How to Program debugging lesson?</p>
      <button style={submitButton} onClick={props.onSubmitQuestionsAnswered}>Yes</button>
    </div>
  );
}

ConfirmationQuestions.propTypes = {
  onSubmitQuestionsAnswered: PropTypes.func
};

export default ConfirmationQuestions;  




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
