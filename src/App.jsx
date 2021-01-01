import React, {Component} from 'react';
import CvForm from './components/CvForm.jsx';
import CvVisualitation from './components/CvVisualitation.jsx';
import {Container} from 'react-bootstrap';
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
	}
	async changeView(groupType,groupData){
		await this.setState(state => ({
				[groupType+'Info']: state[groupType+'Info']?false:true,
				[groupType+'Data']: groupData,
		}));
		this.visualize(groupType);
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
				<Container id='container'>
					<h1>CV Creator</h1>
					<h2>Personal Info</h2>
					{this.visualize('personal')}
					<hr/>
					<h2>Educational Info</h2>
					{this.visualize('educational')}
					<hr/>
					<h2>Work Info</h2>
					{this.visualize('work')}
					<br/>
				</Container>
			</div>
		)
	}
}
export default App;
