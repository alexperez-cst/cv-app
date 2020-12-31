import './App.css';
import React, {Component} from 'react';
import CvForm from './components/CvForm.jsx';
import CvVisualitation from './components/CvVisualitation.jsx';
import {Button, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			personalInfo:true,
			personalData:{},
			educationalInfo:true,
			educationalData:{},
			workInfo:true,
			workData:{},
		}
		this.changeView = this.changeView.bind(this);
		this.visualize = this.visualize.bind(this);
		this.addWork = this.addWork.bind(this);
	}
	async changeView(groupType,groupData){
		console.log(groupType,groupData);
		await this.setState(state => ({
				[groupType+'Info']: state[groupType+'Info']?false:true,
				[groupType+'Data']: groupData,
		}));
		console.log(this.state)
		this.visualize(groupType);
	}
	addWork(){
		if(this.state.workInfo){
			return <Button variant='secondary' onClick={this.visualize.bind(this,'work')}>Add Work</Button>
		}
	}
	visualize(group){
		if(this.state[group+'Info']){
			return <CvForm visualize={this.changeView} group={group+'Info'}/>
		}
		return <CvVisualitation changeView={this.changeView} groupName={group} groupData={this.state[group+'Data']}/>
	}
	render(){
		return (
			<div>
				<h1>CV</h1>
				<Container>
					<h2>Personal Info</h2>
					{this.visualize('personal')}
					<h2>Educational Info</h2>
					{this.visualize('educational')}
					<h2>Work Info</h2>
					{this.visualize('work')}
				</Container>
			</div>
		)
	}
}
export default App;
