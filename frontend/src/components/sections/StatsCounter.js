import { useState, useEffect, useRef } from "react";

function StatsCounter() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    const stats = [
        { icon: "🍽️", target: 50000, suffix: "+", label: "Orders Delivered" },
        { icon: "⭐", target: 4.8, suffix: "", label: "Average Rating", isDecimal: true },
        { icon: "🧑‍🍳", target: 120, suffix: "+", label: "Partner Restaurants" },
        { icon: "🏙️", target: 25, suffix: "+", label: "Cities Covered" },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
            { threshold: 0.3 }
        );
        const current = sectionRef.current;
        if (current) observer.observe(current);
        return () => { if (current) observer.unobserve(current); };
    }, []);

    return (
        <section className="stats-section" ref={sectionRef}>
            <div className="stats-row">
                {stats.map((stat, i) => (
                    <div className="stat-card" key={i}>
                        <div className="stat-icon">{stat.icon}</div>
                        <div className="stat-number">
                            {isVisible ? (
                                <AnimatedNumber target={stat.target} isDecimal={stat.isDecimal} />
                            ) : 0}
                            {stat.suffix}
                        </div>
                        <div className="stat-label">{stat.label}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}

function AnimatedNumber({ target, isDecimal }) {
    const [value, setValue] = useState(0);

    useEffect(() => {
        const duration = 2000;
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                setValue(target);
                clearInterval(timer);
            } else {
                setValue(current);
            }
        }, duration / steps);
        return () => clearInterval(timer);
    }, [target]);

    return <span>{isDecimal ? value.toFixed(1) : Math.floor(value).toLocaleString()}</span>;
}

export default StatsCounter;
