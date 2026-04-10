import { useState } from "react";

function Newsletter() {
    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (!email.includes("@")) {
            setError("Please enter a valid email");
            return;
        }
        setError("");
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            setEmail("");
        }, 3000);
    }

    return (
        <section className="newsletter">
            <div className="newsletter-content">
                <div className="newsletter-text">
                    <h2>Get <span className="gradient-text">20% Off</span> Your First Order</h2>
                    <p>Subscribe to our newsletter and receive exclusive deals, new menu alerts, and special offers straight to your inbox.</p>
                </div>

                <form className="newsletter-form" onSubmit={handleSubmit}>
                    {isSubmitted ? (
                        <div className="newsletter-success">
                            <span className="success-icon">🎉</span>
                            <p>You're in! Check your inbox for the coupon.</p>
                        </div>
                    ) : (
                        <>
                            <div className="newsletter-input-wrap">
                                <input
                                    type="email"
                                    placeholder="Enter your email..."
                                    value={email}
                                    onChange={(e) => { setEmail(e.target.value); setError(""); }}
                                    className={error ? "input-error" : ""}
                                />
                                <button type="submit" className="newsletter-btn">
                                    Subscribe 🚀
                                </button>
                            </div>
                            {error && <p className="newsletter-error">{error}</p>}
                        </>
                    )}
                </form>
            </div>

            <div className="newsletter-badges">
                <span>🔒 No spam, ever</span>
                <span>📧 Weekly updates</span>
                <span>🎁 Exclusive deals</span>
            </div>
        </section>
    );
}

export default Newsletter;
