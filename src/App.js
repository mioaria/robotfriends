import React, { Component } from 'react';
import Cardlist from './Cardlist';
//import {robots} from './robots';
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll';

class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchFiled:'',
        }
    }

componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            return response.json();
        })
        .then(users=>{
            this.setState({robots:users})
        })
}

onSearchChange=(event)=>{
    this.setState({searchFiled:event.target.value})
    
}

    render(){
        const filteredRobots = this.state.robots.filter(robots=>{
            return robots.name.toLowerCase().includes(this.state.searchFiled.toLowerCase())
        })
        if(this.state.robots.length===0){
            return <h1>Loading</h1>
        } else {
            return(
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <Cardlist robots={filteredRobots} />
                    </Scroll>
                    
                </div>
                
            );
        }
    }
    
}












export default App;


