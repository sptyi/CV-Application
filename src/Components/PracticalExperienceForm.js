import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const PracticalExperienceForm = (
	practicalExperienceFormCount,
	setPracticalExperienceFormCount
) => {
	return (
		<>
			<h1 style={styles.header}>Practical Experience</h1>
			<Container style={styles.generalWrapper}>
				<Form style={{ marginBottom: 20 }}>
					<Form.Label style={styles.label}>Comapny Name: </Form.Label>
					<br />
					<Form.Control style={styles.input} placeholder='Google' />
					<br />
					<Form.Label style={styles.label}>Position: </Form.Label>
					<br />
					<Form.Control style={styles.input} placeholder='Data Scientist' />
					<br />
					<Form.Label style={styles.label}>Routine Tasks: </Form.Label>
					<br />
					<Form.Control style={styles.input} placeholder='Server Maintenance' />
					<br />
					<Form.Label style={styles.label}>Date of Study: </Form.Label>
					<br />
					<p>From: </p>
					<Form.Control style={styles.input} type='date' />
					<p>To: </p>
					<Form.Control style={styles.input} type='date' />
					<br />
					<Button
						variant='primary'
						style={styles.button}
						onClick={() => alert('This worked!')}
					>
						Add More
					</Button>
				</Form>
			</Container>
		</>
	);
};

const styles = {
	header: {
		marginBottom: 40,
		marginTop: 50,
	},
	generalWrapper: {
		display: 'flex',
		flexDirection: 'column',
	},
	input: {
		borderRadius: 15,
		border: '#999 1px solid',
		outline: 'none',
		width: '25%',
		height: 30,
		marginBottom: 30,
		paddingLeft: 10,
	},
	label: {
		fontSize: 20,
	},
	button: {
		borderRadius: 15,
		outline: 'none',
		padding: 5,
		width: 90,
	},
};

export default PracticalExperienceForm;
