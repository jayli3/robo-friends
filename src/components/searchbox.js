import React from 'react';

const SearchBox = (event) => {
	const {searchChange} = event;
	return(
		<div className='pa2'>
			<input className='pa3 ba b--green bg-lightest-blue' type='search' placeholder='Search Robots' onChange={searchChange}/>
		</div>
		);
}

export default SearchBox;