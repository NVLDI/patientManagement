import { useState } from 'react';
import { signIn, confirmSignIn, getCurrentUser } from 'aws-amplify/auth';

export default function SuperLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mfaCode, setMfaCode] = useState('');
  const [step, setStep] = useState<'login' | 'mfa'>('login');

  const login = async () => {
    try {
      const user = await signIn({ username: email, password });

      // Use type assertion because Amplify v6 doesn't expose challengeName in type
      const challenge = (user as any)?.challengeName;

      if (challenge === 'SMS_MFA' || challenge === 'SOFTWARE_TOKEN_MFA') {
        setStep('mfa');
      } else {
        console.log('Login success:', user);
        window.location.href = '/SuperDashboard'; // Redirect to your dashboard
      }
    } catch (err: any) {
      console.error('Login error:', err);
      alert(err.message || 'Login failed');
    }
  };

  const verifyMfa = async () => {
    try {
      await confirmSignIn({
        challengeResponse: mfaCode
      });
      const user = await getCurrentUser();
      console.log('MFA success:', user);
      window.location.href = '/super-dashboard';
    } catch (err: any) {
      console.error('MFA error:', err);
      alert(err.message || 'MFA failed');
    }
  };

  return (
    <div>
      <h1>Super Admin Login</h1>
      {step === 'login' && (
        <>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button onClick={login}>Login</button>
        </>
      )}
      {step === 'mfa' && (
        <>
          <input
            value={mfaCode}
            onChange={e => setMfaCode(e.target.value)}
            placeholder="Enter MFA Code"
          />
          <button onClick={verifyMfa}>Verify</button>
        </>
      )}
    </div>
  );
}
