import React from 'react';
import BallancePanel from './BallancePanel';
import BanknotePanel from './BanknotePanel';

const Sidebar = (
	() => (
		<section className="sidebar">
			<BallancePanel />
			<BanknotePanel banknotes={[1,2,5,10,20,50]} />
		</section>
	)
);

export default Sidebar;
