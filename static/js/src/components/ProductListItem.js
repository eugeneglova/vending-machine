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
				{
					product.count <= 0 ?
					<label className="btn-sm text-danger">Out of stock</label> :
					product.loading ?
					<button className="btn btn-primary">Buying ...</button> :
					product.price <= balance.value ?
					<button className="btn btn-primary" onClick={() => onClick(product.id)}>Buy</button> :
					<label className="btn-sm text-warning">Load <strong>${product.price - balance.value}</strong> more</label>
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
	balance: PropTypes.shape({
		loading: PropTypes.bool.isRequired,
		value: PropTypes.number.isRequired
	}),
	onClick: PropTypes.func.isRequired
};

export default ProductListItem;
