
import { encryptData, decryptData } from './crypto';

const DB_KEY = 'passforge-passwords';

export async function savePassword(entry: any) {
  const current = await loadPasswords();
  const updated = [...current, entry];
  const encrypted = await encryptData(updated);
  localStorage.setItem(DB_KEY, encrypted);
}

export async function loadPasswords(): Promise<any[]> {
  const encrypted = localStorage.getItem(DB_KEY);
  if (!encrypted) return [];
  return await decryptData(encrypted);
}
