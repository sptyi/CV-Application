import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';

const GeneralForm = review => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');

	return (
		<>
			<h1 style={styles.header}>General Information</h1>
			<Container style={styles.generalWrapper}>
				{!review ? (
					<Form>
						<Form.Label style={styles.label}>Name: </Form.Label>
						<Form.Control
							required
							style={styles.textInput}
							placeholder='Who are you?'
							onChange={e => setName(e.target.value)}
						/>
						<Form.Label style={styles.label}>Email: </Form.Label>
						<Form.Control
							required
							style={styles.textInput}
							placeholder='you@wherever.com'
							type='email'
							onChange={e => setEmail(e.target.value)}
						/>
						<Form.Label style={styles.label}>Phone #: </Form.Label>
						<Form.Control
							required
							style={styles.textInput}
							placeholder='555-123-4567'
							type='tel'
							onChange={e => setPhone(e.target.value)}
						/>
					</Form>
				) : (
					<>
						<h2 style={styles.label}>Name:</h2>
						<p style={styles.text}>{name}</p>
						<h2 style={styles.label}>Email:</h2>
						<p style={styles.text}>{email}</p>
						<h2 style={styles.label}>Phone #:</h2>
						<p style={styles.text}>{phone}</p>
					</>
				)}
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
		width: '40%',
	},
	textInput: {
		borderRadius: 50,
		marginBottom: 30,
	},
	text: {
		marginBottom: 30,
	},
	label: {
		fontSize: 20,
	},
};

export default GeneralForm;
