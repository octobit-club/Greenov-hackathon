// pages/api/register.js
import { db } from '../src/utils/firebaseAdmin'; // You'll need to create a firebaseAdmin.js file

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { fullName, email, phone, matricul, teamName, teamMembers } = req.body;

    // Validate data server-side as well
    if (!fullName || !email || !phone || !matricul || !teamName || !teamMembers || teamMembers.length === 0) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Validate matricul format
    const matriculRegex = /^\d+$/;
    if (!matriculRegex.test(matricul) || matricul.length < 8 || matricul.length > 13) {
      return res.status(400).json({ error: 'Invalid matricul format' });
    }

    // Check for duplicate email
    const emailSnapshot = await db.collection('registrations')
      .where('email', '==', email)
      .limit(1)
      .get();

    if (!emailSnapshot.empty) {
      return res.status(409).json({ error: 'Email already registered', field: 'email' });
    }

    // Check for duplicate team name
    const teamSnapshot = await db.collection('registrations')
      .where('teamName', '==', teamName)
      .limit(1)
      .get();

    if (!teamSnapshot.empty) {
      return res.status(409).json({ error: 'Team name already taken', field: 'teamName' });
    }

    // Check for duplicate matricul
    const matriculSnapshot = await db.collection('registrations')
      .where('matricul', '==', matricul)
      .limit(1)
      .get();

    if (!matriculSnapshot.empty) {
      return res.status(409).json({ error: 'Matricul already registered', field: 'matricul' });
    }

    // All checks passed, add to database
    const registrationData = {
      fullName,
      email,
      phone,
      matricul,
      teamName,
      teamMembers: teamMembers.filter(member => member.trim() !== ''),
      registeredAt: new Date()
    };

    const docRef = await db.collection('registrations').add(registrationData);
    
    return res.status(200).json({ 
      success: true, 
      message: 'Registration successful', 
      id: docRef.id 
    });
  } catch (error) {
    console.error('Registration error:', error);
    return res.status(500).json({ error: 'Server error during registration' });
  }
}