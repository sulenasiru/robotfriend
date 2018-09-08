import React, { Component } from 'react';
import './App.css';
import CardList from '../component/CardList';
import SearchBox from '../component/SearchBox';
import Scroll from '../component/Scroll';
import {connect} from 'react-redux';
import Header from '../component/Header';


import {setSearchField, requestRobots} from '../action'
 
const mapStateToProps = state =>{
  return{
    searchField: state.searchRobots.searchField,
   Robots: state.requestRobots.Robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error

  }
}

const mapDispatchToProps = (dipatch) => {
 return{

  onSearchChange: (event) => dipatch(setSearchField(event.target.value)),
  onRequestRobots:() => dipatch(requestRobots())
}
}
class App extends Component { 
  
  componentDidMount(){
this.props.onRequestRobots();
    
  }
  /*
  onSearchChange =(event) => {

    this.setState({searchField: event.target.value}) 
  
}
*/
  render() {
    const {searchField, onSearchChange, Robots} = this.props;
     const filteredrobots = Robots.filter(Robots =>{
    
    return Robots.name.toLowerCase().includes(searchField.toLowerCase())
  })
    return( 
    

    
      <div className='tc'>
      <Header/>
      <SearchBox  searchChange={onSearchChange}/>
      <Scroll>
      
      <CardList Robots={filteredrobots}/>    
      </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
