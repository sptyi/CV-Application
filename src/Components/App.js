import React from 'react';
import '../App.css';
import GeneralForm from './GeneralForm';
import EducationForm from './EducationForm';
import PracticalExperienceForm from './PracticalExperienceForm';

function App() {
	return (
		<div className='App'>
			<GeneralForm />
			<EducationForm />
			<PracticalExperienceForm />
		</div>
	);
}

export default App;
