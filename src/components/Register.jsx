import React, { useState } from 'react';
import { Plus, X, AlertCircle, User, Mail, Phone, MapPin } from 'lucide-react';
import "../assets/styles/Register.css";

const AIRTABLE_URL = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_AIRTABLE_TABLE_NAME}`;
const AIRTABLE_TOKEN = import.meta.env.VITE_AIRTABLE_TOKEN;

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    teamName: '',
    teamMembers: ['']
  });

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
  };

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

    // Address validation
    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
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

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
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
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          address: '',
          teamName: '',
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
      </div>
    </section>
  );
};

export default Register;