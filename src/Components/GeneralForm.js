import React from 'react';
import { Container, Form } from 'react-bootstrap';

const GeneralForm = () => {
	return (
		<>
			<h1 style={styles.header}>General Information</h1>
			<Container style={styles.generalWrapper}>
				<Form>
					<Form.Label style={styles.label}>Name: </Form.Label>
					<br />
					<Form.Control style={styles.textInput} placeholder='Who are you?' />
					<br />
					<Form.Label style={styles.label}>Email: </Form.Label>
					<br />
					<Form.Control
						style={styles.textInput}
						placeholder='you@wherever.com'
						type='email'
					/>
					<br />
					<Form.Label style={styles.label}>Phone #: </Form.Label>
					<br />
					<Form.Control
						style={styles.textInput}
						placeholder='555-123-4567'
						type='tel'
					/>
				</Form>
			</Container>
		</>
	);
};

const styles = {
	header: {
        marginBottom: 40,
        marginTop: 25,
	},
	generalWrapper: {
		display: 'flex',
		flexDirection: 'column',
	},
	textInput: {
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

export default GeneralForm;
