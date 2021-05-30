import React from 'react';


export default class Counter extends React.Component{


	render(){

		const {count, increment, decrement} = this.props;

		return(
			<div>
				<p>{count}</p>
				<button onClick={increment}>+</button>
				<button onClick={decrement}>-</button>
			</div>
		)
	}
}