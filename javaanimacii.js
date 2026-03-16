const observerOptions = {
    // Trigger when 10% of the section is visible
    threshold: 0.1 
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // If the element enters the screen
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            
            // This line tells the browser to STOP watching this element
            // once it has faded in, which saves battery/performance.
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Start watching all elements with the 'reveal' class
document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
});