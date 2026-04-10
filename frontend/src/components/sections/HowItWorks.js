import { useState, useEffect } from "react";

function HowItWorks() {
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        { icon: "📱", title: "Browse Menu", desc: "Explore our curated collection of gourmet dishes from top restaurants" },
        { icon: "🛒", title: "Add to Cart", desc: "Pick your favorites and customize your order exactly how you like it" },
        { icon: "💳", title: "Checkout", desc: "Secure payment with multiple options — cards, UPI, or cash on delivery" },
        { icon: "🚀", title: "Fast Delivery", desc: "Track your order in real-time as it's prepared and delivered to you" },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % steps.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [steps.length]);

    return (
        <section className="how-it-works">
            <h2 className="section-heading">
                How It <span className="gradient-text">Works</span>
            </h2>
            <p className="section-subtitle">Getting your food delivered is as easy as 1-2-3-4</p>

            <div className="steps-row">
                {steps.map((step, i) => (
                    <div
                        key={i}
                        className={`step-card ${activeStep === i ? "step-active" : ""}`}
                        onMouseEnter={() => setActiveStep(i)}
                    >
                        <div className="step-number">{String(i + 1).padStart(2, "0")}</div>
                        <div className="step-icon">{step.icon}</div>
                        <h3>{step.title}</h3>
                        <p>{step.desc}</p>
                        <div className="step-progress">
                            <div className={`step-progress-bar ${activeStep === i ? "filling" : ""}`} />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default HowItWorks;
