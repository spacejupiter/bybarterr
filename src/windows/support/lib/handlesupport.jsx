import React, { useState } from 'react';
import axios from 'axios';

function Handlesupport() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [success, setSuccess] = useState(false);

	const handleNameChange = (e) => {
		setName(e.target.value);
	};

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const handleMessageChange = (e) => {
		setMessage(e.target.value);
	};

	const handleSubmit = async () => {
		if (email.trim() === '') {
			setSuccess(false);
			// Handle the empty email error here
			console.error('Email is required');
			return;
		}

		try {
			const result = await axios.post('http://192.168.0.180:4500/api/support', {
				name: name,
				email: email,
				message: message,
			});

			if (result.status === 201) {
				setSuccess(true);
				console.log(success);
			} else {
				setSuccess(false);
			}
		} catch (error) {
			// Handle the API request error here
			console.error('API request error:', error);
		}
	};

	return [
		name,
		email,
		message,
		handleNameChange,
		handleEmailChange,
		handleMessageChange,
		handleSubmit,
		setSuccess,
		success,
	];
}

export default Handlesupport;
