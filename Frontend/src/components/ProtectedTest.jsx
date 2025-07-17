import { useState } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080';
axios.defaults.withCredentials = true; // Needed for secure cookie refresh

export default function ProtectedTest() {
  const [protectedData, setProtectedData] = useState('');
  const [error, setError] = useState('');

  const callProtected = async () => {
    setError('');
    try {
      const token = JSON.parse(localStorage.getItem('accessToken'));
      if (!token) {
        setError('No access token. Please login first.');
        return;
      }

      const res = await axios.get('/protected', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setProtectedData(res.data.message || JSON.stringify(res.data));
    } catch (err) {
      if (err.response?.status === 401 || err.response?.status === 403) {
        console.log('Access token expired. Trying refresh...');
        try {
          const refreshRes = await axios.get('/tokens/refresh');
          const newAccessToken = refreshRes.data.accessToken;
          localStorage.setItem('accessToken', JSON.stringify(newAccessToken));

          console.log('Refreshed. Retrying protected request...');
          // Retry original:
          const retry = await axios.get('/protected', {
            headers: {
              Authorization: `Bearer ${newAccessToken}`
            }
          });
          setProtectedData(retry.data.message || JSON.stringify(retry.data));
        } catch (refreshErr) {
          setError('Refresh failed: ' + (refreshErr.response?.data?.error || refreshErr.message));
        }
      } else {
        setError(err.response?.data?.error || err.message);
      }
    }
  };

  return (
    <div>
      <h2>Protected API Test</h2>
      <button onClick={callProtected}>Call Protected</button>
      {protectedData && <pre>{protectedData}</pre>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
