import { useState } from "react";

function AboutPage() {
    const [activeTab, setActiveTab] = useState("story");
    const [faqOpen, setFaqOpen] = useState(null);

    const faqs = [
        { q: "What areas do you deliver to?", a: "We currently deliver across 25+ cities in India, with new cities being added every month." },
        { q: "What are the delivery hours?", a: "We deliver from 10:00 AM to 11:00 PM, 7 days a week. Late night cravings? We've got you covered!" },
        { q: "How long does delivery take?", a: "Typically 25-35 minutes from the time you place your order, depending on the restaurant's distance." },
        { q: "Can I cancel my order?", a: "Yes! You can cancel within 2 minutes of placing your order for a full refund." },
        { q: "Do you offer vegetarian options?", a: "Absolutely! Most of our partner restaurants offer extensive vegetarian and vegan menus." },
    ];

    const team = [
        { name: "Kavi", role: "Founder & CEO", emoji: "👩‍💼", bio: "Food enthusiast with a vision to make gourmet food accessible to everyone." },
        { name: "Arjun", role: "Head Chef Curator", emoji: "👨‍🍳", bio: "15 years of culinary expertise, curating the finest dishes from top restaurants." },
        { name: "Priya", role: "Design Lead", emoji: "👩‍🎨", bio: "Creating beautiful food experiences from screen to plate." },
        { name: "Rahul", role: "Tech Lead", emoji: "👨‍💻", bio: "Building the fastest, most reliable food delivery platform in India." },
    ];

    return (
        <div className="about-page">
            <section className="page-hero">
                <h1>About <span className="gradient-text">FoodDash</span></h1>
                <p>Our mission is to bring restaurant-quality food to your doorstep</p>
            </section>

            {/* Tab navigation */}
            <div className="about-tabs">
                {["story", "team", "faq"].map((tab) => (
                    <button
                        key={tab}
                        className={`about-tab ${activeTab === tab ? "active" : ""}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab === "story" ? "📖 Our Story" : tab === "team" ? "👥 Our Team" : "❓ FAQ"}
                    </button>
                ))}
            </div>

            {/* Story Tab */}
            {activeTab === "story" && (
                <section className="about-content about-story">
                    <div className="story-timeline">
                        <div className="timeline-item">
                            <div className="timeline-dot" />
                            <div className="timeline-card">
                                <span className="timeline-year">2023</span>
                                <h3>The Idea 💡</h3>
                                <p>Born from a late-night craving when no delivery app had what we wanted — real, gourmet food delivered fast.</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-dot" />
                            <div className="timeline-card">
                                <span className="timeline-year">2024</span>
                                <h3>Launch Day 🚀</h3>
                                <p>Launched in Mumbai with 20 partner restaurants. Received 1000+ orders in the first week!</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-dot" />
                            <div className="timeline-card">
                                <span className="timeline-year">2025</span>
                                <h3>Expansion 🌍</h3>
                                <p>Expanded to 15 cities with 80+ restaurants. Introduced our famous 30-minute delivery guarantee.</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-dot" />
                            <div className="timeline-card">
                                <span className="timeline-year">2026</span>
                                <h3>Today ✨</h3>
                                <p>Now in 25+ cities with 120+ restaurants, serving 50,000+ happy customers every day.</p>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Team Tab */}
            {activeTab === "team" && (
                <section className="about-content about-team">
                    <div className="team-grid">
                        {team.map((member, i) => (
                            <div className="team-card" key={i}>
                                <div className="team-emoji">{member.emoji}</div>
                                <h3>{member.name}</h3>
                                <span className="team-role">{member.role}</span>
                                <p>{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* FAQ Tab */}
            {activeTab === "faq" && (
                <section className="about-content about-faq">
                    <div className="faq-list">
                        {faqs.map((faq, i) => (
                            <div className={`faq-item ${faqOpen === i ? "faq-open" : ""}`} key={i}>
                                <button className="faq-question" onClick={() => setFaqOpen(faqOpen === i ? null : i)}>
                                    <span>{faq.q}</span>
                                    <span className="faq-toggle">{faqOpen === i ? "−" : "+"}</span>
                                </button>
                                {faqOpen === i && <div className="faq-answer"><p>{faq.a}</p></div>}
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
}

export default AboutPage;
