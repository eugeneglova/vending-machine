import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const BallancePanel = (
	({ ballance }) => (
		<section className="panel panel-default">
			<div className="panel-heading">
				Ballance
			</div>
			<div className="panel-body text-center">
				${ballance}
			</div>
		</section>
	)
);

BallancePanel.propTypes = {
	ballance: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
	ballance: state.ballance
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(BallancePanel);
