
import React, { useEffect, useState } from 'react';
import { loadPasswords } from '../lib/storage';

export function PasswordList() {
  const [list, setList] = useState<any[]>([]);

  useEffect(() => {
    loadPasswords().then(setList);
  }, []);

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Stored Passwords</h2>
      {list.map((item, idx) => (
        <div key={idx} className="border p-2 mb-2 rounded">
          <strong>{item.site}</strong>: <code>{item.password}</code>
        </div>
      ))}
    </div>
  );
}
