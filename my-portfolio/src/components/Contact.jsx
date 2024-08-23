import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  // const [errors, setErrors] = useState({}); // Commented out since it's not used

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form validation and submission logic here
  };

  return (
    <section>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;