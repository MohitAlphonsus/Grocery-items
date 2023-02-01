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

	const setAndSaveItems = newGroceryItems => {
		setGroceryItems(newGroceryItems);
		localStorage.setItem('grocery', JSON.stringify(newGroceryItems));
	};

	const addItem = item => {
		const id = groceryItems.length
			? groceryItems[groceryItems.length - 1].id + 1
			: 1;
		const newGroceryItem = { id: id, checked: false, item: item };
		const groceryListItems = [...groceryItems, newGroceryItem];
		setAndSaveItems(groceryListItems);
	};

	const onCheckHandler = id => {
		const groceryListItems = groceryItems.map(item =>
			item.id === id ? { ...item, checked: !item.checked } : item,
		);

		setAndSaveItems(groceryListItems);
	};

	const onRemoveItemHandler = id => {
		const groceryListItems = groceryItems.filter(item => item.id !== id);
		setAndSaveItems(groceryListItems);
	};

	const submitHandler = e => {
		e.preventDefault();
		if (!enteredItem) return;
		addItem(enteredItem);
		setEnteredItem('');
	};

	return (
		<div className="flex flex-col gap-8 p-2 shadow-md overflow-hidden">
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
