import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
	if (true){
		throw new Error('NOOOOOOO!')
	}
	return(
		<div>
	    	{
	    		//could've simply used user.key
	    		//for learning purposes I'll keep robots[i].key
		    	robots.map((user, i) => {
					return (
						<Card
						key={robots[i].id}
						id={robots[i].id}
						name={robots[i].name}
						email={robots[i].email}
						/>
					);
				})
	    	}
    	</div>
	);
}

export default CardList;