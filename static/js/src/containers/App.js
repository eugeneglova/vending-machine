import React from 'react';
import times from 'lodash/times';

const App = (
	() => (
		<section className="container">
			<div className="page-header text-center">
				<h1>Vending Machine</h1>
			</div>
			<div className="container">
				<div className="col-xs-9">
					{times(3, i => (
						<div key={i} className="row text-center">
							{times(4, i => (
								<div key={i} className="col-sm-6 col-md-3">
									<div className="panel panel-default">
										<div className="panel-heading">
											Price: $2
										</div>
										<div className="panel-body">
											<img src="http://placehold.it/80x80" className="img-rounded" />
										</div>
										<div className="panel-footer">
											<button className="btn btn-primary">Select</button>
										</div>
									</div>
								</div>
							))}
						</div>
					))}
				</div>
				<div className="col-xs-3">
					<div className="panel panel-default">
						<div className="panel-heading">
							Ballance
						</div>
						<div className="panel-body">
							$10
						</div>
					</div>
					<div className="panel panel-primary">
						<div className="panel-heading">
							Load banknote
						</div>
						<div className="panel-body">
							<section className="row center-block">
								{[1,2,5].map(banknote => (
									<div key={banknote} className="col-xs-12 col-md-4" style={{ marginBottom: '.5em' }}>
										<button className="btn btn-primary">${banknote}</button>
									</div>
								))}
							</section>
							<section className="row center-block">
								{[10,20,50].map(banknote => (
									<div key={banknote} className="col-xs-12 col-md-4" style={{ marginBottom: '.5em' }}>
										<button className="btn btn-primary">${banknote}</button>
									</div>
								))}
							</section>
						</div>
					</div>
					<div className="panel panel-default">
						<div className="panel-body text-center">
							<button className="btn btn-success btn-lg" disabled="disabled">Buy</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
);

export default App;
