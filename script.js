// Mobile Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
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

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(0, 0, 0, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(134, 13, 13, 0.3)';
        navbar.style.borderBottomColor = '#860d0d';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
        navbar.style.boxShadow = 'none';
        navbar.style.borderBottomColor = 'transparent';
    }
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.member-card, .release-card, .timeline-item, .tour-date, .merch-item, .platform-link');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add hover effects to release cards
document.querySelectorAll('.release-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        const playOverlay = card.querySelector('.play-overlay');
        if (playOverlay) {
            playOverlay.style.transform = 'translate(-50%, -50%) scale(1.1)';
        }
    });
    
    card.addEventListener('mouseleave', () => {
        const playOverlay = card.querySelector('.play-overlay');
        if (playOverlay) {
            playOverlay.style.transform = 'translate(-50%, -50%) scale(1)';
        }
    });
});

// Add click handlers for merch items
document.querySelectorAll('.merch-item .btn').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const merchName = button.closest('.merch-item').querySelector('.merch-name').textContent;
        
        // Simple cart simulation
        button.textContent = 'Added!';
        button.style.background = '#860d0d';
        button.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
            button.textContent = 'Add to Cart';
            button.style.background = '';
            button.style.transform = '';
        }, 2000);
        
        // Here you would normally integrate with a shopping cart system
        console.log(`Added ${merchName} to cart`);
    });
});

// Add click handlers for streaming platforms
document.querySelectorAll('.platform-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const platform = link.querySelector('span').textContent;
        
        // Add a visual feedback
        link.style.transform = 'translateY(-5px) scale(0.95)';
        setTimeout(() => {
            link.style.transform = 'translateY(-5px) scale(1)';
        }, 150);
        
        // Here you would normally redirect to the actual streaming platform
        console.log(`Opening ${platform}`);
        alert(`This would open ${platform}. Add your actual streaming links here!`);
    });
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero-content');
    const speed = scrolled * 0.5;
    
    if (parallax) {
        parallax.style.transform = `translateY(${speed}px)`;
    }
});

// Add typing effect to hero subtitle
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

// Initialize typing effect when page loads
window.addEventListener('load', () => {
    const subtitle = document.querySelector('.hero-subtitle');
    if (subtitle) {
        const originalText = subtitle.textContent;
        setTimeout(() => {
            typeWriter(subtitle, originalText, 80);
        }, 1000);
    }
});

// Add active section highlighting in navigation
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add CSS for active nav link
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: #860d0d !important;
    }
    .nav-link.active::after {
        width: 100% !important;
    }
    .nav-link.active::before {
        opacity: 1 !important;
        left: -25px !important;
    }
`;
document.head.appendChild(style);

// Add loading animation
window.addEventListener('load', () => {
    const loader = document.createElement('div');
    loader.id = 'loader';
    loader.innerHTML = `
        <div style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #000000;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            opacity: 1;
            transition: opacity 0.5s ease;
        ">
            <div style="
                font-size: 1.2rem;
                color: #860d0d;
                margin-bottom: 2rem;
                font-weight: 600;
                letter-spacing: 3px;
            ">OFFSUIT</div>
            <div style="
                width: 50px;
                height: 50px;
                border: 3px solid #333;
                border-top: 3px solid #860d0d;
                border-radius: 50%;
                animation: spin 1s linear infinite;
            "></div>
        </div>
        <style>
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }

        </style>
    `;
    
    document.body.appendChild(loader);
    
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.remove();
        }, 500);
    }, 1500);
});

// Add social media link handlers
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const icon = link.querySelector('i');
        const platform = icon.className.includes('instagram') ? 'Instagram' :
                        icon.className.includes('facebook') ? 'Facebook' :
                        icon.className.includes('twitter') ? 'Twitter' :
                        icon.className.includes('youtube') ? 'YouTube' : 'Social Media';
        
        // Add actual social media links here
        console.log(`Opening ${platform}`);
        alert(`This would open ${platform}. Add your actual social media links here!`);
    });
});

// Newsletter signup form handling
document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('email-signup');
    
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(signupForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const wantsUpdates = formData.get('updates') === 'on';
            
            // Get the submit button
            const submitBtn = signupForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            // Show loading state
            submitBtn.textContent = 'Joining...';
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.7';
            
            // Save email to local storage (and send to your email service)
            saveEmailToList(name, email, wantsUpdates);
            
            // Simulate form submission
            setTimeout(() => {
                // Success state
                submitBtn.textContent = 'Joined! ♠';
                submitBtn.style.background = '#860d0d';
                
                // Show success message
                showNotification('Welcome to the Offsuit email list! You\'ll be the first to know about our Jacksonville shows and new releases.', 'success');
                
                // Reset form
                signupForm.reset();
                // Re-check the updates checkbox by default
                document.getElementById('updates').checked = true;
                
                // Reset button after delay
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.opacity = '';
                    submitBtn.style.background = '';
                }, 3000);
                
                // Log the current email list size
                const emailList = getEmailList();
                console.log(`Email list now has ${emailList.length} subscribers`);
            }, 1500);
        });
    }
});

// Email list management functions
function saveEmailToList(name, email, wantsUpdates) {
    // Get existing email list from localStorage
    let emailList = JSON.parse(localStorage.getItem('offsuitEmailList') || '[]');
    
    // Check if email already exists
    const existingIndex = emailList.findIndex(subscriber => subscriber.email === email);
    
    const subscriberData = {
        name: name,
        email: email,
        wantsUpdates: wantsUpdates,
        dateAdded: new Date().toISOString(),
        source: 'website'
    };
    
    if (existingIndex >= 0) {
        // Update existing subscriber
        emailList[existingIndex] = { ...emailList[existingIndex], ...subscriberData };
    } else {
        // Add new subscriber
        emailList.push(subscriberData);
    }
    
    // Save back to localStorage
    localStorage.setItem('offsuitEmailList', JSON.stringify(emailList));
    
    // Also send to your email service (replace with your actual service)
    sendToEmailService(subscriberData);
}

function getEmailList() {
    return JSON.parse(localStorage.getItem('offsuitEmailList') || '[]');
}

function exportEmailList() {
    const emailList = getEmailList();
    const csvContent = "data:text/csv;charset=utf-8," 
        + "Name,Email,Wants Updates,Date Added,Source\n"
        + emailList.map(sub => 
            `"${sub.name}","${sub.email}","${sub.wantsUpdates}","${sub.dateAdded}","${sub.source}"`
        ).join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "offsuit_email_list.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function sendToEmailService(subscriberData) {
    // REPLACE THIS WITH YOUR ACTUAL EMAIL SERVICE
    
    // Option 1: Mailchimp API
    /*
    fetch('https://us1.api.mailchimp.com/3.0/lists/YOUR_LIST_ID/members', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer YOUR_API_KEY',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email_address: subscriberData.email,
            status: 'subscribed',
            merge_fields: {
                FNAME: subscriberData.name
            }
        })
    });
    */
    
    // Option 2: ConvertKit API
    /*
    fetch('https://api.convertkit.com/v3/forms/YOUR_FORM_ID/subscribe', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            api_key: 'YOUR_API_KEY',
            email: subscriberData.email,
            first_name: subscriberData.name
        })
    });
    */
    
    // Option 3: Netlify Forms (if hosted on Netlify)
    /*
    fetch('/', {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
            'form-name': 'newsletter',
            'name': subscriberData.name,
            'email': subscriberData.email
        })
    });
    */
    
    console.log('Subscriber data ready for email service:', subscriberData);
}

// Admin panel functions
function updateAdminStats() {
    const list = getEmailList();
    const recentSignups = list.filter(s => 
        new Date(s.dateAdded) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
    ).length;
    
    document.getElementById('total-subscribers').textContent = list.length;
    document.getElementById('recent-signups').textContent = recentSignups;
}

function toggleEmailList() {
    const display = document.getElementById('email-list-display');
    if (display.style.display === 'none') {
        displayEmailList();
        display.style.display = 'block';
    } else {
        display.style.display = 'none';
    }
}

function displayEmailList() {
    const list = getEmailList();
    const display = document.getElementById('email-list-display');
    
    if (list.length === 0) {
        display.innerHTML = '<p style="color: #999;">No subscribers yet.</p>';
        return;
    }
    
    const html = list.map(subscriber => `
        <div class="email-entry">
            <strong>${subscriber.name}</strong> - ${subscriber.email}<br>
            <small>
                Joined: ${new Date(subscriber.dateAdded).toLocaleDateString()} | 
                Updates: ${subscriber.wantsUpdates ? 'Yes' : 'No'}
            </small>
        </div>
    `).join('');
    
    display.innerHTML = html;
}

// Console commands for managing email list
window.offsuitEmailAdmin = {
    getList: getEmailList,
    exportList: exportEmailList,
    clearList: () => {
        if (confirm('Are you sure you want to clear the entire email list?')) {
            localStorage.removeItem('offsuitEmailList');
            updateAdminStats();
            console.log('Email list cleared');
        }
    },
    getStats: () => {
        const list = getEmailList();
        const stats = {
            total: list.length,
            wantsUpdates: list.filter(s => s.wantsUpdates).length,
            recentSignups: list.filter(s => 
                new Date(s.dateAdded) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
            ).length
        };
        console.log('Email List Stats:', stats);
        updateAdminStats();
        return stats;
    },
    showAdmin: () => {
        const adminPanel = document.getElementById('email-admin');
        if (adminPanel) {
            adminPanel.style.display = 'block';
            updateAdminStats();
            console.log('Admin panel shown. Use offsuitEmailAdmin.hideAdmin() to hide.');
        }
    },
    hideAdmin: () => {
        const adminPanel = document.getElementById('email-admin');
        if (adminPanel) {
            adminPanel.style.display = 'none';
            console.log('Admin panel hidden.');
        }
    }
};

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#860d0d' : '#333'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        font-size: 0.9rem;
        line-height: 1.4;
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after delay
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Add form handling for contact
function handleFormSubmit(formData) {
    console.log('Form submitted:', formData);
}

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close mobile menu on escape
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// Add resize handler for responsive adjustments
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

console.log('Offsuit website loaded successfully! 🎸'); 