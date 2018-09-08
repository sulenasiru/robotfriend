import React,{Component} from 'react';

class Card extends Component{
	render(){
		return(
			<div className='bg-light-green dib br3 pa1 ma3 grow bw2 shadow-5'>
			<img alt='robot'src={`https://robohash.org/${this.props.id}?100X100`} />
			
			<div>
			<h2>{this.props.name}</h2>
			<p>{this.props.email}</p>
            
			</div>
            </div>
			)
	}
}
export default Card;