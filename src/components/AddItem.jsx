import { useState } from 'react';

const AddItem = () => {
	const [enteredItem, setEnteredItem] = useState('');

	const submitHandler = e => {
		e.preventDefault();
	};

	return (
		<form className="flex gap-2">
			<input type="text" className="border p-3 w-full" />
			<button className="border p-3 basis-1/5 bg-blue-500 text-white uppercase tracking-wider font-medium hover:bg-blue-600">
				Add
			</button>
		</form>
	);
};

export default AddItem;
