
import React, { useState } from 'react';
import { savePassword } from '../lib/storage';
import { generateStrongPassword, checkPasswordHealth } from '../lib/passwordAI';

export function AddPassword() {
  const [site, setSite] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleAdd = async () => {
    if (!site || !password) return;
    await savePassword({ site, password });
    setMessage('✅ Saved!');
    setSite('');
    setPassword('');
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Site"
        value={site}
        onChange={(e) => setSite(e.target.value)}
        className="border p-2 mr-2"
      />
      <input
        type="text"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 mr-2"
      />
      <button onClick={handleAdd} className="bg-blue-600 text-white px-4 py-2 rounded">
        Add
      </button>
      <button
        onClick={() => setPassword(generateStrongPassword())}
        className="ml-2 text-sm underline"
      >
        Generate Strong Password
      </button>
      <div className="text-sm mt-2">
        Strength: {password && checkPasswordHealth(password)}
      </div>
      {message && <div className="text-green-600 mt-2">{message}</div>}
    </div>
  );
}
