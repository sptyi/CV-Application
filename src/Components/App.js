import React, { useState } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import GeneralForm from './GeneralForm';
import EducationForm from './EducationForm';
import PracticalExperienceForm from './PracticalExperienceForm';

function App() {
	const [review, setReview] = useState(false);
	const [educationForms, setEducationForms] = useState([]);
	const [practicalForms, setPracticalForms] = useState([]);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<div className='App'>
			<div style={styles.container}>
				<h1 style={{ marginBottom: 25 }}>My CV</h1>
				<h2 style={styles.header}>General Information</h2>
				<GeneralForm review={review} />

				<div style={{ display: 'flex' }}>
					<div style={{ width: '50%' }}>
						<h2 style={styles.header}>Education</h2>
						<EducationForm review={review} />
						{educationForms.map(elem => {
							return elem;
						})}

						{!review && (
							<Button
								variant='info'
								style={styles.plusButton}
								onClick={() => {
									setEducationForms([
										...educationForms,
										<EducationForm review={review} />,
									]);
								}}
							>
								+
							</Button>
						)}
					</div>

					<div style={{ width: '50%' }}>
						<h2 style={styles.header}>Practical Experience</h2>
						<PracticalExperienceForm review={review} />
						{practicalForms.map(elem => {
							return elem;
						})}

						{!review && (
							<Button
								variant='info'
								style={styles.plusButton}
								onClick={() => {
									setPracticalForms([
										...practicalForms,
										<PracticalExperienceForm review={review} />,
									]);
								}}
							>
								+
							</Button>
						)}
					</div>
				</div>
			</div>

			<hr style={{ width: '30%', margin: '25px auto' }} />

			<div style={styles.buttonWrapper}>
				<Button
					variant={!review ? 'primary' : 'warning'}
					style={styles.submit}
					onClick={() => {
						setReview(!review);
						scrollToTop();
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
	container: {
		marginTop: 25,
	},
	header: {
		marginBottom: 10,
		fontSize: 30,
	},
	plusButton: {
		width: 40,
		height: 40,
		borderRadius: 20,
		padding: 0,
		outline: 'none',
		boxShadow: '1px 1px 5px #777, -1px -1px 5px #777',
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
		boxShadow: '1px 1px 5px #777, -1px -1px 5px #777',
	},
};

export default App;
