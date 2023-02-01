import { useState } from 'react';
import AddItem from './AddItem';
import GroceryList from './GroceryList';

const grocery = [
	{ id: 1, checked: false, item: 'Bread' },
	{ id: 2, checked: false, item: 'Butter' },
	{ id: 3, checked: false, item: 'Almond' },
];

const MainContent = () => {
	const [groceryItems, setGroceryItems] = useState(grocery);
	const [enteredItem, setEnteredItem] = useState('');

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

	const submitHandler = e => {
		e.preventDefault();
	};

	return (
		<div className="flex flex-col gap-8 p-2 shadow-md">
			<AddItem
				enteredItem={enteredItem}
				setEnteredItem={setEnteredItem}
				submitHandler={submitHandler}
			/>
			<GroceryList
				groceryItems={groceryItems}
				setGroceryItems={setGroceryItems}
				onCheckHandler={onCheckHandler}
				onRemoveItemHandler={onRemoveItemHandler}
			/>
		</div>
	);
};

export default MainContent;
