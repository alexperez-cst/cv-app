import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
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
			<div>
				{Object.keys(this.props.groupData).map(key => {
					return	<div>
										<h3>{key}:</h3>
										<p>{this.props.groupData[key]}</p>
									</div>
				})}
				<Button variant='primary' onClick={this.preChangeView}>Edit</Button>
			</div>
		)
	}
}
export default CvVisualitation;