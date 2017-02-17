import React, { PropTypes } from 'react';

const ProductListItem = (
	({ product, balance, onClick }) => (
		<div className="panel panel-default">
			<div className="panel-heading">
				Price: <strong>${product.price}</strong> Count: <strong>{product.count}</strong>
			</div>
			<div className="panel-body">
				<img src={product.image} className="img-rounded img-responsive center-block" />
			</div>
			<div className="panel-footer">
				{product.count <= 0 ?
					<span className="text-danger">Out of stock</span>
					:
					product.price <= balance ?
						<button className="btn btn-primary" onClick={() => onClick(product.id)}>Buy</button>
						:
						<span className="text-warning">Load <strong>${product.price - balance}</strong> more</span>
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
	balance: PropTypes.number.isRequired,
	onClick: PropTypes.func.isRequired
};

export default ProductListItem;
