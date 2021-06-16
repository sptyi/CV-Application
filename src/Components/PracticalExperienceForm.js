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
			<h1 style={styles.header}>Practical Experience</h1>
			<Container style={styles.generalWrapper}>
				{!review ? (
					<Form>
						<Form.Label style={styles.label}>Company Name: </Form.Label>
						<Form.Control
							style={styles.input}
							placeholder='Google'
							onChange={e => setCompanyName(e.target.value)}
							value={companyName}
						/>
						<Form.Label style={styles.label}>Position: </Form.Label>
						<Form.Control
							style={styles.input}
							placeholder='Developer'
							onChange={e => setPosition(e.target.value)}
							value={position}
						/>
						<Form.Label style={styles.label}>Routine Tasks: </Form.Label>
						<Form.Control
							style={styles.input}
							placeholder='Designing new features...'
							onChange={e => setRoutineTasks(e.target.value)}
							value={routineTasks}
						/>
						<Form.Label style={styles.label}>Date of Employment: </Form.Label>
						<p>From: </p>
						<Form.Control
							style={styles.input}
							type='date'
							onChange={e => setDateFrom(e.target.value)}
							value={dateFrom}
						/>
						<p>To: </p>
						<Form.Control
							style={styles.input}
							type='date'
							onChange={e => setDateTo(e.target.value)}
							value={dateTo}
						/>
					</Form>
				) : (
					<>
						<h2 style={styles.label}>Company Name:</h2>
						<p style={styles.text}>{companyName}</p>
						<h2 style={styles.label}>Position:</h2>
						<p style={styles.text}>{position}</p>
						<h2 style={styles.label}>Routine Tasks:</h2>
						<p style={styles.text}>{routineTasks}</p>
						<h2 style={styles.label}>Date of Employment:</h2>
						<p style={styles.text}>From: {dateFrom}</p>
						<p style={styles.text}>To: {dateTo}</p>
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

export default PracticalExperienceForm;
