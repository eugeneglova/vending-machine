import React from 'react';
import BanknotePanel from './BanknotePanel';

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
			<BanknotePanel banknotes={[1,2,5,10,20,50]} />
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
