// Advanced Interactive Portfolio JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });

    // Global variables
    let isLoading = true;
    let currentTheme = 'dark';

    // Initialize all components
    initializeLoading();
    initializeCursor();
    initializeNavigation();
    initializeTypewriter();
    initializeCounters();
    initializeParticles();
    initializeScrollEffects();
    initializeSkillBars();
    initializeProjectFilters();
    initializeContactForm();
    initializeThemeToggle();
    initializeBackToTop();
    initializeSkillsChart();

    // Loading Screen
    function initializeLoading() {
        const loadingScreen = document.getElementById('loading-screen');
        const loadingProgress = document.querySelector('.loading-progress');

        // Simulate loading progress
        let progress = 0;
        const loadingInterval = setInterval(() => {
            progress += Math.random() * 15;
            if (progress >= 100) {
                progress = 100;
                clearInterval(loadingInterval);

                setTimeout(() => {
                    loadingScreen.classList.add('loaded');
                    isLoading = false;
                    document.body.style.overflow = 'auto';
                }, 500);
            }
            loadingProgress.style.width = progress + '%';
        }, 200);
    }

    // Custom Cursor
    function initializeCursor() {
        const cursorTrail = document.querySelector('.cursor-trail');
        const cursorDot = document.querySelector('.cursor-dot');

        if (!cursorTrail || !cursorDot) return;

        let mouseX = 0, mouseY = 0;
        let trailX = 0, trailY = 0;
        let dotX = 0, dotY = 0;

        // Update mouse position
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        // Animate cursors
        function animateCursor() {
            // Smooth trailing effect
            trailX += (mouseX - trailX) * 0.1;
            trailY += (mouseY - trailY) * 0.1;

            dotX += (mouseX - dotX) * 0.8;
            dotY += (mouseY - dotY) * 0.8;

            cursorTrail.style.transform = `translate(${trailX - 20}px, ${trailY - 20}px)`;
            cursorDot.style.transform = `translate(${dotX - 4}px, ${dotY - 4}px)`;

            requestAnimationFrame(animateCursor);
        }

        animateCursor();

        // Add hover effects
        const hoverElements = document.querySelectorAll('a, button, .btn, .nav-link, .project-card, .leadership-card');

        hoverElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                cursorTrail.style.transform += ' scale(1.5)';
                cursorDot.style.transform += ' scale(2)';
            });

            element.addEventListener('mouseleave', () => {
                cursorTrail.style.transform = cursorTrail.style.transform.replace(' scale(1.5)', '');
                cursorDot.style.transform = cursorDot.style.transform.replace(' scale(2)', '');
            });
        });
    }

    // Navigation
    function initializeNavigation() {
        const navbar = document.getElementById('navbar');
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('navMenu');
        const navLinks = document.querySelectorAll('.nav-link');

        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Mobile menu toggle
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Smooth scrolling for navigation links
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');

                if (href.startsWith('#')) {
                    e.preventDefault();
                    const target = document.querySelector(href);

                    if (target) {
                        const offsetTop = target.offsetTop - 80;
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                    }
                }

                // Close mobile menu
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Active section highlighting
        const sections = document.querySelectorAll('section[id]');

        window.addEventListener('scroll', () => {
            const scrollY = window.pageYOffset;

            sections.forEach(section => {
                const sectionHeight = section.offsetHeight;
                const sectionTop = section.offsetTop - 100;
                const sectionId = section.getAttribute('id');

                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        });
    }

    // Typewriter Effect
    function initializeTypewriter() {
        const typewriter = document.getElementById('typewriter');
        if (!typewriter) return;

        const words = [
            'Full Stack Developer',
            'Data Scientist',
            'ML Engineer',
            'Tech Leader',
            'Problem Solver',
            'Innovation Driver'
        ];

        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function typeEffect() {
            const currentWord = words[wordIndex];

            if (isDeleting) {
                typewriter.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typewriter.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
            }

            let typeSpeed = isDeleting ? 50 : 100;

            if (!isDeleting && charIndex === currentWord.length) {
                typeSpeed = 2000; // Pause at end
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typeSpeed = 500; // Pause before typing next word
            }

            setTimeout(typeEffect, typeSpeed);
        }

        typeEffect();
    }

    // Animated Counters
    function initializeCounters() {
        const counters = document.querySelectorAll('.stat-number[data-count]');

        const animateCounter = (counter) => {
            const target = parseInt(counter.getAttribute('data-count'));
            const duration = 2000;
            const start = performance.now();

            const animate = (currentTime) => {
                const elapsed = currentTime - start;
                const progress = Math.min(elapsed / duration, 1);

                // Easing function for smooth animation
                const easeOut = 1 - Math.pow(1 - progress, 3);
                const current = Math.floor(easeOut * target);

                counter.textContent = current;

                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    counter.textContent = target + '+';
                }
            };

            requestAnimationFrame(animate);
        };

        // Intersection Observer for triggering animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.7 });

        counters.forEach(counter => observer.observe(counter));
    }

    // Particle Background
    function initializeParticles() {
        const container = document.getElementById('particles-container');
        if (!container) return;

        const particleCount = 50;
        const particles = [];

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.width = Math.random() * 4 + 1 + 'px';
            particle.style.height = particle.style.width;
            particle.style.background = 'rgba(0, 212, 255, 0.3)';
            particle.style.borderRadius = '50%';
            particle.style.pointerEvents = 'none';

            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            const vx = (Math.random() - 0.5) * 2;
            const vy = (Math.random() - 0.5) * 2;

            particle.style.left = x + 'px';
            particle.style.top = y + 'px';

            particles.push({
                element: particle,
                x: x,
                y: y,
                vx: vx,
                vy: vy
            });

            container.appendChild(particle);
        }

        function animateParticles() {
            particles.forEach(particle => {
                particle.x += particle.vx;
                particle.y += particle.vy;

                // Wrap around screen edges
                if (particle.x < 0) particle.x = window.innerWidth;
                if (particle.x > window.innerWidth) particle.x = 0;
                if (particle.y < 0) particle.y = window.innerHeight;
                if (particle.y > window.innerHeight) particle.y = 0;

                particle.element.style.left = particle.x + 'px';
                particle.element.style.top = particle.y + 'px';
            });

            requestAnimationFrame(animateParticles);
        }

        animateParticles();
    }

    // Scroll Effects
    function initializeScrollEffects() {
        // Parallax effect for hero section
        const hero = document.querySelector('.hero');
        const profileImage = document.querySelector('.profile-image');

        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;

            if (hero && scrolled < hero.offsetHeight) {
                if (profileImage) {
                    profileImage.style.transform = `translateY(${rate}px)`;
                }
            }
        });

        // Reveal animations for sections
        const revealElements = document.querySelectorAll('.timeline-card, .leadership-card, .project-card, .skill-category');

        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        revealElements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            revealObserver.observe(element);
        });
    }

    // Skill Progress Bars
    function initializeSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress[data-width]');

        const skillObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const width = entry.target.getAttribute('data-width');
                    setTimeout(() => {
                        entry.target.style.width = width;
                    }, 200);
                    skillObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.7 });

        skillBars.forEach(bar => skillObserver.observe(bar));
    }

    // Project Filtering
    function initializeProjectFilters() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card');

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.getAttribute('data-filter');

                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                // Filter projects
                projectCards.forEach(card => {
                    const categories = card.getAttribute('data-category').split(' ');

                    if (filter === 'all' || categories.includes(filter)) {
                        card.style.display = 'block';
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'scale(0.8)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }

    // Contact Form with Firestore Integration
    function initializeContactForm() {
        const form = document.getElementById('contactForm');
        if (!form) return;

        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const submitButton = form.querySelector('button[type="submit"]');
            const originalText = submitButton.innerHTML;

            // Show loading state
            submitButton.innerHTML = '<span>Sending...</span><i class="fas fa-spinner fa-spin"></i>';
            submitButton.disabled = true;

            try {
                // Get form data
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const subject = document.getElementById('subject').value;
                const message = document.getElementById('message').value;

                // Check if Firestore is available
                if (!window.firestoreDB) {
                    throw new Error('Firestore is not initialized. Please check your Firebase configuration.');
                }

                // Add document to Firestore
                await window.firestoreAddDoc(
                    window.firestoreCollection(window.firestoreDB, 'messages'),
                    {
                        name: name,
                        email: email,
                        subject: subject,
                        message: message,
                        timestamp: window.firestoreTimestamp(),
                        read: false
                    }
                );

                // Show success message
                showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');

                // Reset form
                form.reset();

            } catch (error) {
                console.error('Error submitting form:', error);
                showNotification('Failed to send message. Please try again or email me directly.', 'error');
            } finally {
                // Reset button
                submitButton.innerHTML = originalText;
                submitButton.disabled = false;
            }
        });
    }

    // Theme Toggle
    function initializeThemeToggle() {
        const themeToggle = document.getElementById('themeToggle');
        if (!themeToggle) return;

        themeToggle.addEventListener('click', () => {
            currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', currentTheme);

            const icon = themeToggle.querySelector('i');
            icon.className = currentTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';

            // Store preference
            localStorage.setItem('theme', currentTheme);
        });

        // Load saved theme
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            currentTheme = savedTheme;
            document.documentElement.setAttribute('data-theme', currentTheme);
            const icon = themeToggle.querySelector('i');
            icon.className = currentTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
    }

    // Back to Top Button
    function initializeBackToTop() {
        const backToTop = document.getElementById('backToTop');
        if (!backToTop) return;

        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });

        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Skills Radar Chart
    function initializeSkillsChart() {
        const canvas = document.getElementById('skillsChart');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = 120;

        const skills = [
            { name: 'Frontend', level: 90 },
            { name: 'Backend', level: 85 },
            { name: 'Data Science', level: 80 },
            { name: 'Mobile', level: 75 },
            { name: 'DevOps', level: 70 },
            { name: 'ML/AI', level: 85 }
        ];

        function drawRadarChart() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw grid
            ctx.strokeStyle = 'rgba(0, 212, 255, 0.2)';
            ctx.lineWidth = 1;

            for (let i = 1; i <= 5; i++) {
                ctx.beginPath();
                ctx.arc(centerX, centerY, (radius / 5) * i, 0, 2 * Math.PI);
                ctx.stroke();
            }

            // Draw axes
            for (let i = 0; i < skills.length; i++) {
                const angle = (Math.PI * 2 * i) / skills.length - Math.PI / 2;
                const x = centerX + Math.cos(angle) * radius;
                const y = centerY + Math.sin(angle) * radius;

                ctx.beginPath();
                ctx.moveTo(centerX, centerY);
                ctx.lineTo(x, y);
                ctx.stroke();
            }

            // Draw skill polygon
            ctx.fillStyle = 'rgba(0, 212, 255, 0.2)';
            ctx.strokeStyle = 'rgba(0, 212, 255, 0.8)';
            ctx.lineWidth = 2;
            ctx.beginPath();

            for (let i = 0; i < skills.length; i++) {
                const angle = (Math.PI * 2 * i) / skills.length - Math.PI / 2;
                const skillRadius = (radius * skills[i].level) / 100;
                const x = centerX + Math.cos(angle) * skillRadius;
                const y = centerY + Math.sin(angle) * skillRadius;

                if (i === 0) {
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }
            }

            ctx.closePath();
            ctx.fill();
            ctx.stroke();

            // Draw skill points
            ctx.fillStyle = '#00d4ff';
            for (let i = 0; i < skills.length; i++) {
                const angle = (Math.PI * 2 * i) / skills.length - Math.PI / 2;
                const skillRadius = (radius * skills[i].level) / 100;
                const x = centerX + Math.cos(angle) * skillRadius;
                const y = centerY + Math.sin(angle) * skillRadius;

                ctx.beginPath();
                ctx.arc(x, y, 4, 0, 2 * Math.PI);
                ctx.fill();
            }
        }

        // Animate chart
        let animationProgress = 0;
        const animationDuration = 2000;
        const startTime = performance.now();

        function animateChart(currentTime) {
            const elapsed = currentTime - startTime;
            animationProgress = Math.min(elapsed / animationDuration, 1);

            // Easing function
            const progress = 1 - Math.pow(1 - animationProgress, 3);

            // Update skill levels based on progress
            skills.forEach(skill => {
                skill.currentLevel = skill.level * progress;
            });

            drawRadarChart();

            if (animationProgress < 1) {
                requestAnimationFrame(animateChart);
            }
        }

        // Start animation when chart comes into view
        const chartObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    requestAnimationFrame(animateChart);
                    chartObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        chartObserver.observe(canvas);
    }

    // Utility function for notifications
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#10b981' : '#3b82f6'};
            color: white;
            padding: 1rem 2rem;
            border-radius: 0.5rem;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
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
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    // Smooth scroll for anchor links
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

    // Add loading states to buttons
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function() {
            if (this.classList.contains('btn-primary')) {
                const originalContent = this.innerHTML;
                this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';

                setTimeout(() => {
                    this.innerHTML = originalContent;
                }, 1000);
            }
        });
    });

    // Keyboard navigation support
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            // Close mobile menu if open
            const hamburger = document.getElementById('hamburger');
            const navMenu = document.getElementById('navMenu');

            if (hamburger && navMenu) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        }
    });

    // Performance optimization: Debounce scroll events
    let scrollTimeout;
    function debounceScroll(func, wait) {
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(scrollTimeout);
                func(...args);
            };
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(later, wait);
        };
    }

    // Add intersection observer for better performance
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe all sections for animations
    document.querySelectorAll('section').forEach(section => {
        sectionObserver.observe(section);
    });

    console.log('🚀 Portfolio initialized successfully!');
});