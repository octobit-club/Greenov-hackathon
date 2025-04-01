// firebaseAdmin.js
import * as admin from 'firebase-admin';

// Check if Firebase is already initialized
if (!admin.apps.length) {
  // Initialize with service account
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.VITE_FIREBASE_PROJECT_ID,
      clientEmail: process.env.VITE_FIREBASE_CLIENT_EMAIL,
      // Replace newlines in the private key
      privateKey: process.env.VITE_FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    }),
    databaseURL: process.env.VITE_FIREBASE_DATABASE_URL,
  });
}

export const db = admin.firestore();