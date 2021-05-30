import React,{Component} from 'react';

import Header, {Footer} from './components/Header.js'

import Item from './components/Item'
import Counter from './components/Counter'
import CounterHooks from './components/CounterHooks'
import Options from './components/Options'

export default class App extends Component{
		state = {
			count: 0,
			name: 'Dalia',
			data: [],
			loading: true,
			show: true
		}
	
		decrement = () => this.setState(state=>(state.count-- ))
		increment = () => this.setState(state=>(state.count++ ))

	componentDidMount(){

		fetch('https://jsonplaceholder.typicode.com/users')
		.then(data => data.json())
		.then(json => {
			this.setState({data: json})
			return json
		})
		.then(json => console.log(json))
		.catch(err=>alert('smth going wrong try again'))
		.finally(()=>{
			this.setState({loading: false})
			console.log('fetch call was finished')
		})
	}

	render(){
		const {count, name, data, loading, show} = this.state;
  	return (
	    <div>

	    	{name}
	    	<Header name={name} surname='G.'/>

	    	<select>
	    		<option value='' >{'--> choose sex <--'}</option>
	    		<Options />
	    	</select>

	    	<div>{count}</div>

	    	<Counter count={count} decrement={this.decrement} increment={this.increment} />

	    	{
	    		loading
	    	?
	    		<p>Loading...</p>
	    	:
		    	
		    	show
		    		
		    	?
			    	<div style={{display: 'flex', flexWrap: 'wrap'}}>
			    		{
			    			data.map( i => 
			    				<Item 
			    					key={i.id} 
			    					count={count} 
			    					decrement={this.decrement} 
			    					increment={this.increment} 
			    					name={i.name} 
			    					city={i.address.city}
			    					phone={i.phone}
			    				/>
			    			)
			    		}
			    	</div>
		    	:
		    		null
		    	
		    	
		    }
		    <button onClick={()=>this.setState({show: !show})}>{show?'hide':'show'}</button>

	    	<Footer name={name}/>
	    	<CounterHooks />
	    </div>
  	)
  }
}

