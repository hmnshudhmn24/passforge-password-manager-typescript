
export async function encryptData(data: any): Promise<string> {
  const text = JSON.stringify(data);
  const key = await getKey();
  const enc = new TextEncoder().encode(text);
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const encrypted = await crypto.subtle.encrypt(
    { name: 'AES-GCM', iv },
    key,
    enc
  );
  return `${Buffer.from(iv).toString('base64')}::${Buffer.from(encrypted).toString('base64')}`;
}

export async function decryptData(data: string): Promise<any> {
  const [ivStr, encStr] = data.split('::');
  const iv = Uint8Array.from(atob(ivStr), c => c.charCodeAt(0));
  const enc = Uint8Array.from(atob(encStr), c => c.charCodeAt(0));
  const key = await getKey();
  const dec = await crypto.subtle.decrypt(
    { name: 'AES-GCM', iv },
    key,
    enc
  );
  return JSON.parse(new TextDecoder().decode(dec));
}

async function getKey(): Promise<CryptoKey> {
  return crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode('my-very-secret-key'),
    { name: 'AES-GCM' },
    false,
    ['encrypt', 'decrypt']
  );
}
