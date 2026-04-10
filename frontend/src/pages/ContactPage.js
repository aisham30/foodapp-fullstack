import { useState } from "react";
import axios from "axios";

function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    // Validation
    if (!form.name || !form.email || !form.phone) {
      alert("All fields are required");
      return;
    }

    try {await axios.post("https://foodapp-fullstack.onrender.com/api/contacts", form);
      alert("Contact saved to database ✅");

      setForm({ name: "", email: "", phone: "" });
    } catch (error) {
      alert("Error saving data ❌");
    }
  }

  return (
  <div className="contact-container">
    <h2 className="contact-title">Contact Us</h2>

    <form onSubmit={handleSubmit} className="contact-form">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
      />

      <input
        type="text"
        name="phone"
        placeholder="Your Phone"
        value={form.phone}
        onChange={handleChange}
      />

      <button type="submit">Send Message 🚀</button>
    </form>
  </div>
);
}

export default ContactPage;