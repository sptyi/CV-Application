import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';

const EducationForm = ({ review }) => {
	const [schoolName, setSchoolName] = useState('');
	const [titleOfStudy, setTitleOfStudy] = useState('');
	const [dateOfStudyFrom, setDateOfStudyFrom] = useState('');
	const [dateOfStudyTo, setDateOfStudyTo] = useState('');

	return (
		<>
			<h1 style={styles.header}>Education</h1>
			<Container style={styles.generalWrapper}>
				{!review ? (
					<Form>
						<Form.Label style={styles.label}>School Name: </Form.Label>
						<Form.Control
							style={styles.input}
							placeholder='University'
							onChange={e => setSchoolName(e.target.value)}
							value={schoolName}
						/>
						<Form.Label style={styles.label}>Title of Study: </Form.Label>
						<Form.Control
							style={styles.input}
							placeholder='Programming'
							onChange={e => setTitleOfStudy(e.target.value)}
							value={titleOfStudy}
						/>
						<Form.Label style={styles.label}>Date of Study: </Form.Label>
						<p>From: </p>
						<Form.Control
							style={styles.input}
							type='date'
							onChange={e => setDateOfStudyFrom(e.target.value)}
							value={dateOfStudyFrom}
						/>
						<p>To: </p>
						<Form.Control
							style={styles.input}
							type='date'
							onChange={e => setDateOfStudyTo(e.target.value)}
							value={dateOfStudyTo}
						/>
					</Form>
				) : (
					<>
						<h2 style={styles.label}>School Name:</h2>
						<p style={styles.text}>{schoolName}</p>
						<h2 style={styles.label}>Title of Study:</h2>
						<p style={styles.text}>{titleOfStudy}</p>
						<h2 style={styles.label}>Date of Study:</h2>
						<p style={styles.text}>From: {dateOfStudyFrom}</p>
						<p style={styles.text}>To: {dateOfStudyTo}</p>
					</>
				)}
			</Container>
		</>
	);
};

const styles = {
	header: {
		marginBottom: 40,
	},
	generalWrapper: {
		display: 'flex',
		flexDirection: 'column',
		width: '40%',
	},
	input: {
		borderRadius: 50,
		marginBottom: 30,
	},
	label: {
		fontSize: 20,
	},
};

export default EducationForm;
