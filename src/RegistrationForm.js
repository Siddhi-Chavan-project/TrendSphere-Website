import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegistrationForm.css'; // You can import your own CSS for styling
import { registerUser } from './api'; // Import your API methods
import { Link } from 'react-router-dom';

function RegistrationForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleRegistration = async (e) => {
        e.preventDefault();

        // Basic form validation
        if (!name || !email || !password || !confirmPassword) {
            setError('All fields are required.');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        try {
            // Perform registration logic here
            console.log('Registration submitted:', name, email);

            // Assuming registration is successful, call your API method
            await registerUser(name, email, password);

            // Navigate to a success or confirmation page
            navigate('/RegistrationSuccess');
        } catch (error) {
            console.error('Error registering user', error);
            setError('An error occurred during registration.');
        }
    };

    const isFormIncomplete = !name || !email || !password || !confirmPassword;

    return (
        <div className='register'>
            <div className="registration-form">
                <h2>Create Your Amazon Account</h2>
                {error && <p className="error-message">{error}</p>}
                <form>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    </div>
                    <button disabled={isFormIncomplete} onClick={handleRegistration}>
                        <Link to="/Home">
                            Create Account
                        </Link>
                    </button>
                </form>
                <p>
                    Already have an account? <Link to="/signin">Sign In</Link>
                </p>
            </div></div>
    );
}

export default RegistrationForm;