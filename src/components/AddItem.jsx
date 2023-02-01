import { useState } from 'react';

const AddItem = () => {
	const [enteredItem, setEnteredItem] = useState('');

	const submitHandler = e => {
		e.preventDefault();

		setEnteredItem(e.target.value);
		console.log(e.target.value);
		console.log(enteredItem);
	};

	return (
		<form className="flex gap-2" onSubmit={submitHandler}>
			<input
				type="text"
				className="border p-3 w-full focus:outline-none focus:border-blue-100"
			/>
			<button className="border p-3 basis-1/5 bg-blue-500 text-white uppercase tracking-wider font-medium hover:bg-blue-600">
				Add
			</button>
		</form>
	);
};

export default AddItem;
