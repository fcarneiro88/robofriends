import React from 'react';



const  Card = (props) => {
	return (
		<div className="contain ph3 pv tc bg-purple b-green dib pa2 mr4 grow br3 bw4 shadow-5">
			<img alt="robots" src={`https://robohash.org/${props.id}125x125`} />
			<div>
				<h2 className='avenir tc fw5 f4'>{props.name}</h2>
				<p className='avenir tc fw3'>{props.email}</p>
			</div>
		</div>
		);
}

export default Card;