# 🔐 PassForge: AI-Powered Password Manager

A secure, offline-first password manager built with React + TypeScript. It features AES-GCM encryption, biometric login via WebAuthn, and AI-powered strong password suggestions & strength checking.

## 🚀 Features

- ✅ End-to-end encryption with AES-GCM (Web Crypto API)
- 🔒 Offline storage using IndexedDB (via `localStorage` fallback)
- 👆 Biometric unlock (WebAuthn)
- 🤖 AI-generated strong passwords
- 📊 Password health analysis (strength checker)
- 🧠 Fully built with TypeScript

## 🧪 Tech Stack

- TypeScript + React
- Tailwind CSS
- Web Crypto API
- WebAuthn (Biometric auth)
- IndexedDB (`localStorage` for demo simplicity)
- AI logic (rule-based for strength + randomness)

## 🛠️ Setup Instructions

```bash
git clone https://github.com/yourusername/passforge-password-manager.git
cd passforge-password-manager
npm install
npm run dev
```

Open: [http://localhost:5173](http://localhost:5173)

## 📁 Folder Structure

```
src/
├── App.tsx
├── index.tsx
├── index.css
├── lib/
│   ├── crypto.ts        # AES encrypt/decrypt
│   ├── storage.ts       # Save/load to localStorage
│   ├── passwordAI.ts    # AI password generator and checker
│   └── webauthn.ts      # Biometric login
├── components/
│   ├── AddPassword.tsx
│   └── PasswordList.tsx
```

## 🔐 Security Notes

- AES-GCM encryption uses a hardcoded key for demo — use dynamic keys + secure key storage (e.g., WebAuthn secret derivation or a secure vault) in production.
- WebAuthn is implemented using browser-native prompts (`navigator.credentials.get`). Consider using a backend registration/auth flow for real use cases.
- All data is stored locally — no cloud syncing in this version.

## 🤖 Future Improvements

- 🔄 Cloud sync with encrypted vaults
- 🗝️ Master password + KDF key derivation
- 🔔 Breach alert integration (like HaveIBeenPwned API)
- 📱 PWA support with offline access
- 🔗 FIDO2 public key registration backend
