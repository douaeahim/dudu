// Animated Hero Section
document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('.tcontent');
    let text = "Le site Douae Ahim à votre service";
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            title.textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, 100);
        }
    }

    typeEffect();
    
    // Background Animation on Hero Section
    const video = document.getElementById('background-video');
    let scale = 1;
    window.addEventListener('scroll', () => {
        scale = 1 + window.scrollY / 5000;
        video.style.transform = `scale(${scale})`;
    });
});

// Parallax Scrolling Effect
window.addEventListener('scroll', function() {
    const scrolled = window.scrollY;
    const parallaxElements = document.querySelectorAll('.parallax');

    parallaxElements.forEach((el) => {
        const speed = el.getAttribute('data-speed');
        el.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Hover Reveal Effect for Service Cards
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.classList.add('reveal');
    });
    card.addEventListener('mouseleave', function() {
        this.classList.remove('reveal');
    });
});

// 3D Hover Effect on Buttons and Images
const buttons = document.querySelectorAll('.btn1, .btn-primary');
const images = document.querySelectorAll('.album-grid img');

buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
        button.style.transform = 'scale(1.1) perspective(1500px) rotateY(5deg)';
        button.style.transition = 'transform 0.3s ease-in-out';
    });
    button.addEventListener('mouseleave', function() {
        button.style.transform = 'scale(1) perspective(1500px) rotateY(0deg)';
    });
});

images.forEach(image => {
    image.addEventListener('mouseenter', function() {
        image.style.transform = 'scale(1.1)';
        image.style.transition = 'transform 0.3s ease-in-out';
    });
    image.addEventListener('mouseleave', function() {
        image.style.transform = 'scale(1)';
    });
});

// Page Load Animation
window.addEventListener('load', () => {
    document.body.classList.add('fade-in');
});

