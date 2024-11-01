import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setError(''); // Reset any previous errors

  const currentDateTime = new Date().toLocaleString(); // Get the current date and time
  const formattedMessage = `
    Name: ${formData.name}\n
    Email: ${formData.email}\n
    Subject: ${formData.subject}\n
    Thoughts:\n${formData.message}\n
    Time and Date: ${currentDateTime}
  `;

  try {
    const response = await fetch('https://send-mail-lalasa.vercel.app/api/send-email', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        subject: 'Portfolio', // Fixed subject
        message: formattedMessage, // Use the formatted message
    }),
});

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    setIsSubmitted(true); // Set success state
    // Reset the form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  } catch (err) {
    console.error('Error:', err); // Log the error
    setError('Failed to send the message. Please try again later.');
  }
};

  return (
    <section id="contact" style={contactSectionStyle}>
      <h2 style={titleStyle}>Get In Touch!</h2>
      <p style={subTextStyle}>Let's collab and do projects together</p>
      <a href="mailto:lalasaa24@gmail.com" style={emailLinkStyle}>Don't like forms? Send me an email 📧</a>

      {isSubmitted && <p style={successMessageStyle}>Message sent successfully!</p>}
      {error && <p style={errorMessageStyle}>{error}</p>}

      <form style={formStyle} onSubmit={handleSubmit}>
        <div style={inputRowStyle}>
          <input 
            type="text" 
            name="name" 
            placeholder="Insert your name" 
            value={formData.name}
            onChange={handleChange}
            style={inputStyle}
            required 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Insert your email" 
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
            required 
          />
        </div>

        <input 
          type="text" 
          name="subject" 
          placeholder="Insert your subject" 
          value={formData.subject}
          onChange={handleChange}
          style={inputStyle}
          required 
        />

        <textarea 
          name="message" 
          placeholder="Write something" 
          value={formData.message}
          onChange={handleChange}
          style={textareaStyle}
          required 
        />

        <button type="submit" style={submitButtonStyle}>Send Message</button>
      </form>
    </section>
  );
};

// Styles (unchanged)...
const contactSectionStyle = {
  padding: '50px',
  background: 'linear-gradient(90deg, #1a1a2e, #16213e)',
  textAlign: 'center',
  height: '90vh',
};

const titleStyle = {
  fontSize: '2.5em',
  color: '#007BFF',
  marginBottom: '10px',
};

const subTextStyle = {
  fontSize: '1.2em',
  color: 'white',
};

const emailLinkStyle = {
  color: '#007BFF',
  fontSize: '1.1em',
  textDecoration: 'none',
  display: 'block',
  marginBottom: '30px',
};

const successMessageStyle = {
  color: 'green',
  fontSize: '1.2em',
  marginBottom: '15px',
};

const errorMessageStyle = {
  color: 'red',
  fontSize: '1.2em',
  marginBottom: '15px',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '15px',
  maxWidth: '600px',
  margin: '0 auto',
};

const inputRowStyle = {
  display: 'flex',
  gap: '20px',
  width: '100%',
};

const inputStyle = {
  padding: '15px',
  borderRadius: '25px',
  border: 'none',
  backgroundColor: '#FFFAFA',
  width: '100%',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  fontSize: '1em',
};

const textareaStyle = {
  padding: '15px',
  borderRadius: '15px',
  border: 'none',
  backgroundColor: '#fff',
  width: '100%',
  height: '150px', // Set a fixed height for better UX
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  fontSize: '1em',
  resize: 'none',
};

const submitButtonStyle = {
  padding: '15px 40px',
  borderRadius: '25px',
  backgroundColor: '#ff3f3f',
  color: '#fff',
  border: 'none',
  fontSize: '1.1em',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
};

export default Contact;
