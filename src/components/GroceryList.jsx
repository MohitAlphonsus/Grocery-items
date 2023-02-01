import React from 'react';

const groceryList = [
	{ id: 1, checked: false, item: 'Bread' },
	{ id: 2, checked: false, item: 'Butter' },
	{ id: 3, checked: false, item: 'Almond' },
];

const GroceryList = () => {
	return (
		<ul className="flex flex-col gap-2">
			{groceryList.map(listItem => (
				<li
					key={listItem.id}
					className="list-none flex items-center justify-between border px-2 py-3 rounded-md"
				>
					<div className="flex items-center gap-8">
						<input
							type="checkbox"
							checked={listItem.checked}
							className=" w-6 h-6"
						/>
						<label>{listItem.item}</label>
					</div>
					<button className="bg-red-400 py-1 px-2 text-red-50 hover:bg-red-500">
						remove
					</button>
				</li>
			))}
		</ul>
	);
};

export default GroceryList;
