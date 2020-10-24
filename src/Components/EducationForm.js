import React from 'react';
import { Container, Form } from 'react-bootstrap';

const EducationForm = () => {
	return (
		<>
			<h1 style={styles.header}>Education</h1>
			<Container style={styles.generalWrapper}>
				<Form>
					<Form.Label style={styles.label}>School Name: </Form.Label>
					<br />
					<Form.Control style={styles.input} placeholder='University' />
					<br />
					<Form.Label style={styles.label}>Title of Study: </Form.Label>
					<br />
					<Form.Control style={styles.input} placeholder='Programming' />
					<br />
					<Form.Label style={styles.label}>Date of Study: </Form.Label>
					<br />
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
};

export default EducationForm;
