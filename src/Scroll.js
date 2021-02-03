import React from 'react';


const Scroll = (props) => {
	return (
		<div style={{ overflowY: 'scroll', border: '2px solid darkred', borderRadius: '100px', height: '500px', backgroundColor: '#995E7E'}}>
			{props.children}
		</div>
		)
}

export default Scroll;