import React, { Component } from 'react';
import { Form,Button } from 'react-bootstrap';

class EducationalInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			School:'',
			Title:'',
			Graduation:''
		}
		this.submitInfo = this.submitInfo.bind(this);
	}
	async submitInfo(event){
		event.preventDefault();
		await this.setState({
			School: document.querySelector('#schoolName').value,
			Title: document.querySelector('#studyTitle').value,
			Graduation: document.querySelector('#graduationYear').value,
		})
		this.props.visualize('educational',this.state)
	}
	render(){
		return (
			<Form onSubmit={this.submitInfo}>
							<Form.Group>
								<Form.Label>School Name</Form.Label>
								<Form.Control type="text" id='schoolName' placeholder='Enter School Name' required={true}/>
							</Form.Group>
							<Form.Group>
								<Form.Label>Title of Study</Form.Label>
								<Form.Control type='text' id='studyTitle' placeholder='Enter Study Title' required={true} />
							</Form.Group>
							<Form.Group>
								<Form.Label>Year of Graduation</Form.Label>
								<Form.Control type='date' id='graduationYear' placeholder='Enter Year' required={true}/>
							</Form.Group>
							<Button type='submit' variant='secondary'>Submit</Button>
			</Form>
		);
	}
}
export default EducationalInfo;