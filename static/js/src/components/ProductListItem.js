import React, { PropTypes } from 'react';

const ProductListItem = (
	({ product, ballance, onClick }) => (
		<div className="panel panel-default">
			<div className="panel-heading">
				Price: ${product.price}
			</div>
			<div className="panel-body">
				<img src={product.image} className="img-rounded" />
			</div>
			<div className="panel-footer">
				{product.price <= ballance ?
					<button className="btn btn-primary" onClick={() => onClick(product.id)}>Buy</button>
					:
					<button className="btn btn-default disabled">Load ${product.price - ballance} more</button>
				}
			</div>
		</div>
	)
);

ProductListItem.propTypes = {
	product: PropTypes.shape({
		id: PropTypes.number.isRequired,
		price: PropTypes.number.isRequired,
		image: PropTypes.string.isRequired
	}).isRequired,
	ballance: PropTypes.number.isRequired,
	onClick: PropTypes.func.isRequired
};

export default ProductListItem;
