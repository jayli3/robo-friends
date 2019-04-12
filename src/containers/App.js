import React, {Component} from 'react';
import CardList from '../components/cardlist.js';
import SearchBox from '../components/searchbox.js';
import Scroll from '../components/scroll.js';
import './App.css';

class App extends Component {
	constructor(){
		super();
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response =>{return response.json();})
			.then(users => {this.setState({robots: users});
		});
		
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value});
	}

	render(){
		const filteredRobots = this.state.robots.filter((robot)=>{
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		});
		if(this.state.robots.length === 0){
			return(
				<h1 className='tc'>Loading Robots...</h1>
				);
		}
		else{
			return(
				<div className='tc'>
					<h1 className='f1'>RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange} searchfield={this.state.searchfield}/>
					<Scroll>
						<CardList robots={filteredRobots}/>
					</Scroll>
				</div>
				);
		}
	}
}

export default App;