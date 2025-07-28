
export function generateStrongPassword(): string {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+';
  return Array.from({ length: 16 }, () => charset[Math.floor(Math.random() * charset.length)]).join('');
}

export function checkPasswordHealth(pw: string): string {
  if (pw.length < 10) return 'Weak';
  if (!/[!@#$%^&*]/.test(pw)) return 'Moderate';
  return 'Strong';
}
