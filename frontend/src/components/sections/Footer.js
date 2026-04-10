import { useState } from "react";
import { Link } from "react-router-dom";

function Footer() {
    const [expandedSection, setExpandedSection] = useState(null);

    function toggleSection(section) {
        setExpandedSection((prev) => (prev === section ? null : section));
    }

    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-brand">
                    <div className="footer-logo">🍔 <span className="gradient-text">FoodDash</span></div>
                    <p>Delivering happiness, one meal at a time. Fresh, fast, and always delicious.</p>
                    <div className="footer-socials">
                        <a href="#!" className="social-icon">📸</a>
                        <a href="#!" className="social-icon">🐦</a>
                        <a href="#!" className="social-icon">📘</a>
                        <a href="#!" className="social-icon">▶️</a>
                    </div>
                </div>

                <div className="footer-links-group">
                    <div className="footer-col">
                        <h4 onClick={() => toggleSection("company")} className="footer-col-title">
                            Company {expandedSection === "company" ? "▲" : "▼"}
                        </h4>
                        <ul className={expandedSection === "company" ? "expanded" : ""}>
                            <li><Link to="/about">About Us</Link></li>
                            <li><a href="#!">Careers</a></li>
                            <li><a href="#!">Blog</a></li>
                            <li><a href="#!">Press</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4 onClick={() => toggleSection("support")} className="footer-col-title">
                            Support {expandedSection === "support" ? "▲" : "▼"}
                        </h4>
                        <ul className={expandedSection === "support" ? "expanded" : ""}>
                            <li><a href="#!">Help Center</a></li>
                            <li><a href="#!">Safety</a></li>
                            <li><a href="#!">Terms</a></li>
                            <li><a href="#!">Privacy</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4 onClick={() => toggleSection("contact")} className="footer-col-title">
                            Contact {expandedSection === "contact" ? "▲" : "▼"}
                        </h4>
                        <ul className={expandedSection === "contact" ? "expanded" : ""}>
                            <li><a href="#!">📧 hello@fooddash.in</a></li>
                            <li><a href="#!">📞 +91 98765 43210</a></li>
                            <li><a href="#!">📍 Mumbai, India</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2026 FoodDash. Made with ❤️ in India.</p>
            </div>
        </footer>
    );
}

export default Footer;
