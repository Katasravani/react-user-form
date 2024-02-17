import { useState } from 'react';
// import './App.css';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailValidated, setEmailValidated] = useState(false);
  const [passwordValidated, setPasswordValidated] = useState(false);
  const [confirmPasswordValidated, setConfirmPasswordValidated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailValidated && passwordValidated && confirmPasswordValidated) {
      alert('Form submitted successfully');
    } else {
      alert('Can’t submit the form');
    }
  };

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailValidated(emailRegex.test(value));
  };

  const validatePassword = (value) => {
    setPasswordValidated(value.length >= 8);
  };

  const validateConfirmPassword = (value) => {
    setConfirmPasswordValidated(value === password);
  };

  return (
    <form onSubmit={handleSubmit} id='form'>
      <div>
        <label id='email'>Email:</label>
        <br></br>
        <input id='email-input'
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            validateEmail(e.target.value);
          }}
          style={{ borderColor: emailValidated ? 'green' : 'red'}}
        />
        {!emailValidated && <p className='para' style={{ color: 'red' }}>Please enter a valid email address.</p>}
      </div>
      <div>
        <label id='password'>Password:</label>
        <br></br>
        <input id='password-input'
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            validatePassword(e.target.value);
          }}
          style={{ borderColor: passwordValidated ? 'green' : 'red' }}
        />
        {!passwordValidated && <p className='para' style={{ color: 'red' }}>Password must be at least 8 characters long.</p>}
      </div>
      <div>
        <label id='confirm'>Confirm Password:</label>
        <br></br>
        <input id='confirm-input'
          type="password"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            validateConfirmPassword(e.target.value);
          }}
          style={{ borderColor: confirmPasswordValidated ? 'green' : 'red' }}
        />
        {!confirmPasswordValidated && <p className='para' style={{ color: 'red' }}>Passwords do not match.</p>}
      </div>
      <button type="submit" id='submit-btn'>Sign up</button>
    </form>
  );
}

export default App;