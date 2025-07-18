import { useState } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080';
axios.defaults.withCredentials = true; // Needed for secure cookie refresh

export default function ProtectedTest() {
  const [protectedData, setProtectedData] = useState('');
  const [error, setError] = useState('');

  const callProtected = async () => {
    setError('');
    const token = JSON.parse(localStorage.getItem('token'));
    console.log('[DEBUG] Current access token from localStorage:', token);

    if (!token) {
      console.log('[DEBUG] No access token found.');
      setError('No access token. Please login first.');
      return;
    }

    try {
      console.log('[DEBUG] Sending protected request with token...');
      const res = await axios.get('/profile/person', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      console.log('[DEBUG] Protected request successful. Response:', res.data);
      setProtectedData(res.data.message || JSON.stringify(res.data));
    } catch (err) {
      console.log('[DEBUG] Protected request failed. Error:', err.response?.status, err.response?.data || err.message);

      if (err.response?.status === 401 || err.response?.status === 403) {
        console.log('[DEBUG] Access token expired. Trying refresh flow...');
        try {
          const refreshRes = await axios.get('/tokens/refresh');
          console.log('[DEBUG] Refresh response:', refreshRes.data);

          const newAccessToken = refreshRes.data.accessToken;
          localStorage.setItem('token', JSON.stringify(newAccessToken));
          console.log('[DEBUG] Stored new access token in localStorage:', newAccessToken);

          console.log('[DEBUG] Retrying protected request with new token...');
          const retry = await axios.get('/profile/person', {
            headers: {
              Authorization: `Bearer ${newAccessToken}`
            }
          });

          console.log('[DEBUG] Retry successful. Response:', retry.data);
          setProtectedData(retry.data.message || JSON.stringify(retry.data));
        } catch (refreshErr) {
          console.log('[DEBUG] Refresh attempt failed:', refreshErr.response?.data || refreshErr.message);
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
