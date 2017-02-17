import React, { PropTypes } from 'react';

const PurchasedProductListItem = (
	({ product }) => (
		<div className="panel panel-default">
			<div className="panel-body">
				<img src={product.image} className="img-rounded img-responsive center-block" />
			</div>
		</div>
	)
);

PurchasedProductListItem.propTypes = {
	product: PropTypes.shape({
		image: PropTypes.string.isRequired
	}).isRequired
};

export default PurchasedProductListItem;
