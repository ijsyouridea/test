import React, {useState} from 'react';
import './item.css';
import Counter from './Counter';
import CounterHooks from './CounterHooks';
import ItemHeader from './ItemHeader';



export default function Item({name: myParameter, city, count, decrement, increment,phone}){
	const [name, setName] = useState('');

	// let handleInput = (e) => {
	// 	setName(e.target.value);
	// 	alert(e.target.value);
	// }

	return(

			<div className='item'>
				<p>{name}</p>
				<input name='nameInput' onInput={(e)=>console.log(e.target.name)} />
				<ItemHeader name={name}/>
				<Counter count={count} decrement={decrement} increment={increment} />
				<p>{myParameter}</p>
				{city}
				<p>{phone}</p>
				<CounterHooks />
			</div>
	)
}