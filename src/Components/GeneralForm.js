import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';

const GeneralForm = ({ review }) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');

	return (
		<>
			<Container style={styles.container}>
				{!review ? (
					<Form>
						<Form.Label style={styles.label}>Name: </Form.Label>
						<Form.Control
							required
							style={styles.textInput}
							placeholder='Who are you?'
							onChange={e => setName(e.target.value)}
							value={name}
						/>
						<Form.Label style={styles.label}>Email: </Form.Label>
						<Form.Control
							required
							style={styles.textInput}
							placeholder='you@wherever.com'
							type='email'
							onChange={e => setEmail(e.target.value)}
							value={email}
						/>
						<Form.Label style={styles.label}>Phone #: </Form.Label>
						<Form.Control
							required
							style={styles.textInput}
							placeholder='555-123-4567'
							type='tel'
							onChange={e => setPhone(e.target.value)}
							value={phone}
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
	container: {
		display: 'flex',
		flexDirection: 'column',
		width: '40%',
		borderRadius: '10px',
		boxShadow: '2px 2px 5px #333',
		marginBottom: 25,
	},
	header: {
		marginBottom: 10,
		marginTop: 25,
		fontSize: 30,
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
