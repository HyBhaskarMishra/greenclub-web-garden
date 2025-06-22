
// JavaScript for GreenClub website functionality

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Initialize animations
    initAnimations();
    
    // Initialize carbon chart if on home page
    if (document.getElementById('carbonChart')) {
        initCarbonChart();
    }
    
    // Initialize feedback form if on feedback page
    if (document.getElementById('feedbackForm')) {
        initFeedbackForm();
    }
    
    // Initialize rating system
    initRatingSystem();
    
    // Fix navigation links
    initNavigation();
});

// Navigation functionality
function initNavigation() {
    // Add active class to current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Ensure all navigation links work properly
    document.querySelectorAll('a[href]').forEach(link => {
        const href = link.getAttribute('href');
        if (href && !href.startsWith('#') && !href.startsWith('http')) {
            link.addEventListener('click', function(e) {
                // Allow normal navigation to work
                console.log('Navigating to:', href);
            });
        }
    });
}

// Animation functions
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.timeline-item, .work-card, .team-card, .social-card, .achievement-stat').forEach(el => {
        observer.observe(el);
    });
}

// Carbon footprint chart - Enhanced interactive version
function initCarbonChart() {
    const ctx = document.getElementById('carbonChart');
    if (!ctx) return;
    
    const chartCtx = ctx.getContext('2d');
    
    // Create gradient
    const gradient = chartCtx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(16, 185, 129, 0.3)');
    gradient.addColorStop(1, 'rgba(16, 185, 129, 0.05)');
    
    new Chart(chartCtx, {
        type: 'line',
        data: {
            labels: ['2020', '2021', '2022', '2023', '2024'],
            datasets: [{
                label: 'Carbon Footprint Reduction (%)',
                data: [0, 15, 28, 35, 42],
                borderColor: '#10b981',
                backgroundColor: gradient,
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointBackgroundColor: '#10b981',
                pointBorderColor: '#ffffff',
                pointBorderWidth: 3,
                pointRadius: 8,
                pointHoverRadius: 12,
                pointHoverBackgroundColor: '#059669',
                pointHoverBorderColor: '#ffffff',
                pointHoverBorderWidth: 3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                intersect: false,
                mode: 'index'
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        color: '#374151',
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    titleColor: '#ffffff',
                    bodyColor: '#ffffff',
                    borderColor: '#10b981',
                    borderWidth: 2,
                    cornerRadius: 8,
                    displayColors: false,
                    callbacks: {
                        title: function(tooltipItems) {
                            return 'Year: ' + tooltipItems[0].label;
                        },
                        label: function(context) {
                            return 'Reduction: ' + context.parsed.y + '%';
                        },
                        afterLabel: function(context) {
                            const achievements = {
                                0: 'Club established',
                                15: 'First green initiatives',
                                28: 'Major recycling program',
                                35: 'Solar panel installation',
                                42: 'Campus-wide sustainability'
                            };
                            return achievements[context.parsed.y] || '';
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 50,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        },
                        color: '#6b7280',
                        font: {
                            size: 12
                        }
                    },
                    grid: {
                        color: '#e5e7eb',
                        lineWidth: 1
                    },
                    title: {
                        display: true,
                        text: 'Carbon Footprint Reduction',
                        color: '#374151',
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    }
                },
                x: {
                    ticks: {
                        color: '#6b7280',
                        font: {
                            size: 12
                        }
                    },
                    grid: {
                        color: '#e5e7eb',
                        lineWidth: 1
                    },
                    title: {
                        display: true,
                        text: 'Year',
                        color: '#374151',
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    }
                }
            },
            elements: {
                point: {
                    hoverRadius: 12
                }
            },
            onHover: (event, activeElements) => {
                event.native.target.style.cursor = activeElements.length > 0 ? 'pointer' : 'default';
            },
            onClick: (event, activeElements) => {
                if (activeElements.length > 0) {
                    const dataIndex = activeElements[0].index;
                    const year = ['2020', '2021', '2022', '2023', '2024'][dataIndex];
                    const value = [0, 15, 28, 35, 42][dataIndex];
                    alert(`Year ${year}: ${value}% carbon footprint reduction achieved!`);
                }
            }
        }
    });
}

// Feedback form handling
function initFeedbackForm() {
    const form = document.getElementById('feedbackForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Collect form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Validate required fields
        if (!validateForm(data)) {
            return;
        }
        
        // Simulate form submission
        setTimeout(() => {
            showThankYouMessage();
            form.reset();
            resetRating();
        }, 1000);
    });
}

// Form validation
function validateForm(data) {
    const requiredFields = ['firstName', 'lastName', 'email', 'role', 'category', 'rating', 'message'];
    
    for (const field of requiredFields) {
        if (!data[field]) {
            alert(`Please fill in the ${field.replace(/([A-Z])/g, ' $1').toLowerCase()} field.`);
            return false;
        }
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        alert('Please enter a valid email address.');
        return false;
    }
    
    return true;
}

// Rating system
function initRatingSystem() {
    const ratingInputs = document.querySelectorAll('input[name="rating"]');
    const stars = document.querySelectorAll('.star');
    
    stars.forEach((star, index) => {
        star.addEventListener('click', function() {
            const rating = 5 - index;
            ratingInputs[index].checked = true;
            updateStarDisplay(rating);
        });
        
        star.addEventListener('mouseenter', function() {
            const rating = 5 - index;
            highlightStars(rating);
        });
    });
    
    // Reset on mouse leave
    const ratingContainer = document.querySelector('.rating-stars');
    if (ratingContainer) {
        ratingContainer.addEventListener('mouseleave', function() {
            const checkedRating = document.querySelector('input[name="rating"]:checked');
            if (checkedRating) {
                updateStarDisplay(parseInt(checkedRating.value));
            } else {
                resetStarDisplay();
            }
        });
    }
}

function highlightStars(rating) {
    const stars = document.querySelectorAll('.star');
    stars.forEach((star, index) => {
        if (5 - index <= rating) {
            star.style.color = '#fbbf24';
        } else {
            star.style.color = '#d1d5db';
        }
    });
}

function updateStarDisplay(rating) {
    highlightStars(rating);
}

function resetStarDisplay() {
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        star.style.color = '#d1d5db';
    });
}

function resetRating() {
    const ratingInputs = document.querySelectorAll('input[name="rating"]');
    ratingInputs.forEach(input => {
        input.checked = false;
    });
    resetStarDisplay();
}

// Thank you message
function showThankYouMessage() {
    document.getElementById('thankYouMessage').classList.remove('hidden');
}

function closeThankYouMessage() {
    document.getElementById('thankYouMessage').classList.add('hidden');
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Newsletter subscription
function subscribeNewsletter() {
    const emailInput = document.querySelector('input[type="email"]');
    const email = emailInput.value;
    
    if (!email) {
        alert('Please enter your email address.');
        return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    // Simulate subscription
    alert('Thank you for subscribing to our newsletter!');
    emailInput.value = '';
}

// Apply button functionality
document.querySelectorAll('.btn-primary').forEach(button => {
    if (button.textContent.includes('Apply Now')) {
        button.addEventListener('click', function() {
            alert('Application form will open soon! Please check our social media for updates.');
        });
    }
});

// Add loading states to buttons
function addLoadingState(button) {
    const originalText = button.textContent;
    button.textContent = 'Loading...';
    button.disabled = true;
    
    setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
    }, 2000);
}

// Add scroll-to-top functionality
window.addEventListener('scroll', function() {
    const scrollToTop = document.getElementById('scrollToTop');
    if (scrollToTop) {
        if (window.pageYOffset > 300) {
            scrollToTop.style.display = 'block';
        } else {
            scrollToTop.style.display = 'none';
        }
    }
});

// Add parallax effect to hero images
window.addEventListener('scroll', function() {
    const heroImages = document.querySelectorAll('.hero-image');
    const scrolled = window.pageYOffset;
    
    heroImages.forEach(img => {
        const rate = scrolled * -0.5;
        img.style.transform = `translateY(${rate}px)`;
    });
});

// Add typing effect for hero text
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize page-specific features
function initPageSpecific() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    switch(currentPage) {
        case 'index.html':
        case '':
            initHomePage();
            break;
        case 'recruitment.html':
            initRecruitmentPage();
            break;
        case 'socials.html':
            initSocialsPage();
            break;
        case 'feedback.html':
            initFeedbackPage();
            break;
    }
}

function initHomePage() {
    // Add any home page specific functionality
    console.log('Home page initialized');
}

function initRecruitmentPage() {
    // Add any recruitment page specific functionality
    console.log('Recruitment page initialized');
}

function initSocialsPage() {
    // Add any socials page specific functionality
    console.log('Socials page initialized');
}

function initFeedbackPage() {
    // Add any feedback page specific functionality
    console.log('Feedback page initialized');
}

// Call page-specific initialization
document.addEventListener('DOMContentLoaded', initPageSpecific);
