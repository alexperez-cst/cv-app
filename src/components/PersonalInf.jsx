import React, { Component } from 'react';
import {Form,Button} from 'react-bootstrap';

class PersonalInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Name: '',
			Email: '',
			Phone: '',
		}
		this.submitInfo = this.submitInfo.bind(this);
	}
	async submitInfo(event){
		event.preventDefault();
		await this.setState({
			Name: document.querySelector('#name').value,
			Email: document.querySelector('#email').value,
			Phone: document.querySelector('#phoneNumber').value,
		})
		this.props.visualize('personal',this.state)
	}
	render(){
		return (
			<Form onSubmit={this.submitInfo}>
				<Form.Group>
					<Form.Label>Name</Form.Label>
					<Form.Control type="text" id='name' placeholder='Enter Name' required={true} />
				</Form.Group>
				<Form.Group>
					<Form.Label>Email</Form.Label>
					<Form.Control type='email' id='email' placeholder='Enter Email' required={true} />
				</Form.Group>
				<Form.Group>
					<Form.Label>Phone Number</Form.Label>
					<Form.Control type='tel' pattern='\d{9}' id='phoneNumber' placeholder='Enter Phone Number' required={true}/>
				</Form.Group>
				<Button type='submit' variant='secondary'>Submit</Button>
			</Form>
		);
	}
}
export default PersonalInfo;