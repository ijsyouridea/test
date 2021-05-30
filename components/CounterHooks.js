import React, {useState,useEffect} from 'react';

// export default class CounterHooks extends React.Component{
// 	constructor(){
// 		super();
// 		this.state = {
// 			count: 0
// 		}
// 	}
// 	setCount = (qty) => this.setState({count: this.state.count + qty})

// 	render(){
// 		const {count} = this.state;
// 		return(
// 			<div>
// 				<p>{count}</p>
// 				<button onClick={()=>this.setCount(2)}>+2</button>
// 				<button onClick={()=>this.setCount(-3)}>-3</button>
// 			</div>
// 		)
// 	}
// }

//hooks 
export default function CounterHooks(){
	let [count, setCount] = useState(1);
	let [data, setData] = useState({});
	let [title, setTitle] = useState('');


	useEffect(function(){
		fetch('https://jsonplaceholder.typicode.com/todos/'+count)
		  .then(response => response.json())
		  .then(json => setTitle(json.title))
		  return ()=>{
		  	console.log('I disapear from dom')
		  }
	},[count])

	return(
		<div>
			<p>{title}</p>
			<input placeholder='name...' name='name' onInput={(e)=>setData({...data, [e.target.name]: e.target.value})}/>
			<input placeholder='surname...' name='surname' onInput={(e)=>setData({...data, [e.target.name]: e.target.value})}/>
			<input placeholder='address...' name='address' onInput={(e)=>setData({...data, [e.target.name]: e.target.value})}/>
			<input placeholder='age...' name='age' onInput={(e)=>setData({...data, [e.target.name]: e.target.value})}/>
			<input placeholder='city...' name='city' onInput={(e)=>setData({...data, [e.target.name]: e.target.value})}/>
			<input placeholder='email...' name='email' onInput={(e)=>setData({...data, [e.target.name]: e.target.value})}/>
			<button onClick={()=>console.log(data)}>send</button>
			<p>{count}</p>
			<button onClick={()=>setCount(++count)}>+</button>
			<button onClick={()=>setCount(--count)}>-</button>
		</div>
	)
}

