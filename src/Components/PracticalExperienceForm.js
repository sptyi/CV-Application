import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';

const PracticalExperienceForm = ({ review }) => {
	const [companyName, setCompanyName] = useState('');
	const [position, setPosition] = useState('');
	const [routineTasks, setRoutineTasks] = useState('');
	const [dateFrom, setDateFrom] = useState('');
	const [dateTo, setDateTo] = useState('');

	return (
		<>
			<Container style={styles.container}>
				{!review ? (
					<Form style={styles.form}>
						<div style={styles.sectionWrapper}>
							<div></div>
							<Form.Label style={styles.label}>Company Name: </Form.Label>
							<Form.Control
								style={styles.input}
								placeholder='Google'
								onChange={e => setCompanyName(e.target.value)}
								value={companyName}
							/>
						</div>

						<div style={styles.sectionWrapper}>
							<div></div>
							<Form.Label style={styles.label}>Position: </Form.Label>
							<Form.Control
								style={styles.input}
								placeholder='Developer'
								onChange={e => setPosition(e.target.value)}
								value={position}
							/>
						</div>

						<div style={styles.sectionWrapper}>
							<div></div>
							<Form.Label style={styles.label}>Routine Tasks: </Form.Label>
							<Form.Control
								style={styles.input}
								placeholder='Designing new features...'
								onChange={e => setRoutineTasks(e.target.value)}
								value={routineTasks}
							/>
						</div>

						<Form.Label style={styles.label}>Date of Employment: </Form.Label>
						<div style={styles.sectionWrapper}>
							<div></div>
							<p style={{ margin: '12px 0' }}>From: </p>
							<Form.Control
								style={styles.input}
								type='date'
								onChange={e => setDateFrom(e.target.value)}
								value={dateFrom}
							/>
						</div>
						<div style={styles.sectionWrapper}>
							<div></div>
							<p style={{ margin: '12px 0' }}>To: </p>
							<Form.Control
								style={styles.input}
								type='date'
								onChange={e => setDateTo(e.target.value)}
								value={dateTo}
							/>
						</div>
					</Form>
				) : (
					<div style={styles.form}>
						<h2 style={styles.reviewLabel}>Company Name:</h2>
						<p style={styles.text}>{companyName}</p>
						<h2 style={styles.reviewLabel}>Position:</h2>
						<p style={styles.text}>{position}</p>
						<h2 style={styles.reviewLabel}>Routine Tasks:</h2>
						<p style={styles.text}>{routineTasks}</p>
						<h2 style={styles.reviewLabel}>Date of Employment:</h2>
						<p style={styles.text}>From: {dateFrom}</p>
						<p style={styles.text}>To: {dateTo}</p>
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

export default PracticalExperienceForm;
