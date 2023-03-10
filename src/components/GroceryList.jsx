const GroceryList = ({ groceryItems, onCheckHandler, onRemoveItemHandler }) => {
	return (
		<div className="overflow-y-scroll h-full pr-2 mt-8">
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
