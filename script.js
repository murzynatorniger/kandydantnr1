// ===== ZMIENNE GLOBALNE =====
let isLoggedIn = false;
let pollChart = null;
let dashboardPollChart = null;
let regionalChart = null;

// ===== INICJALIZACJA =====
document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initLoginModal();
    initContactForm();
    initCharts();
    initScrollAnimations();
    initSmoothScroll();
    initButtonHovers();
});

// ===== NAVBAR =====
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    // Sticky navbar na scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Hamburger menu
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Zamknij menu po kliknięciu na link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Scroll indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            const aboutSection = document.querySelector('#about');
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
}

// ===== LOGOWANIE =====
function initLoginModal() {
    const loginBtn = document.getElementById('loginBtn');
    const joinBtn = document.getElementById('joinBtn');
    const modal = document.getElementById('loginModal');
    const closeModal = document.querySelector('.close-modal');
    const loginForm = document.getElementById('loginForm');

    // Otwórz modal
    function openModal() {
        modal.classList.remove('hidden');
    }

    // Zamknij modal
    function closeModalWindow() {
        modal.classList.add('hidden');
    }

    loginBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        openModal();
    });

    joinBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        openModal();
    });

    closeModal?.addEventListener('click', closeModalWindow);

    // Zamknij modal na klik poza nim
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModalWindow();
        }
    });

    // Logowanie
    loginForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Demo logowanie: admin/admin
        if (username === 'admin' && password === 'admin') {
            isLoggedIn = true;
            showDashboard();
            closeModalWindow();
            loginForm.reset();
        } else {
            alert('Zła nazwa użytkownika lub hasło!\n\nDemo: admin / admin');
        }
    });
}

// ===== DASHBOARD =====
function showDashboard() {
    const dashboard = document.getElementById('dashboard');
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');
    const navbar = document.querySelector('.navbar');

    // Ukryj główną zawartość
    main.classList.add('hidden');
    footer.classList.add('hidden');
    navbar.classList.add('hidden');

    // Pokaż dashboard
    dashboard.classList.remove('hidden');

    // Inicjalizuj wykresy w dashboardzie
    setTimeout(() => {
        initDashboardCharts();
    }, 100);

    // Logout
    const logoutBtn = document.getElementById('logoutBtn');
    logoutBtn?.addEventListener('click', () => {
        logout();
    });
}

function logout() {
    isLoggedIn = false;
    const dashboard = document.getElementById('dashboard');
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');
    const navbar = document.querySelector('.navbar');

    dashboard.classList.add('hidden');
    main.classList.remove('hidden');
    footer.classList.remove('hidden');
    navbar.classList.remove('hidden');

    // Reset form
    document.getElementById('loginForm').reset();
}

// ===== WYKRESY =====
function initCharts() {
    // Wykres na stronie głównej
    const mainChartCanvas = document.getElementById('pollChart');
    if (mainChartCanvas) {
        pollChart = new Chart(mainChartCanvas, {
            type: 'line',
            data: {
                labels: ['Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik'],
                datasets: [
                    {
                        label: 'Mateusz Talar',
                        data: [28, 32, 38, 42, 46, 48],
                        borderColor: '#001a4d',
                        backgroundColor: 'rgba(0, 26, 77, 0.1)',
                        borderWidth: 3,
                        pointBackgroundColor: '#001a4d',
                        pointBorderColor: '#fff',
                        pointBorderWidth: 2,
                        pointRadius: 6,
                        tension: 0.4,
                        fill: true
                    },
                    {
                        label: 'Partia A',
                        data: [35, 33, 30, 28, 26, 24],
                        borderColor: '#dc3545',
                        backgroundColor: 'rgba(220, 53, 69, 0.1)',
                        borderWidth: 2,
                        pointBackgroundColor: '#dc3545',
                        pointRadius: 4,
                        tension: 0.4,
                        borderDash: [5, 5],
                        fill: false
                    },
                    {
                        label: 'Partia B',
                        data: [25, 26, 24, 22, 20, 18],
                        borderColor: '#6c757d',
                        backgroundColor: 'rgba(108, 117, 125, 0.1)',
                        borderWidth: 2,
                        pointBackgroundColor: '#6c757d',
                        pointRadius: 4,
                        tension: 0.4,
                        borderDash: [5, 5],
                        fill: false
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        labels: {
                            font: {
                                size: 14,
                                family: 'Poppins'
                            },
                            color: '#1a1a1a',
                            padding: 20
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            },
                            font: {
                                family: 'Poppins'
                            }
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        }
                    },
                    x: {
                        ticks: {
                            font: {
                                family: 'Poppins'
                            }
                        },
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    }
}

function initDashboardCharts() {
    // Wykres poparcia w dashboardzie
    const dashboardChartCanvas = document.getElementById('dashboardPollChart');
    if (dashboardChartCanvas && !dashboardPollChart) {
        dashboardPollChart = new Chart(dashboardChartCanvas, {
            type: 'line',
            data: {
                labels: ['Tydzień 1', 'Tydzień 2', 'Tydzień 3', 'Tydzień 4', 'Tydzień 5', 'Tydzień 6'],
                datasets: [
                    {
                        label: 'Poparcie (%)',
                        data: [42, 44, 46, 47, 48, 48],
                        borderColor: '#4facfe',
                        backgroundColor: 'rgba(79, 172, 254, 0.2)',
                        borderWidth: 3,
                        pointBackgroundColor: '#4facfe',
                        pointBorderColor: '#fff',
                        pointBorderWidth: 2,
                        pointRadius: 6,
                        tension: 0.4,
                        fill: true
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        labels: {
                            font: { family: 'Poppins' },
                            color: '#fff'
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            },
                            font: { family: 'Poppins' },
                            color: 'rgba(255, 255, 255, 0.7)'
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        }
                    },
                    x: {
                        ticks: {
                            font: { family: 'Poppins' },
                            color: 'rgba(255, 255, 255, 0.7)'
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        }
                    }
                }
            }
        });
    }

    // Wykres regionów
    const regionalChartCanvas = document.getElementById('regionalChart');
    if (regionalChartCanvas && !regionalChart) {
        regionalChart = new Chart(regionalChartCanvas, {
            type: 'doughnut',
            data: {
                labels: ['Mazowieckie', 'Śląskie', 'Wielkopolskie', 'Łódzkie', 'Inne'],
                datasets: [
                    {
                        data: [18, 15, 8, 5, 2],
                        backgroundColor: [
                            '#4facfe',
                            '#00f2fe',
                            '#43e97b',
                            '#38f9d7',
                            '#f093fb'
                        ],
                        borderColor: '#1a1a2e',
                        borderWidth: 2
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        labels: {
                            font: { family: 'Poppins' },
                            color: '#fff',
                            padding: 20
                        }
                    }
                }
            }
        });
    }
}

// ===== FORMULARZ KONTAKTOWY =====
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    contactForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Animacja wysyłania
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Wysyłanie...';
        submitBtn.disabled = true;

        // Symulacja wysyłania
        setTimeout(() => {
            submitBtn.textContent = 'Wysłano! ✓';
            submitBtn.style.background = 'linear-gradient(135deg, #27ae60, #2ecc71)';
            
            // Resetuj po 2s
            setTimeout(() => {
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.style.background = '';
            }, 2000);
        }, 1000);
    });
}

// ===== ANIMACJE SCROLL =====
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Dodaj animacje do różnych elementów
                if (entry.target.classList.contains('program-card')) {
                    entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                } else if (entry.target.classList.contains('gallery-item')) {
                    entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Obserwuj wszystkie karty programu i galerię
    document.querySelectorAll('.program-card, .gallery-item, .stat-card').forEach(el => {
        observer.observe(el);
    });
}

// ===== SMOOTH SCROLL =====
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && !href.includes('loginBtn')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// ===== BUTTON HOVERS =====
function initButtonHovers() {
    const buttons = document.querySelectorAll('.btn-primary, .social-icon, .program-card');
    
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// ===== PARALLAX EFFECT (bonus) =====
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const heroBackground = document.querySelector('.hero-background');
    
    if (heroBackground) {
        heroBackground.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    }
});

// ===== LICZNIKI ANIMOWANE =====
function animateCountUp(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current).toLocaleString();
    }, 16);
}

// Animuj liczniki gdy sekcja "about" jest widoczna
const observerStats = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
            entry.target.dataset.animated = 'true';
            
            // Animuj liczniki
            const stats = entry.target.querySelectorAll('.stat h4');
            stats.forEach(stat => {
                const text = stat.textContent;
                const number = parseInt(text);
                
                if (!isNaN(number)) {
                    animateCountUp(stat, number, 1500);
                }
            });
            
            observerStats.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const aboutSection = document.querySelector('.about-stats');
if (aboutSection) {
    observerStats.observe(aboutSection);
}

// ===== KONSOLA - EASTER EGG =====
console.log('%c🇵🇱 Mateusz Talar 2026', 'font-size: 24px; color: #001a4d; font-weight: bold;');
console.log('%cNowa przyszłość zaczyna się dziś', 'font-size: 18px; color: #dc3545; font-style: italic;');
console.log('%c', 'font-size: 1px; line-height: 0;');
console.log('Demo login: admin / admin');
