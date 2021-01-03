import React, { useState } from 'react';
import '../App.css';
import GeneralForm from './GeneralForm';
import EducationForm from './EducationForm';
import PracticalExperienceForm from './PracticalExperienceForm';

function App() {
	const [educationFormCount, setEducationFormCount] = useState(1);
	const [
		practicalExperienceFormCount,
		setPracticalExperienceFormCount,
	] = useState(1);

	return (
		<div className='App'>
			<GeneralForm />
			<EducationForm
				educationFormCount={educationFormCount}
				setEducationFormCount={setEducationFormCount}
            />
            <p>{educationFormCount}</p>
			<PracticalExperienceForm
				practicalExperienceFormCount={practicalExperienceFormCount}
				setPracticalExperienceFormCount={setPracticalExperienceFormCount}
			/>
		</div>
	);
}

export default App;
