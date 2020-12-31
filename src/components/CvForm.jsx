import React, {Component} from 'react';
import PersonalInfo from './PersonalInf.jsx';
import EducationalInfo from './EducationalInfo.jsx';
import WorkInfo from './WorkInfo.jsx';
class CvForm extends Component{
	constructor(props){
		super(props);
		this.checkType = this.checkType.bind(this);
	}
	checkType(groupType){
		switch(groupType){
			case('educationalInfo'):{
				return <EducationalInfo visualize={this.props.visualize}/>
			}
			case('personalInfo'):{
				return <PersonalInfo visualize={this.props.visualize}/>
			}
			default: {
				return <WorkInfo visualize={this.props.visualize}/>;
			}
		}
	}
	render(){
		const {group} = this.props;
		return(
			this.checkType(group)
		);
	}
}
export default CvForm