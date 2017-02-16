import React from 'react';
import times from 'lodash/times';
import Product from '../components/Product';
import Sidebar from './Sidebar';

const App = (
	() => (
		<section className="container">
			<div className="page-header text-center">
				<h1>Vending Machine</h1>
			</div>
			<div className="col-xs-7 col-sm-9">
				{times(3, i => (
					<div key={i} className="row text-center">
						{times(4, i => (
							<div key={i} className="col-sm-6 col-md-3">
								<Product />
							</div>
						))}
					</div>
				))}
			</div>
			<div className="col-xs-5 col-sm-3">
				<Sidebar />
			</div>
		</section>
	)
);

export default App;
