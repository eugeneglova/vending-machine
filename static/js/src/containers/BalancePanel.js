import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const BalancePanel = (
	({ balance }) => (
		<section className="panel panel-default">
			<div className="panel-heading">
				Balance
			</div>
			<div className="panel-body text-center">
				${balance}
			</div>
		</section>
	)
);

BalancePanel.propTypes = {
	balance: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
	balance: state.balance
});

const mapDispatchToProps = () => ({
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(BalancePanel);
