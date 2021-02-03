import React, {Component} from 'react';
import CardList from "./CardList";
import { robots } from "./Robots";
import Searchbar from './Searchbar';
import './App.css';
import Scroll from './Scroll';
import ErrorBoundry from './ErrorBoundry';



class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({ robots: users}));
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value})
	}

	render () {
		const filteredRobots = this.state.robots.filter(robot =>{
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
		if (!robots.length) {
			return <h1>Loading</h1>
		}else {
			return (
				<div className ='tc'>
					<h1 className ='f1'>Robofriends</h1>
					<Searchbar searchChange={this.onSearchChange}/>
					<Scroll>
						<ErrorBoundry>
							<CardList robots={filteredRobots}/>
						</ErrorBoundry>
					</Scroll>
				</div>
			)
		};
	}
}

export default App;