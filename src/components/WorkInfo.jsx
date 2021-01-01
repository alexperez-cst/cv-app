import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class WorkInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Companies:'',
			Years:'',
			Position:'',
		}
		this.submitInfo = this.submitInfo.bind(this);
	}
	async submitInfo(event){
		event.preventDefault();
		await this.setState({
			Companies: document.querySelector('#company').value,
			Years: document.querySelector('#numYears').value,
			Position: document.querySelector('#jobPosition').value,
		})
		this.props.visualize('work',this.state)
	}
	render(){
		return (
			<Form onSubmit={this.submitInfo}>
						<Form.Group>
							<Form.Label>Companies:</Form.Label>
							<Form.Control type="text" id='company' placeholder='Enter a list of companies' required={true}/>
						</Form.Group>
						<Form.Group>
							<Form.Label>Years Working:</Form.Label>
							<Form.Control type='text' id='numYears' placeholder='Enter how many years you worked' required={true} />
						</Form.Group>
						<Form.Group>
							<Form.Label>Job Position:</Form.Label>
							<Form.Control type='text' id='jobPosition' placeholder='Enter your desired position' required={true}/>
						</Form.Group>
						<Button type='submit' variant='primary'>Submit</Button>
			</Form>
		);
	}
}
export default WorkInfo;