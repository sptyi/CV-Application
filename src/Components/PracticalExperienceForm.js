import React from 'react';
import { Container, Form } from 'react-bootstrap';

const PracticalExperienceForm = () => {
	return (
		<>
			<h1 style={styles.header}>Practical Experience</h1>
			<Container style={styles.generalWrapper}>
				<Form>
					<Form.Label style={styles.label}>Comapny Name: </Form.Label>
					<Form.Control style={styles.input} placeholder='Google' />
					<Form.Label style={styles.label}>Position: </Form.Label>
					<Form.Control style={styles.input} placeholder='Data Scientist' />
					<Form.Label style={styles.label}>Routine Tasks: </Form.Label>
					<Form.Control style={styles.input} placeholder='Server Maintenance' />
					<Form.Label style={styles.label}>Date of Study: </Form.Label>
					<p>From: </p>
					<Form.Control style={styles.input} type='date' />
					<p>To: </p>
					<Form.Control style={styles.input} type='date' />
				</Form>
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
