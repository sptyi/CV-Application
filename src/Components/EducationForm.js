import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';

const EducationForm = ({ review }) => {
	const [schoolName, setSchoolName] = useState('');
	const [titleOfStudy, setTitleOfStudy] = useState('');
	const [dateOfStudyFrom, setDateOfStudyFrom] = useState('');
	const [dateOfStudyTo, setDateOfStudyTo] = useState('');

	return (
		<>
			<Container style={styles.container}>
				{!review ? (
					<Form style={styles.form}>
						<div style={styles.sectionWrapper}>
							<div></div>
							<Form.Label style={styles.label}>School Name: </Form.Label>
							<Form.Control
								style={styles.input}
								placeholder='University'
								onChange={e => setSchoolName(e.target.value)}
								value={schoolName}
							/>
						</div>

						<div style={styles.sectionWrapper}>
							<div></div>
							<Form.Label style={styles.label}>Title of Study: </Form.Label>
							<Form.Control
								style={styles.input}
								placeholder='Software Engineering'
								onChange={e => setTitleOfStudy(e.target.value)}
								value={titleOfStudy}
							/>
						</div>

						<Form.Label style={styles.label}>Date of Study: </Form.Label>
						<div style={styles.sectionWrapper}>
							<div></div>
							<p style={{ margin: '12px 0' }}>From: </p>
							<Form.Control
								style={styles.input}
								type='date'
								onChange={e => setDateOfStudyFrom(e.target.value)}
								value={dateOfStudyFrom}
							/>
						</div>
						<div style={styles.sectionWrapper}>
							<div></div>
							<p style={{ margin: '12px 0' }}>To: </p>
							<Form.Control
								style={styles.input}
								type='date'
								onChange={e => setDateOfStudyTo(e.target.value)}
								value={dateOfStudyTo}
							/>
						</div>
					</Form>
				) : (
					<div style={styles.form}>
						<h2 style={styles.reviewLabel}>School Name:</h2>
						<p style={styles.text}>{schoolName}</p>
						<h2 style={styles.reviewLabel}>Title of Study:</h2>
						<p style={styles.text}>{titleOfStudy}</p>
						<h2 style={styles.reviewLabel}>Date of Study:</h2>
						<p style={styles.text}>From: {dateOfStudyFrom}</p>
						<p style={styles.text}>To: {dateOfStudyTo}</p>
					</div>
				)}
			</Container>
		</>
	);
};

const styles = {
	container: {
		display: 'flex',
		flexDirection: 'column',
		width: '75%',
		borderRadius: '10px',
		boxShadow: '1px 1px 5px #777, -1px -1px 5px #777',
		marginBottom: 25,
	},
	header: {
		marginBottom: 40,
	},
	form: {
		padding: 25,
	},
	input: {
		borderRadius: 50,
		margin: '10px 0',
		width: '60%',
	},
	label: {
		fontSize: 17,
		marginBottom: 10,
		marginTop: 15,
	},
	reviewLabel: {
		fontSize: 20,
	},
	text: {
		fontSize: 15,
	},
	sectionWrapper: {
		display: 'flex',
		justifyContent: 'space-between',
	},
};

export default EducationForm;
