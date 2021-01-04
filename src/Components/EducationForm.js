import React from 'react';
import { Container, Form } from 'react-bootstrap';

const EducationForm = () => {
	return (
		<>
			<h1 style={styles.header}>Education</h1>
			<Container style={styles.generalWrapper}>
				<Form>
					<Form.Label style={styles.label}>School Name: </Form.Label>
					<Form.Control style={styles.input} placeholder='University' />
					<Form.Label style={styles.label}>Title of Study: </Form.Label>
					<Form.Control style={styles.input} placeholder='Programming' />
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

export default EducationForm;
