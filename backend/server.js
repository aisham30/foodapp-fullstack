const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb+srv://aisha:mendonsa@cluster0.cqpbz1v.mongodb.net/contactDB?retryWrites=true&w=majority")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("DB ERROR:", err));

// Schema
const Contact = mongoose.model("Contact", {
    name: String,
    email: String,
    phone: String
});

const Order = mongoose.model("Order", {
  items: Array,
  totalAmount: Number,
  createdAt: {
    type: Date,
    default: Date.now
  }
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

app.post("/api/orders", async (req, res) => {
  try {
    const { items, totalAmount } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ error: "Cart is empty" });
    }

    const newOrder = new Order({ items, totalAmount });
    await newOrder.save();

    res.status(201).json(newOrder);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

app.get("/api/orders", async (req, res) => {
  const data = await Order.find();
  res.json(data);
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});