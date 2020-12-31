import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class WorkInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Company:'',
			Years:'',
			Position:'',
		}
		this.submitInfo = this.submitInfo.bind(this);
	}
	async submitInfo(event){
		event.preventDefault();
		await this.setState({
			Company: document.querySelector('#company').value,
			Years: document.querySelector('#numYears').value,
			Position: document.querySelector('#jobPosition').value,
		})
		this.props.visualize('work',this.state)
	}
	render(){
		return (
			<Form onSubmit={this.submitInfo}>
						<Form.Group>
							<Form.Label>Company Name:</Form.Label>
							<Form.Control type="text" id='company' placeholder='Enter Company Name' required={true}/>
						</Form.Group>
						<Form.Group>
							<Form.Label>Years Working:</Form.Label>
							<Form.Control type='text' id='numYears' placeholder='Enter how long did you work at that company' required={true} />
						</Form.Group>
						<Form.Group>
							<Form.Label>Job Position:</Form.Label>
							<Form.Control type='text' id='jobPosition' placeholder='Enter your job position' required={true}/>
						</Form.Group>
						<Button type='submit' variant='secondary'>Submit</Button>
			</Form>
		);
	}
}
export default WorkInfo;