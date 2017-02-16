import React from 'react';

const Product = (
	() => (
		<div className="panel panel-default">
			<div className="panel-heading">
				Price: $2
			</div>
			<div className="panel-body">
				<img src="http://lorempixel.com/112/160/technics/" className="img-rounded" />
			</div>
			<div className="panel-footer">
				<button className="btn btn-primary">Select</button>
			</div>
		</div>
	)
);

export default Product;
