import React from 'react';
import AddItem from './AddItem';
import GroceryList from './GroceryList';

const MainContent = () => {
	return (
		<div className="flex flex-col gap-8 p-2 shadow-md">
			<AddItem />
			<GroceryList />
		</div>
	);
};

export default MainContent;
