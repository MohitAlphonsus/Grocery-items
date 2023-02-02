import React from 'react';

const SearchItem = ({ search, setSearch }) => {
	return (
		<form onSubmit={e => e.preventDefault()}>
			<input
				type="text"
				role="searchbox"
				className="border p-3 w-full focus:outline-none focus:border-blue-100"
				placeholder="Search Item. . ."
				value={search}
				onChange={e => {
					setSearch(e.target.value);
				}}
			/>
		</form>
	);
};

export default SearchItem;
