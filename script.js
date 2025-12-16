/**
 * LE KIOSQUE - SCRIPT.JS
 * Pizzeria Chelles - 50 rue Gambetta, 77500
 * Gestion de la navigation et interactions
 */

// Navigation entre sections
function showSection(sectionId) {
    // Masquer toutes les sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Masquer le menu principal
    const mainMenu = document.getElementById('main-menu');
    if (mainMenu) {
        mainMenu.style.display = 'none';
    }

    // Afficher la section demandée
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }

    // Scroll smooth vers le haut
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    // Enregistrer dans l'historique (optionnel)
    if (history.pushState) {
        history.pushState(null, null, '#' + sectionId);
    }
}

// Retour au menu principal
function showMainMenu() {
    // Masquer toutes les sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Afficher le menu principal
    const mainMenu = document.getElementById('main-menu');
    if (mainMenu) {
        mainMenu.style.display = 'block';
    }

    // Scroll smooth vers le haut
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    // Retirer le hash de l'URL
    if (history.pushState) {
        history.pushState(null, null, window.location.pathname);
    }
}

// Gestion du bouton retour navigateur
window.addEventListener('popstate', function() {
    const hash = window.location.hash.substring(1);
    if (hash && document.getElementById(hash)) {
        showSection(hash);
    } else {
        showMainMenu();
    }
});

// Lazy loading des images (amélioration performance)
document.addEventListener('DOMContentLoaded', function() {
    // Observer pour lazy loading
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        observer.unobserve(img);
                    }
                }
            });
        });

        // Observer toutes les images avec data-src
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }

    // Si hash dans URL au chargement, afficher la bonne section
    const hash = window.location.hash.substring(1);
    if (hash && document.getElementById(hash)) {
        showSection(hash);
    }

    // Améliorer accessibilité clavier sur cards
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        // Rendre les cards focusables
        card.setAttribute('tabindex', '0');
        
        // Permettre activation avec Enter ou Space
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });

    // Track clicks téléphone pour analytics (optionnel)
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    phoneLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Tracking Google Analytics si disponible
            if (typeof gtag !== 'undefined') {
                gtag('event', 'click', {
                    'event_category': 'Contact',
                    'event_label': 'Phone Click',
                    'value': 1
                });
            }
            console.log('Appel téléphonique initié');
        });
    });

    // Améliorer UX: afficher un message si offline
    if (!navigator.onLine) {
        console.warn('Mode hors ligne détecté');
    }

    window.addEventListener('online', function() {
        console.log('Connexion rétablie');
    });

    window.addEventListener('offline', function() {
        console.warn('Connexion perdue');
    });
});

// Service Worker (PWA - optionnel)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js').then(
            function(registration) {
                console.log('Service Worker enregistré:', registration.scope);
            },
            function(err) {
                console.log('Service Worker échec:', err);
            }
        );
    });
}

// Fonction utilitaire: smooth scroll pour ancres
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
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

// Export pour tests (si nécessaire)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        showSection,
        showMainMenu
    };
}
