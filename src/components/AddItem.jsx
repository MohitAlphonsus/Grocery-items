const AddItem = ({ enteredItem, setEnteredItem, submitHandler }) => {
	return (
		<form className="flex gap-2" onSubmit={submitHandler}>
			<input
				autoFocus
				type="text"
				className="border p-3 w-full focus:outline-none focus:border-blue-100"
				placeholder="Add Item"
				required
				value={enteredItem}
				onChange={e => setEnteredItem(e.target.value)}
			/>
			<button className="border p-3 basis-1/5 bg-blue-500 text-white uppercase tracking-wider font-medium hover:bg-blue-600">
				Add
			</button>
		</form>
	);
};

export default AddItem;
