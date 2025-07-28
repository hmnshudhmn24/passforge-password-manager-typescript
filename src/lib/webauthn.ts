
export async function unlockWithBiometrics(): Promise<boolean> {
  try {
    const publicKey = {
      challenge: new Uint8Array(32),
      timeout: 60000,
      userVerification: 'preferred',
    };
    await navigator.credentials.get({ publicKey });
    return true;
  } catch {
    return false;
  }
}
