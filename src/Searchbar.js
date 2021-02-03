import React from 'react';

const Searchbar = ({ searchfield, searchChange }) => {
	return (
		<div className="pa2">
			<input 
				className="pa3 ba b--blue bg-lightest-blue"
				type="search" 
				name="searchbar"
				placeholder="Robot who?"
				onChange={searchChange}
			/>
		</div>
		);
}


export default Searchbar;
