gsap.registerPlugin(ScrollTrigger);

/* Cursor (desktop only) */
const cursor = document.querySelector(".cursor");
if (window.innerWidth > 900) {
    document.addEventListener("mousemove", e => {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
    });
} else {
    cursor.style.display = "none";
}

/* Mobile Menu */
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
});

/* Hero Animation */
gsap.from(".hero-content h1", {
    y: 60,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
});

gsap.from(".hero-content p", {
    y: 40,
    opacity: 0,
    delay: 0.3,
    duration: 1
});

gsap.from(".hero-content button", {
    scale: 0.8,
    opacity: 0,
    delay: 0.6,
    duration: 0.8
});

/* Section Reveal */
gsap.utils.toArray("section").forEach(section => {
    gsap.from(section.children, {
        scrollTrigger: {
            trigger: section,
            start: "top 80%"
        },
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 1
    });
});

/* Floating Blobs */
gsap.to(".blob1", {
    y: 60,
    duration: 6,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

gsap.to(".blob2", {
    y: -60,
    duration: 7,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

/* Magnetic Buttons */
document.querySelectorAll(".magnetic").forEach(btn => {
    btn.addEventListener("mousemove", e => {
        const r = btn.getBoundingClientRect();
        btn.style.transform = `
            translate(
                ${(e.clientX - r.left - r.width / 2) * 0.25}px,
                ${(e.clientY - r.top - r.height / 2) * 0.25}px
            )
        `;
    });

    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "translate(0,0)";
    });
});

/* Card Tilt (desktop only) */
if (window.innerWidth > 900) {
    document.querySelectorAll(".tilt").forEach(card => {
        card.addEventListener("mousemove", e => {
            const r = card.getBoundingClientRect();
            const x = e.clientX - r.left;
            const y = e.clientY - r.top;
            card.style.transform = `
                rotateX(${-(y - r.height / 2) / 12}deg)
                rotateY(${(x - r.width / 2) / 12}deg)
            `;
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "rotateX(0) rotateY(0)";
        });
    });
}

gsap.fromTo(".page-transition",
    { scaleY: 1 },
    { scaleY: 0, duration: 1, ease: "power4.out" }
);

gsap.from(".chart polyline", {
    scrollTrigger: ".chart",
    strokeDasharray: 300,
    strokeDashoffset: 300,
    duration: 1.5,
    ease: "power2.out"
});

gsap.from(".story-step", {
    scrollTrigger: {
        trigger: ".story",
        start: "top 80%"
    },
    y: 50,
    opacity: 0,
    stagger: 0.2
});


gsap.from(".why-card", {
    scrollTrigger: {
        trigger: ".why-us",
        start: "top 80%"
    },
    y: 40,
    opacity: 0,
    stagger: 0.15,
    duration: 1,
    ease: "power3.out"
});

gsap.from(".service-card", {
    scrollTrigger: {
        trigger: ".services",
        start: "top 80%"
    },
    y: 40,
    opacity: 0,
    stagger: 0.2,
    duration: 1
});

gsap.from(".package-card", {
    scrollTrigger: {
        trigger: "#packages",
        start: "top 80%"
    },
    y: 50,
    opacity: 0,
    stagger: 0.2,
    duration: 1
});

gsap.from(".review-card", {
    scrollTrigger: {
        trigger: ".reviews",
        start: "top 80%"
    },
    y: 40,
    opacity: 0,
    stagger: 0.2,
    duration: 1,
    ease: "power3.out"
});

gsap.from(".footer-block", {
    scrollTrigger: {
        trigger: ".footer",
        start: "top 85%"
    },
    y: 30,
    opacity: 0,
    stagger: 0.2,
    duration: 1,
    ease: "power2.out"
});
