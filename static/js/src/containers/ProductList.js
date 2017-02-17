import React, { PropTypes } from 'react';
import Product from '../components/Product';
import { connect } from 'react-redux';
import map from 'lodash/map';
import { buyProduct } from '../actions';

const ProductList = (
	({ products, ballance, onProductClick }) => (
		<section className="row">
			{map(products.data, product => (
				<div key={product.id} className="col-xs-12 col-sm-6 col-md-4 col-lg-3 text-center">
					<Product product={product} ballance={ballance} onClick={onProductClick} />
				</div>
			))}
		</section>
	)
);

ProductList.propTypes = {
	products: PropTypes.shape({
		loading: PropTypes.bool.isRequired,
		data: PropTypes.object.isRequired
	}).isRequired,
	ballance: PropTypes.number.isRequired,
	onProductClick: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	products: state.products,
	ballance: state.ballance
});

const mapDispatchToProps = dispatch => ({
	onProductClick: id =>  dispatch(buyProduct(id))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProductList);
