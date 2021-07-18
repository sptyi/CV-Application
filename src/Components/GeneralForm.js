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
					<Form style={styles.form}>
						<div style={styles.sectionWrapper}>
							<div></div>
							<Form.Label style={styles.label}>Name: </Form.Label>
							<Form.Control
								required
								style={styles.input}
								placeholder='Who are you?'
								onChange={e => setName(e.target.value)}
								value={name}
							/>
						</div>

						<div style={styles.sectionWrapper}>
							<div></div>
							<Form.Label style={styles.label}>Email: </Form.Label>
							<Form.Control
								required
								style={styles.input}
								placeholder='you@somewhere.com'
								type='email'
								onChange={e => setEmail(e.target.value)}
								value={email}
							/>
						</div>

						<div style={styles.sectionWrapper}>
							<div></div>
							<Form.Label style={styles.label}>Phone #: </Form.Label>
							<Form.Control
								required
								style={styles.input}
								placeholder='555-123-4567'
								type='tel'
								onChange={e => setPhone(e.target.value)}
								value={phone}
							/>
						</div>
					</Form>
				) : (
					<div style={styles.form}>
						<h2 style={styles.reviewLabel}>Name:</h2>
						<p style={styles.text}>{name}</p>
						<h2 style={styles.reviewLabel}>Email:</h2>
						<p style={styles.text}>{email}</p>
						<h2 style={styles.reviewLabel}>Phone #:</h2>
						<p style={styles.text}>{phone}</p>
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
		width: '35%',
		borderRadius: '10px',
		boxShadow: '1px 1px 5px #777, -1px -1px 5px #777',
		marginBottom: 50,
	},
	header: {
		marginBottom: 10,
		marginTop: 25,
		fontSize: 30,
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

export default GeneralForm;
