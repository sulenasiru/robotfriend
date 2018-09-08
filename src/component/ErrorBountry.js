import React,{Component} from 'react';

class ErrorBountry extends Component{
	constructor(props){
		super(props)
		this.state = {
			hasError: false
		}
	}
	ComponentDidCatch(error,infor){
		this.setState({hasError:true})
	}
	render(){
		if(this.state.hasError){
			return <h2>Unable to connect Please try agin</h2>
		}
		return this.props.children
		
}
}

export default ErrorBountry;