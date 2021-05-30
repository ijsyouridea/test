import React from 'react';


export default function Header(props){
	return(
		<p>Hi {props.name} {props.surname} this is header {2+2}</p>
	)
}



export function Footer({name}){
	return(
		<p>Hi {name} this is footer</p>
	)
}