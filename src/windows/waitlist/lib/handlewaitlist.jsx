import axios from 'axios';
import { useState } from 'react';

function Handlewaitlist() {
	const [email, setEmail] = useState('');
	const [success, setSuccess] = useState(false);

	const handleEmail = (e) => {
		setEmail(e.target.value);
	};

	const sendEmail = async () => {
		try {
			if (email !== '') {
				const result = await axios.post(
					'http://192.168.1.169:4500/api/waitlist',
					{
						email: email,
					}
				);
				if (result.status === 201) {
					setSuccess(true);
					resetEmail();
				} else {
					setSuccess(false);
				}
			}
		} catch (error) {
			console.log(error);
		}
	};

	const resetEmail = () => {
		setEmail('');
	};
	return [email, handleEmail, sendEmail, success, setSuccess, resetEmail]; // Return as an array
}

export default Handlewaitlist;
