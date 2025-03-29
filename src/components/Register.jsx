<<<<<<< HEAD
import React, { useState } from 'react';
import { Plus, X, AlertCircle, User, Mail, Phone, MapPin } from 'lucide-react';
import "../assets/styles/Register.css";

const AIRTABLE_URL = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_AIRTABLE_TABLE_NAME}`;
const AIRTABLE_TOKEN = import.meta.env.VITE_AIRTABLE_TOKEN;
=======
import React, { useState, useEffect } from 'react';
import { Plus, X, AlertCircle, User, Mail, Phone, Loader, Eye, EyeOff } from 'lucide-react';
import "../assets/styles/Register.css";

// Define variables for Firebase
let db;
let collection;
let addDoc;
let query;
let where;
let getDocs;
let firebaseInitialized = false;

// Mock Firebase implementation for development without requiring actual Firebase
const mockDb = {
  collections: {
    registrations: []
  },
  collection: (name) => ({
    id: name,
    add: async (data) => {
      mockDb.collections[name].push({
        ...data,
        id: `mock-id-${Date.now()}`
      });
      return { id: `mock-id-${Date.now()}` };
    }
  }),
  query: () => ({
    get: async () => ({
      empty: true,
      docs: []
    })
  })
};

// Initialize Firebase or fallback to mock
const initializeFirebase = async () => {
  try {
    // Try to import Firebase
    const firebaseModule = await import('../firebaseConfig');
    const firestoreModule = await import('firebase/firestore');
    
    db = firebaseModule.db;
    collection = firestoreModule.collection;
    addDoc = firestoreModule.addDoc;
    query = firestoreModule.query;
    where = firestoreModule.where;
    getDocs = firestoreModule.getDocs;
    
    firebaseInitialized = true;
    console.log("Firebase initialized successfully");
    return true;
  } catch (error) {
    console.error("Firebase initialization failed:", error);
    // Use mock implementation for development
    db = mockDb;
    collection = mockDb.collection;
    addDoc = async (collectionRef, data) => {
      return { id: `mock-id-${Date.now()}` };
    };
    query = () => mockDb.query();
    where = () => {};
    getDocs = async () => ({
      empty: true,
      docs: []
    });
    return false;
  }
};
>>>>>>> origin/med

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    teamName: '',
<<<<<<< HEAD
    teamMembers: ['']
=======
    teamMembers: [''],
    agreeToTerms: false
>>>>>>> origin/med
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [firebaseStatus, setFirebaseStatus] = useState({
    initialized: false,
    error: null
  });
  const [showAddress, setShowAddress] = useState(false);

  // Initialize Firebase on component mount
  useEffect(() => {
    const initialize = async () => {
      const success = await initializeFirebase();
      setFirebaseStatus({
        initialized: success,
        error: success ? null : "Firebase could not be initialized. Using mock implementation for development."
      });
    };
    
    initialize();
  }, []);

  const handleCheckboxChange = (e) => {
    setFormData(prevData => ({
      ...prevData,
      agreeToTerms: e.target.checked
    }));
    
    // Clear error if it exists
    if (errors.agreeToTerms) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors.agreeToTerms;
        return newErrors;
      });
    }
  };

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name.startsWith('teamMember')) {
      const index = parseInt(name.replace('teamMember', ''));
      setFormData(prev => ({
        ...prev,
        teamMembers: prev.teamMembers.map((member, i) => 
          i === index ? value : member
        )
      }));
    } else {
      setFormData(prevData => ({
        ...prevData,
        [name]: value
      }));
    }
<<<<<<< HEAD
  };

=======
    
    // Clear error for this field if it exists
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
>>>>>>> origin/med
  const addTeamMember = () => {
    if (formData.teamMembers.length < 5) {
      setFormData(prev => ({
        ...prev,
        teamMembers: [...prev.teamMembers, '']
      }));
    }
  };

  const removeTeamMember = (index) => {
    setFormData(prev => ({
      ...prev,
      teamMembers: prev.teamMembers.filter((_, i) => i !== index)
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    // Full Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    // Phone validation
    const phoneRegex = /^\+?[0-9]{10,15}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone.replace(/\s+/g, ''))) {
      newErrors.phone = "Invalid phone number";
    }

<<<<<<< HEAD
    // Address validation
    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
=======
    // Address validation (changed to number validation)
    if (!formData.address.trim()) {
      newErrors.address = "Number is required";
    } else {
      const addressDigits = formData.address.replace(/\D/g, '');
      if (addressDigits.length < 8 && addressDigits.length > 13) {
        newErrors.address = "unvalid .Matricul.";
      }
>>>>>>> origin/med
    }

    // Team name validation
    if (!formData.teamName.trim()) {
      newErrors.teamName = "Team name is required";
    }

    // Team members validation
    const validMembers = formData.teamMembers.filter(member => member.trim() !== '');
    if (validMembers.length === 0) {
      newErrors.teamMembers = "At least one team member is required";
    }
<<<<<<< HEAD

=======
    
    // The check Box
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "You must agree to the terms and conditions";
    }
    
>>>>>>> origin/med
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
<<<<<<< HEAD
    
    if (validateForm()) {
      setIsSubmitting(true);

      // Exactly matching your Airtable column names
      const record = {
        records: [
          {
            fields: {
              "Full Name": formData.fullName,
              "address": formData.address,
              "email": formData.email,
              "phone": formData.phone,
              "teamMembers": formData.teamMembers.filter(member => member.trim() !== '').join(", "),
              "teamName": formData.teamName
            }
          }
        ]
      };

      try {
        console.log("Sending record:", JSON.stringify(record, null, 2));

        const response = await fetch(AIRTABLE_URL, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${AIRTABLE_TOKEN}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(record)
        });

        const responseData = await response.json();

        if (!response.ok) {
          console.error("Airtable Error:", responseData);
          throw new Error(responseData.error?.message || "Failed to register");
        }

        alert("Registration successful! Your team has been registered for Greenov 2025.");
        
        // Reset form after successful submission
=======
    console.log("Form validation starting...");
    if (validateForm()) {
      console.log("Form validation passed. Submitting...");
      try {
        setIsSubmitting(true);
        setSubmitStatus(null);
        console.log("Firebase status on submit:", firebaseStatus);

        // Skip duplicate checks in mock mode
        if (firebaseStatus.initialized) {
          console.log("Checking for duplicates...");
          try {
            // Check for duplicate email
            console.log(`Checking email: ${formData.email}`);
            const emailQuery = query(
              collection(db, 'registrations'), 
              where('email', '==', formData.email)
            );
            const emailSnapshot = await getDocs(emailQuery);
            console.log(`Email check found ${emailSnapshot.size} records.`);
            if (!emailSnapshot.empty) {
              console.log("Duplicate email found.");
              setErrors(prev => ({
                ...prev,
                email: "This email is already registered. Please use a different email."
              }));
              throw new Error("Duplicate registration detected");
            }

            // Check for duplicate team name
            console.log(`Checking team name: ${formData.teamName}`);
            const teamQuery = query(
              collection(db, 'registrations'), 
              where('teamName', '==', formData.teamName)
            );
            const teamSnapshot = await getDocs(teamQuery);
            console.log(`Team name check found ${teamSnapshot.size} records.`);
            if (!teamSnapshot.empty) {
              console.log("Duplicate team name found.");
              setErrors(prev => ({
                ...prev,
                teamName: "This team name is already taken. Please choose a different name."
              }));
              throw new Error("Duplicate team name");
            }
            console.log("Duplicate checks passed.");
          } catch (error) {
            // If error is not a duplicate error, it's a Firebase error
            if (error.message !== "Duplicate registration detected" && 
                error.message !== "Duplicate team name") {
              console.error("Firebase query error:", error.code, error.message);
              throw new Error(`Database query error: ${error.message} (Code: ${error.code || 'N/A'})`);
            } else {
              throw error; // Re-throw duplicate errors
            }
          }
        }

        // Prepare data for Firebase
        const registrationData = {
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          teamName: formData.teamName,
          teamMembers: formData.teamMembers.filter(member => member.trim() !== ''),
          registeredAt: new Date(),
          agreeToTerms: true
        };
        console.log("Prepared data for Firestore:", registrationData);
        
        // Add to Firestore
        try {
          if (firebaseStatus.initialized) {
            console.log("Attempting to add document to Firestore...");
            const docRef = await addDoc(collection(db, 'registrations'), registrationData);
            console.log("Form submitted to Firebase successfully! Document ID:", docRef.id);
          } else {
            // Using mock implementation
            console.log("Using mock database for submission.");
            await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
            console.log("Form submitted to mock database:", registrationData);
          }
        } catch (error) {
          console.error("Firestore write error:", error.code, error.message, error);
          throw new Error(`Failed to save registration: ${error.message} (Code: ${error.code || 'N/A'})`);
        }
        
        // Success handling
        setSubmitStatus('success');
        
        // Reset form
>>>>>>> origin/med
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          address: '',
          teamName: '',
<<<<<<< HEAD
          teamMembers: ['']
        });
      } catch (error) {
        console.error("Submission Error:", error);
        alert(`Error registering: ${error.message}. Please try again.`);
      } finally {
        setIsSubmitting(false);
      }
    }
  };


  return (
    <section id="register" className="register-section" data-scroll-section="register">
      <div className="register-container">
        <div className="header-section">
          <h2>Join Greenov 2025</h2>
          <p className="subtitle">Build sustainable solutions together</p>
        </div>
        
        <form onSubmit={handleSubmit} className="register-form">
          <div className="form-sections">
            <div className="information-box">
              <h3>Personal Information</h3>
              
              <div className="form-group">
                <div className="input-icon-wrapper">
                  <User size={18} className="input-icon" />
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full Name"
                  />
                </div>
                {errors.fullName && (
                  <p className="error">
                    <AlertCircle size={14} style={{ marginRight: '6px' }} />
                    {errors.fullName}
                  </p>
                )}
              </div>

              <div className="form-group">
                <div className="input-icon-wrapper">
                  <Mail size={18} className="input-icon" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                  />
                </div>
                {errors.email && (
                  <p className="error">
                    <AlertCircle size={14} style={{ marginRight: '6px' }} />
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="form-group">
                <div className="input-icon-wrapper">
                  <Phone size={18} className="input-icon" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                  />
                </div>
                {errors.phone && (
                  <p className="error">
                    <AlertCircle size={14} style={{ marginRight: '6px' }} />
                    {errors.phone}
                  </p>
                )}
              </div>

              <div className="form-group">
                <div className="input-icon-wrapper">
                  <MapPin size={18} className="input-icon" />
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Address"
                  />
                </div>
                {errors.address && (
                  <p className="error">
                    <AlertCircle size={14} style={{ marginRight: '6px' }} />
                    {errors.address}
                  </p>
                )}
              </div>
            </div>

            <div className="team-box">
              <h3>Team Details</h3>
              <div className="form-group">
                <div className="input-icon-wrapper">
                  <User size={18} className="input-icon" />
                  <input
                    type="text"
                    name="teamName"
                    value={formData.teamName}
                    onChange={handleChange}
                    placeholder="Team Name"
                  />
                </div>
                {errors.teamName && (
                  <p className="error">
                    <AlertCircle size={14} style={{ marginRight: '6px' }} />
                    {errors.teamName}
                  </p>
                )}
              </div>

              <div className="team-members-section">
                <h4>Team Members</h4>
                {formData.teamMembers.map((member, index) => (
                  <div key={index} className="team-member-input">
                    <div className="team-member-field">
                      <User size={18} className="member-icon" />
                      <input
                        type="text"
                        name={`teamMember${index}`}
                        value={member}
                        onChange={handleChange}
                        placeholder={`Team Member ${index + 1} Name`}
                      />
                    </div>
                    {index > 0 && (
                      <button 
                        type="button" 
                        onClick={() => removeTeamMember(index)}
                        className="remove-member-btn"
                      >
                        <X size={16} />
                        Remove
                      </button>
                    )}
                  </div>
                ))}
                {formData.teamMembers.length < 5 && (
                  <button 
                    type="button" 
                    onClick={addTeamMember}
                    className="add-member-btn"
                  >
                    <Plus size={16} />
                    Add Team Member
                  </button>
                )}
                {errors.teamMembers && (
                  <p className="error">
                    <AlertCircle size={14} style={{ marginRight: '6px' }} />
                    {errors.teamMembers}
                  </p>
                )}
              </div>
            </div>
          </div>

          <button 
            type="submit" 
            className="submit-btn" 
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Registering...' : 'Register Now'}
          </button>
        </form>
=======
          teamMembers: [''],
          agreeToTerms: false
        });
        
      } catch (error) {
        console.error("Error submitting registration:", error);
        // Only set general submit error if it's not a duplicate registration
        if (error.message !== "Duplicate registration detected" && 
            error.message !== "Duplicate team name") {
          setSubmitStatus('error');
          // Set specific error message
          setErrors(prev => ({
            ...prev,
            submission: error.message
          }));
        }
      } finally {
        setIsSubmitting(false);
      }
    } else {
      console.log("Form validation failed. Errors:", errors);
    }
  };

  const clearBrowserData = async () => {
    // Clear console logs
    if (window.console) {
      console.clear();
    }
    
    // Clear localStorage data related to your app
    localStorage.removeItem('formData');
    localStorage.removeItem('userSession');
    sessionStorage.clear();
    
    // Clear caches in a more controlled way
    if (window.caches && window.caches.keys) {
      try {
        const cacheKeys = await caches.keys();
        const appCaches = cacheKeys.filter(key => 
          key.includes('greenov') || key.includes('hackathon')
        );
        
        for (const key of appCaches) {
          await caches.delete(key);
        }
      } catch (error) {
        console.error("Error clearing caches:", error);
      }
    }
    
    // Reset form state
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      address: '',
      teamName: '',
      teamMembers: [''],
      agreeToTerms: false
    });
  };

  useEffect(() => {
    console.log("useEffect triggered. submitStatus:", submitStatus);
    if (submitStatus === 'success') {
      console.log("Success status detected. Starting clearBrowserData...");
      clearBrowserData().then(() => {
        console.log("clearBrowserData finished. Setting 5-second timer for scroll...");
        const timer = setTimeout(() => {
          console.log("Timer finished. Attempting to scroll to Hero section...");
          
          // Try multiple possible hero section selectors
          const heroSection = 
            document.querySelector('.hero') || 
            document.querySelector('#hero') || 
            document.querySelector('[data-scroll-section="hero"]') ||
            document.querySelector('section.hero-section');
          
          console.log("Hero section found:", heroSection);
          
          if (heroSection) {
            console.log("Starting smooth scroll animation...");
            // Scroll to the hero section smoothly
            heroSection.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
            
            console.log("Scroll initiated using scrollIntoView");
          } else {
            // Fallback: try scrolling to top of page if hero section not found
            console.log("Hero section not found. Scrolling to top of page as fallback.");
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          }
        }, 5000); // Wait 5 seconds before scrolling
        return () => clearTimeout(timer);
      }).catch(error => {
        console.error("Error during clearBrowserData:", error);
      });
    }
  }, [submitStatus]);

  return (
    <section id="register" className="register-section" data-scroll-section="register">
      <div className="register-container">
        <div className="header-section">
          <h2>Join Greenov 2025</h2>
          <p className="subtitle">Build sustainable solutions together</p>
          
          {!firebaseStatus.initialized && (
            <div className="firebase-warning">
              <AlertCircle size={16} />
              <p>Development mode: Registration data will not be permanently saved.</p>
            </div>
          )}
        </div>
        
        {submitStatus === 'success' ? (
          <div className="success-message">
            <h3>Registration Successful!</h3>
            <p>Your team has been registered for Greenov 2025. We'll contact you soon with more details.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="register-form">
            <div className="form-sections">
              <div className="information-box">
                <h3>Personal Information</h3>
                
                <div className="form-group">
                  <div className="input-icon-wrapper">
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Full Name"
                    />
                    <User size={18} className="input-icon input-icon-right" />
                  </div>
                  {errors.fullName && (
                    <p className="error">
                      <AlertCircle size={14} style={{ marginRight: '6px' }} />
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div className="form-group">
                  <div className="input-icon-wrapper">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                    />
                    <Mail size={18} className="input-icon input-icon-right" />
                  </div>
                  {errors.email && (
                    <p className="error">
                      <AlertCircle size={14} style={{ marginRight: '6px' }} />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="form-group">
                  <div className="input-icon-wrapper">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                    />
                    <Phone size={18} className="input-icon input-icon-right" />
                  </div>
                  {errors.phone && (
                    <p className="error">
                      <AlertCircle size={14} style={{ marginRight: '6px' }} />
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div className="form-group">
                  <div className="input-icon-wrapper">
                    <input
                      type={showAddress ? "text" : "password"}
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Matricul"
                    />
                    
                    <button 
                      type="button"
                      onClick={() => setShowAddress(!showAddress)} 
                      className="password-toggle"
                      aria-label={showAddress ? "Hide matricul" : "Show matricul"}
                    >
                      {showAddress ? <Eye size={18} /> : <EyeOff size={18} />}
                    </button>
                  </div>
                  {errors.address && (
                    <p className="error">
                      <AlertCircle size={14} style={{ marginRight: '6px' }} />
                      {errors.address}
                    </p>
                  )}
                </div>
              </div>

              <div className="team-box">
                <h3>Team Details</h3>
                <div className="form-group">
                  <div className="input-icon-wrapper">
                    <input
                      type="text"
                      name="teamName"
                      value={formData.teamName}
                      onChange={handleChange}
                      placeholder="Team Name"
                    />
                    <User size={18} className="input-icon input-icon-right" />
                  </div>
                  {errors.teamName && (
                    <p className="error">
                      <AlertCircle size={14} style={{ marginRight: '6px' }} />
                      {errors.teamName}
                    </p>
                  )}
                </div>

                <div className="team-members-section">
                  <h4>Team Members</h4>
                  {formData.teamMembers.map((member, index) => (
                    <div key={index} className="team-member-input">
                      <div className="team-member-field">
                        <input
                          type="text"
                          name={`teamMember${index}`}
                          value={member}
                          onChange={handleChange}
                          placeholder={`Team Member ${index + 1} Name`}
                        />
                        <User size={18} className="member-icon member-icon-right" />
                      </div>
                      {index > 0 && (
                        <button 
                          type="button" 
                          onClick={() => removeTeamMember(index)}
                          className="remove-member-btn"
                        >
                          <X size={16} />
                          Remove
                        </button>
                      )}
                    </div>
                  ))}
                  {formData.teamMembers.length < 5 && (
                    <button 
                      type="button" 
                      onClick={addTeamMember}
                      className="add-member-btn"
                    >
                      <Plus size={16} />
                      Add Team Member
                    </button>
                  )}
                  {errors.teamMembers && (
                    <p className="error">
                      <AlertCircle size={14} style={{ marginRight: '6px' }} />
                      {errors.teamMembers}
                    </p>
                  )}
                </div>
              </div>
              
            </div>
            <div className="terms-checkbox-container">
              <label className="terms-label">
                <input
                  type="checkbox"
                  checked={formData.agreeToTerms}
                  onChange={handleCheckboxChange}
                  className="terms-checkbox"
                />
                <span className="checkbox-text">
                  I have read and agree to all the terms and conditions of Greenov 2025
                </span>
              </label>
              {errors.agreeToTerms && (
                <p className="error">
                  <AlertCircle size={14} style={{ marginRight: '6px' }} />
                  {errors.agreeToTerms}
                </p>
              )}
            </div>
            <button 
              type="submit" 
              className={`submit-btn ${isSubmitting ? 'submitting' : ''}`} 
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader size={18} className="spinner" />
                  Submitting...
                </>
              ) : 'Register Now'}
            </button>
            
            {submitStatus === 'error' && (
              <div className="error submission-error">
                <AlertCircle size={16} style={{ marginRight: '8px' }} />
                <div>
                  <p>{errors.submission || "There was an error submitting your registration. Please try again."}</p>
                </div>
              </div>
            )}
          </form>
        )}
>>>>>>> origin/med
      </div>
    </section>
  );
};

export default Register;