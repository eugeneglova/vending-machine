import React, { PropTypes } from 'react';

const Product = (
	({ product, onClick }) => (
		<div className="panel panel-default">
			<div className="panel-heading">
				Price: ${product.price}
			</div>
			<div className="panel-body">
				<img src={`http://lorempixel.com/112/160/technics/?random=${product.id}`} className="img-rounded" />
			</div>
			<div className="panel-footer">
				<button className="btn btn-primary" onClick={() => onClick(product.id)}>Buy</button>
			</div>
		</div>
	)
);

Product.propTypes = {
	product: PropTypes.shape({
		id: PropTypes.number.isRequired,
		price: PropTypes.number.isRequired
	}).isRequired,
	onClick: PropTypes.func.isRequired
};

export default Product;
