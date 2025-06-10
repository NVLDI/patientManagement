import { useState } from 'react';
import { signUp, confirmSignUp, resendSignUpCode } from 'aws-amplify/auth';

export default function SuperRegister() {
  const [step, setStep] = useState<'register' | 'confirm'>('register');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [code, setCode] = useState('');

  const handleRegister = async () => {
    try {
      await signUp({
        username: email,
        password,
        options: {
          userAttributes: {
            email,
          },
        },
      });
      setStep('confirm');
      alert('Registration successful! Please check your email for the verification code.');
    } catch (err: any) {
      console.error(err);
      alert(err.message || 'Sign-up failed');
    }
  };

  const handleConfirm = async () => {
    try {
      await confirmSignUp({ username: email, confirmationCode: code });
      alert('Email verified successfully! Please log in.');
      window.location.href = '/SuperLogin'; // adjust as per your routing
    } catch (err: any) {
      console.error(err);
      alert(err.message || 'Confirmation failed');
    }
  };

  const resendCode = async () => {
    try {
      await resendSignUpCode({ username: email });
      alert('Verification code resent!');
    } catch (err: any) {
      console.error(err);
      alert(err.message || 'Failed to resend code');
    }
  };

  return (
    <div>
      <h1>Super Admin Registration</h1>

      {step === 'register' && (
        <>
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            value={password}
            type="password"
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button onClick={handleRegister}>Register</button>
        </>
      )}

      {step === 'confirm' && (
        <>
          <input
            value={code}
            onChange={e => setCode(e.target.value)}
            placeholder="Verification Code"
          />
          <button onClick={handleConfirm}>Verify Email</button>
          <button onClick={resendCode}>Resend Code</button>
        </>
      )}
    </div>
  );
}
