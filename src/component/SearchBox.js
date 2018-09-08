import React from 'react';

const SearchBox = ({searchField, searchChange}) =>{
	
		return(

			<div className='tc'>
			<input className='pa2 ba' placeholder='Search Robots'
			 onChange= {searchChange}/>		
			</div>
	         )
			
			 }
export default SearchBox;
			
			
          
			
	
