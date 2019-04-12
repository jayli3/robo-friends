import React from 'react';
import {Component} from 'react';

class Card extends Component{
	render(){

		const {name, username, email} = this.props

		return(

			<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
				<img alt='robot' src={`https://robohash.org/${username}?200x200`} />
				<h2 className='dark-gray'>{name}</h2>
				<p className='dark-gray'>{email}</p>
			</div>

			)
	}
}

export default Card;