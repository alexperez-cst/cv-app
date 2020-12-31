import React, { Component } from 'react';
import { Button, Container } from 'react-bootstrap';
class CvVisualitation extends Component {
	constructor(props) {
		super(props);
		this.preChangeView = this.preChangeView.bind(this);
	}
	preChangeView(){
		this.props.changeView(this.props.groupName,this.props.groupData);
	}
	render(){
		return(
			<Container>
				{Object.keys(this.props.groupData).map(key => {
					return <h3>{key}: {this.props.groupData[key]}</h3>
				})}
				<Button variant='secondary' onClick={this.preChangeView}>Edit</Button>
			</Container>
		)
	}
}
export default CvVisualitation;