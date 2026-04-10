const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/contactDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Schema
const Contact = mongoose.model("Contact", {
    name: String,
    email: String,
    phone: String
});

// Routes
app.post("/api/contacts", async (req, res) => {
    try {
        const { name, email, phone } = req.body;

        if (!name || !email || !phone) {
            return res.status(400).json({ error: "All fields required" });
        }

        const newContact = new Contact({ name, email, phone });
        await newContact.save();

        res.status(201).json(newContact);
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
});

app.get("/api/contacts", async (req, res) => {
    const data = await Contact.find();
    res.json(data);
});

app.delete("/api/contacts/:id", async (req, res) => {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
});

// Start server
app.listen(5000, () => {
    console.log("Server running on port 5000");
});