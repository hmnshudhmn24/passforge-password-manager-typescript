
import React, { useEffect, useState } from 'react';
import { PasswordList } from './components/PasswordList';
import { AddPassword } from './components/AddPassword';
import { loadPasswords } from './lib/storage';
import { unlockWithBiometrics } from './lib/webauthn';

function App() {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    unlockWithBiometrics().then(setUnlocked);
  }, []);

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🔐 PassForge</h1>
      {!unlocked ? (
        <p>Please authenticate using biometrics...</p>
      ) : (
        <>
          <AddPassword />
          <PasswordList />
        </>
      )}
    </div>
  );
}

export default App;
