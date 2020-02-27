import React from 'react';
import ConfirmationQuestions from './ConfirmationQuestions';
import NewBeerForm from './NewBeerForm';
import PropTypes from "prop-types";

class NewBeerControl extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			formVisibleOnPage: false
		};
		this.handleDisplayForm = this.handleDisplayForm.bind(this);
	}

	handleDisplayForm() {
		this.setState({ formVisibleOnPage: true });
	}

	render() {
		let currentlyVisibleContent = null;
		if (this.state.formVisibleOnPage) {
			currentlyVisibleContent = <NewBeerForm
			/>;
		} else {
			currentlyVisibleContent = <ConfirmationQuestions
				onSubmitQuestionsAnswered={this.handleDisplayForm} />;
		}
		return (
			<div>
				{currentlyVisibleContent}
			</div>
		);
	}
}

export default NewBeerControl;