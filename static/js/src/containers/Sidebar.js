import React from 'react';

const Sidebar = (
	() => (
		<section className="sidebar">
			<div className="panel panel-default">
				<div className="panel-heading">
					Ballance
				</div>
				<div className="panel-body text-center">
					$10
				</div>
			</div>
			<div className="panel panel-primary">
				<div className="panel-heading">
					Load banknote
				</div>
				<div className="panel-body">
					<section className="row center-block">
						{[1,2,5,10].map(banknote => (
							<div key={banknote} className="col-md-6 text-center" style={{ marginBottom: '.5em' }}>
								<button className="btn btn-primary">${banknote}</button>
							</div>
						))}
					</section>
					<section className="row center-block">
						{[20,50].map(banknote => (
							<div key={banknote} className="col-md-6  text-center" style={{ marginBottom: '.5em' }}>
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
			<div className="panel panel-default">
				<div className="panel-heading">
					Change
				</div>
				<div className="panel-body text-center">
					$0
				</div>
			</div>
		</section>
	)
);

export default Sidebar;
