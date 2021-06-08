import React, { useState } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button } from 'react-bootstrap';
import GeneralForm from './GeneralForm';
import EducationForm from './EducationForm';
import PracticalExperienceForm from './PracticalExperienceForm';

function App() {
	const [review, setReview] = useState(false);
	const [educationFormCount, setEducationFormCount] = useState(1);
	const [practicalExperienceFormCount, setPracticalExperienceFormCount] =
		useState(1);

	return (
		<div className='App'>
			<Container style={{ marginBottom: 25 }}>
				<GeneralForm review={review} />
				<hr style={{ width: '50%', margin: '25px auto' }} />
				<EducationForm />
				<Button
					variant='info'
					style={styles.button}
					onClick={() => setEducationFormCount(educationFormCount + 1)}
				>
					+
				</Button>
				<hr style={{ width: '50%', margin: '25px auto' }} />
				<PracticalExperienceForm />
				<Button
					variant='info'
					style={styles.button}
					onClick={() =>
						setPracticalExperienceFormCount(practicalExperienceFormCount + 1)
					}
				>
					+
				</Button>
				<hr style={{ width: '50%', margin: '25px auto' }} />
			</Container>
			<div style={styles.buttonWrapper}>
				<Button
					variant={!review ? 'primary' : 'warning'}
					style={styles.submit}
					onClick={() => {
						setReview(!review);
					}}
				>
					{review ? 'Edit' : 'Review'}
				</Button>
				{review && (
					<Button
						variant='success'
						disabled={review ? false : true}
						style={styles.submit}
					>
						Submit
					</Button>
				)}
			</div>
		</div>
	);
}

const styles = {
	button: {
		borderRadius: '50%',
		outline: 'none',
	},
	buttonWrapper: {
		width: '30%',
		margin: 'auto',
		display: 'flex',
		justifyContent: 'space-around',
	},
	submit: {
		borderRadius: 25,
		outline: 'none',
		marginBottom: 25,
		marginTop: 10,
	},
};

export default App;
