import React from 'react';
import BalancePanel from './BalancePanel';
import BanknotePanel from './BanknotePanel';
import PurchasedProductList from './PurchasedProductList';

const Sidebar = (
	() => (
		<section className="sidebar">
			<BalancePanel />
			<BanknotePanel banknotes={[1,2,5,10,20,50]} />
			<PurchasedProductList />
		</section>
	)
);

export default Sidebar;
