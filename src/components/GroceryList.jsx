import { useState } from 'react';

const groceryList = [
	{ id: 1, checked: false, item: 'Bread' },
	{ id: 2, checked: false, item: 'Butter' },
	{ id: 3, checked: false, item: 'Almond' },
];

const GroceryList = () => {
	const [groceryItems, setGroceryItems] = useState(groceryList);

	const onCheckHandler = id => {
		const groceryListItems = groceryItems.map(item =>
			item.id === id ? { ...item, checked: !item.checked } : item,
		);

		setGroceryItems(groceryListItems);
		localStorage.setItem('grocery', JSON.stringify(groceryListItems));
	};

	const onRemoveItemHandler = id => {
		const groceryListItems = groceryItems.filter(item => item.id !== id);
		setGroceryItems(groceryListItems);
		localStorage.setItem('grocery', JSON.stringify(groceryListItems));
	};

	return (
		<div>
			{groceryItems.length ? (
				<ul className="flex flex-col gap-2">
					{groceryItems.map(listItem => (
						<li
							key={listItem.id}
							id={listItem.id}
							className="list-none flex items-center justify-between border px-2 py-3 rounded-md"
						>
							<div className="flex items-center gap-8">
								<input
									type="checkbox"
									checked={listItem.checked}
									className=" w-6 h-6"
									onChange={() => onCheckHandler(listItem.id)}
								/>
								<label>{listItem.item}</label>
							</div>
							<button
								className="bg-red-400 py-1 px-2 text-red-50 hover:bg-red-500"
								onClick={() => onRemoveItemHandler(listItem.id)}
							>
								remove
							</button>
						</li>
					))}
				</ul>
			) : (
				<p className="text-center text-lg text-slate-400">
					List is empty, start adding...
				</p>
			)}
		</div>
	);
};

export default GroceryList;
