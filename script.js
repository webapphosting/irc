// IRC Chat Landing Page JavaScript
// Author: Professional Front-end Developer
// Description: Interactive functionality for the IRC Chat landing page

// Language translations
const translations = {
    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-features': 'Features',
        'nav-preview': 'Preview',
        'nav-download': 'Download',
        
        // Hero Section
        'hero-title-prefix': 'Connect Instantly with',
        'hero-title-highlight': 'IRC Chat',
        'hero-description': 'Experience the future of messaging with lightning-fast delivery, end-to-end encryption, and seamless communication across all your devices.',
        'hero-download-btn': 'Download Now',
        'hero-learn-more': 'Learn More',
        'hero-stat-downloads': 'Downloads',
        'hero-stat-rating': 'Rating',
        'hero-stat-countries': 'Countries',
        
        // Features Section
        'features-title': 'Why Choose IRC Chat?',
        'features-subtitle': 'Discover the features that make communication effortless and enjoyable',
        'feature-fast-title': 'Lightning Fast',
        'feature-fast-desc': 'Send and receive messages instantly with our optimized infrastructure. No more waiting for messages to deliver.',
        'feature-multilingual-title': 'Multilingual Support',
        'feature-multilingual-desc': 'Communicate in over 100 languages with real-time translation and localized interfaces worldwide.',
        'feature-encryption-title': 'End-to-End Encryption',
        'feature-encryption-desc': 'Your privacy matters. All messages are encrypted with military-grade security protocols.',
        'feature-themes-title': 'Beautiful Themes',
        'feature-themes-desc': 'Choose from dozens of themes including dark mode, custom colors, and seasonal designs.',
        'feature-groups-title': 'Group Chats',
        'feature-groups-desc': 'Create groups with up to 10,000 members. Perfect for communities, teams, and family groups.',
        'feature-sync-title': 'Cloud Sync',
        'feature-sync-desc': 'Access your chats from any device. Everything syncs seamlessly across phone, tablet, and desktop.',
        
        // Preview Section
        'preview-title': 'See IRC Chat in Action',
        'preview-subtitle': 'Experience the beautiful interface and smooth animations',
        'demo-contact-name': 'Sarah Wilson',
        'demo-status': 'Online',
        'demo-message-1': 'Hey! How\'s your day going? 😊',
        'demo-message-2': 'Amazing! Just downloaded IRC Chat',
        'demo-message-3': 'The interface is so clean! 🎉',
        'demo-team-name': 'Team Alpha',
        'demo-team-message': 'Great work on the project! 🎉',
        'demo-sarah-message': 'Thanks for the quick response',
        'demo-family-name': 'Family Group',
        'demo-family-message': 'Mom: Dinner is ready!',
        'demo-settings': 'Settings',
        'demo-profile': 'Profile',
        'demo-appearance': 'Appearance',
        'demo-privacy': 'Privacy & Security',
        'demo-notifications': 'Notifications',
        
        // Download Section
        'download-title': 'Ready to Start Chatting?',
        'download-subtitle': 'Join millions of users who trust IRC Chat for their daily communication needs',
        'download-btn-main': 'Download IRC Chat',
        'download-version': 'Version 2.1.0 • 45MB',
        'download-free': 'Free to download',
        'download-no-ads': 'No ads or premium features',
        'download-updates': 'Regular updates',
        'download-compatibility': 'Compatible with Android 6.0+ and iOS 12.0+',
        
        // Footer
        'footer-description': 'Connecting people around the world with fast, secure, and beautiful messaging.',
        'footer-product': 'Product',
        'footer-features': 'Features',
        'footer-security': 'Security',
        'footer-enterprise': 'Enterprise',
        'footer-api': 'API',
        'footer-support': 'Support',
        'footer-help': 'Help Center',
        'footer-contact': 'Contact Us',
        'footer-bugs': 'Bug Reports',
        'footer-status': 'Status',
        'footer-company': 'Company',
        'footer-about': 'About',
        'footer-blog': 'Blog',
        'footer-careers': 'Careers',
        'footer-press': 'Press',
        'footer-copyright': '© 2024 IRC Chat. All rights reserved.',
        'footer-privacy': 'Privacy Policy',
        'footer-terms': 'Terms of Service',
        'footer-cookies': 'Cookie Policy',
        
        // Download notifications
        'download-preparing': 'Preparing Download...',
        'download-started': 'Download Started!',
        'download-notification': 'Download started! Check your downloads folder.'
    },
    ar: {
        // Navigation
        'nav-home': 'الرئيسية',
        'nav-features': 'المميزات',
        'nav-preview': 'معاينة',
        'nav-download': 'تحميل',
        
        // Hero Section
        'hero-title-prefix': 'تواصل فورياً مع',
        'hero-title-highlight': ' IRC ',
        'hero-description': 'اختبر مستقبل المراسلة مع التوصيل السريع والتشفير الشامل والتواصل السلس عبر جميع أجهزتك.',
        'hero-download-btn': 'حمل الآن',
        'hero-learn-more': 'اعرف أكثر',
        'hero-stat-downloads': 'تحميل',
        'hero-stat-rating': 'تقييم',
        'hero-stat-countries': 'دولة',
        
        // Features Section
        'features-title': 'لماذا تختار واو شات؟',
        'features-subtitle': 'اكتشف المميزات التي تجعل التواصل سهلاً وممتعاً',
        'feature-fast-title': 'سرعة البرق',
        'feature-fast-desc': 'أرسل واستقبل الرسائل فورياً مع بنيتنا التحتية المحسنة. لا مزيد من انتظار توصيل الرسائل.',
        'feature-multilingual-title': 'دعم متعدد اللغات',
        'feature-multilingual-desc': 'تواصل بأكثر من 100 لغة مع الترجمة الفورية والواجهات المحلية في جميع أنحاء العالم.',
        'feature-encryption-title': 'التشفير الشامل',
        'feature-encryption-desc': 'خصوصيتك مهمة. جميع الرسائل مشفرة ببروتوكولات أمنية عسكرية.',
        'feature-themes-title': 'تصاميم جميلة',
        'feature-themes-desc': 'اختر من عشرات التصاميم بما في ذلك الوضع المظلم والألوان المخصصة والتصاميم الموسمية.',
        'feature-groups-title': 'الدردشات الجماعية',
        'feature-groups-desc': 'أنشئ مجموعات تضم حتى 10,000 عضو. مثالي للمجتمعات والفرق والمجموعات العائلية.',
        'feature-sync-title': 'المزامنة السحابية',
        'feature-sync-desc': 'الوصول إلى محادثاتك من أي جهاز. كل شيء يتزامن بسلاسة عبر الهاتف والجهاز اللوحي وسطح المكتب.',
        
        // Preview Section
        'preview-title': 'شاهد  في العمل',
        'preview-subtitle': 'اختبر الواجهة الجميلة والرسوم المتحركة السلسة',
        'demo-contact-name': 'سارة ويلسون',
        'demo-status': 'متصلة',
        'demo-message-1': 'مرحباً! كيف يسير يومك؟ 😊',
        'demo-message-2': 'رائع! لقد حملت للتو واو شات',
        'demo-message-3': 'الواجهة نظيفة جداً! 🎉',
        'demo-team-name': 'فريق ألفا',
        'demo-team-message': 'عمل رائع في المشروع! 🎉',
        'demo-sarah-message': 'شكراً للرد السريع',
        'demo-family-name': 'المجموعة العائلية',
        'demo-family-message': 'أمي: العشاء جاهز!',
        'demo-settings': 'الإعدادات',
        'demo-profile': 'الملف الشخصي',
        'demo-appearance': 'المظهر',
        'demo-privacy': 'الخصوصية والأمان',
        'demo-notifications': 'الإشعارات',
        
        // Download Section
        'download-title': 'جاهز لبدء الدردشة؟',
        'download-subtitle': 'انضم إلى الملايين من المستخدمين الذين يثقون في واو شات لاحتياجات التواصل اليومية',
        'download-btn-main': 'حمل واو شات',
        'download-version': 'الإصدار 2.1.0 • 45 ميجا',
        'download-free': 'مجاني للتحميل',
        'download-no-ads': 'بلا إعلانات أو ميزات مدفوعة',
        'download-updates': 'تحديثات منتظمة',
        'download-compatibility': 'متوافق مع أندرويد 6.0+ و iOS 12.0+',
        
        // Footer
        'footer-description': 'ربط الناس حول العالم بالمراسلة السريعة والآمنة والجميلة.',
        'footer-product': 'المنتج',
        'footer-features': 'المميزات',
        'footer-security': 'الأمان',
        'footer-enterprise': 'الشركات',
        'footer-api': 'واجهة البرمجة',
        'footer-support': 'الدعم',
        'footer-help': 'مركز المساعدة',
        'footer-contact': 'اتصل بنا',
        'footer-bugs': 'تقارير الأخطاء',
        'footer-status': 'الحالة',
        'footer-company': 'الشركة',
        'footer-about': 'حول',
        'footer-blog': 'المدونة',
        'footer-careers': 'الوظائف',
        'footer-press': 'الصحافة',
        'footer-copyright': '© 2024 واو شات. جميع الحقوق محفوظة.',
        'footer-privacy': 'سياسة الخصوصية',
        'footer-terms': 'شروط الخدمة',
        'footer-cookies': 'سياسة ملفات تعريف الارتباط',
        
        // Download notifications
        'download-preparing': 'جاري تحضير التحميل...',
        'download-started': 'بدأ التحميل!',
        'download-notification': 'بدأ التحميل! تحقق من مجلد التحميلات.'
    }
};

// Current language state
let currentLanguage = localStorage.getItem('language') || 'en';

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initLanguageSupport();
    initThemeToggle();
    initSmoothScrolling();
    initScrollAnimations();
    initDownloadButtons();
    initMobileMenu();
    initHeaderEffects();
    initTypingAnimation();
    initParallaxEffects();
});

// Language Support Functions
function initLanguageSupport() {
    // Apply saved language on page load
    applyLanguage(currentLanguage);
    
    // Create language toggle button
    createLanguageToggle();
    
    // Update page direction and font based on language
    updatePageDirection(currentLanguage);
}

function createLanguageToggle() {
    const themeToggle = document.querySelector('.theme-toggle');
    
    // Create language toggle button
    const languageToggle = document.createElement('div');
    languageToggle.className = 'language-toggle';
    languageToggle.innerHTML = `
        <button id="language-toggle" class="language-btn">
            <span class="flag-icon">${currentLanguage === 'ar' ? '🇸🇦' : '🇺🇸'}</span>
            <span class="lang-text">${currentLanguage === 'ar' ? 'عربي' : 'EN'}</span>
        </button>
    `;
    
    // Insert before theme toggle
    themeToggle.parentNode.insertBefore(languageToggle, themeToggle);
    
    // Add event listener
    const langBtn = document.getElementById('language-toggle');
    langBtn.addEventListener('click', toggleLanguage);
}

function toggleLanguage() {
    const newLanguage = currentLanguage === 'en' ? 'ar' : 'en';
    switchLanguage(newLanguage);
}

function switchLanguage(language) {
    currentLanguage = language;
    localStorage.setItem('language', language);
    
    // Update language toggle button
    updateLanguageButton();
    
    // Apply translations
    applyLanguage(language);
    
    // Update page direction
    updatePageDirection(language);
    
    // Add smooth transition
    document.body.style.transition = 'all 0.3s ease';
    setTimeout(() => {
        document.body.style.transition = '';
    }, 300);
}

function updateLanguageButton() {
    const flagIcon = document.querySelector('.flag-icon');
    const langText = document.querySelector('.lang-text');
    
    if (flagIcon && langText) {
        flagIcon.textContent = currentLanguage === 'ar' ? '🇸🇦' : '🇺🇸';
        langText.textContent = currentLanguage === 'ar' ? 'عربي' : 'EN';
    }
}

function applyLanguage(language) {
    const elements = document.querySelectorAll('[data-translate]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[language] && translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });
    
    // Handle special cases for HTML content
    updateSpecialContent(language);
}

function updateSpecialContent(language) {
    // Update hero title with highlighting
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const prefix = translations[language]['hero-title-prefix'];
        const highlight = translations[language]['hero-title-highlight'];
        heroTitle.innerHTML = `${prefix} <span class="highlight">${highlight}</span>`;
    }
    
    // Update download button with version info
    const downloadBtn = document.querySelector('#main-download-btn span');
    if (downloadBtn) {
        const mainText = translations[language]['download-btn-main'];
        const version = translations[language]['download-version'];
        downloadBtn.innerHTML = `<strong>${mainText}</strong><small>${version}</small>`;
    }
    
    // Update demo chat messages
    updateDemoMessages(language);
}

function updateDemoMessages(language) {
    // Update chat interface messages
    const contactName = document.querySelector('.contact-name');
    const status = document.querySelector('.status');
    const messages = document.querySelectorAll('.message span');
    
    if (contactName) contactName.textContent = translations[language]['demo-contact-name'];
    if (status) status.textContent = translations[language]['demo-status'];
    
    if (messages.length >= 3) {
        messages[0].textContent = translations[language]['demo-message-1'];
        messages[1].textContent = translations[language]['demo-message-2'];
        messages[2].textContent = translations[language]['demo-message-3'];
    }
    
    // Update demo chat list
    const demoNames = document.querySelectorAll('.demo-name');
    const demoMessages = document.querySelectorAll('.demo-message');
    
    if (demoNames.length >= 3 && demoMessages.length >= 3) {
        demoNames[0].textContent = translations[language]['demo-team-name'];
        demoMessages[0].textContent = translations[language]['demo-team-message'];
        
        demoNames[1].textContent = translations[language]['demo-contact-name'];
        demoMessages[1].textContent = translations[language]['demo-sarah-message'];
        
        demoNames[2].textContent = translations[language]['demo-family-name'];
        demoMessages[2].textContent = translations[language]['demo-family-message'];
    }
    
    // Update settings demo
    const settingsHeader = document.querySelector('.demo-settings .demo-header span');
    if (settingsHeader) {
        settingsHeader.textContent = translations[language]['demo-settings'];
    }
    
    const settingsOptions = document.querySelectorAll('.demo-option span');
    if (settingsOptions.length >= 4) {
        settingsOptions[0].textContent = translations[language]['demo-profile'];
        settingsOptions[1].textContent = translations[language]['demo-appearance'];
        settingsOptions[2].textContent = translations[language]['demo-privacy'];
        settingsOptions[3].textContent = translations[language]['demo-notifications'];
    }
}

function updatePageDirection(language) {
    const html = document.documentElement;
    const body = document.body;
    
    if (language === 'ar') {
        html.setAttribute('dir', 'rtl');
        html.setAttribute('lang', 'ar');
        body.classList.add('rtl');
        body.classList.remove('ltr');
    } else {
        html.setAttribute('dir', 'ltr');
        html.setAttribute('lang', 'en');
        body.classList.add('ltr');
        body.classList.remove('rtl');
    }
}
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon(themeIcon, currentTheme);
    
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        // Add transition class for smooth theme change
        document.body.style.transition = 'all 0.3s ease';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(themeIcon, newTheme);
        
        // Remove transition after animation completes
        setTimeout(() => {
            document.body.style.transition = '';
        }, 300);
    });
}

function updateThemeIcon(icon, theme) {
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// Smooth Scrolling
function initSmoothScrolling() {
    // Handle navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const sectionTop = section.offsetTop - headerHeight - 20;
        
        window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
        });
    }
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                // Add staggered animation for feature cards
                if (entry.target.classList.contains('features-grid')) {
                    animateFeatureCards();
                }
                
                // Add typing animation for hero title
                if (entry.target.classList.contains('hero-title')) {
                    startTypingAnimation();
                }
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.feature-card, .section-header, .hero-content, .phone-demo').forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
    
    // Observe special sections
    const featuresGrid = document.querySelector('.features-grid');
    const heroTitle = document.querySelector('.hero-title');
    
    if (featuresGrid) observer.observe(featuresGrid);
    if (heroTitle) observer.observe(heroTitle);
}

function animateFeatureCards() {
    const cards = document.querySelectorAll('.feature-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.animation = `fadeInUp 0.6s ease forwards`;
            card.style.animationDelay = `${index * 0.1}s`;
        }, index * 100);
    });
}

// Download Button Functionality
function initDownloadButtons() {
    const downloadButtons = document.querySelectorAll('#download-btn, #main-download-btn');
    
    downloadButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            handleDownload(this);
        });
    });
}

function handleDownload(button) {
    // Add loading state
    const originalText = button.innerHTML;
    const preparingText = translations[currentLanguage]['download-preparing'];
    const startedText = translations[currentLanguage]['download-started'];
    
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> ' + preparingText;
    button.disabled = true;
    
    // Simulate download preparation (in real app, this would be actual file handling)
    setTimeout(() => {
        // Create and trigger download
        triggerDownload();
        
        // Show success state
        button.innerHTML = '<i class="fas fa-check"></i> ' + startedText;
        
        // Reset button after delay
        setTimeout(() => {
            button.innerHTML = originalText;
            button.disabled = false;
        }, 3000);
    }, 1500);
}

function triggerDownload() {
    // Create a download link for the app file
    const link = document.createElement('a');
    link.href = 'IRC.apk'; // This should be replaced with actual app file
    link.download = 'IRCchat-v2.1.0.apk';
    link.style.display = 'none';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Show download notification
    showDownloadNotification();
}

function showDownloadNotification() {
    // Create notification element
    const notification = document.createElement('div');
    const notificationText = translations[currentLanguage]['download-notification'];
    
    notification.className = 'download-notification';
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-download"></i>
            <span>${notificationText}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add notification styles with RTL support
    const isRTL = currentLanguage === 'ar';
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        ${isRTL ? 'left' : 'right'}: 20px;
        background: var(--primary-color);
        color: white;
        padding: 1rem;
        border-radius: 12px;
        box-shadow: var(--shadow-large);
        z-index: 10000;
        transform: translateX(${isRTL ? '-400px' : '400px'});
        transition: transform 0.3s ease;
        max-width: 350px;
        direction: ${isRTL ? 'rtl' : 'ltr'};
    `;
    
    const notificationContent = notification.querySelector('.notification-content');
    notificationContent.style.cssText = `
        display: flex;
        align-items: center;
        gap: 0.75rem;
        ${isRTL ? 'flex-direction: row-reverse;' : ''}
    `;
    
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        ${isRTL ? 'margin-right: auto;' : 'margin-left: auto;'}
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Handle close button
    closeBtn.addEventListener('click', () => {
        removeNotification(notification);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        removeNotification(notification);
    }, 5000);
}

function removeNotification(notification) {
    if (notification && notification.parentNode) {
        const isRTL = currentLanguage === 'ar';
        notification.style.transform = `translateX(${isRTL ? '-400px' : '400px'})`;
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }
}

// Mobile Menu
function initMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('mobile-active');
            this.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('mobile-active');
                mobileToggle.classList.remove('active');
            }
        });
    }
}

// Header Effects
function initHeaderEffects() {
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;
        
        // Add/remove scrolled class for styling
        if (currentScrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Hide/show header on scroll
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
    });
}

// Typing Animation
let typingAnimationStarted = false;

function initTypingAnimation() {
    // This will be called when the hero title comes into view
}

function startTypingAnimation() {
    if (typingAnimationStarted) return;
    typingAnimationStarted = true;
    
    const titleElement = document.querySelector('.hero-title');
    const originalText = titleElement.innerHTML;
    const textWithoutSpan = titleElement.textContent;
    
    titleElement.innerHTML = '';
    titleElement.style.borderRight = '2px solid var(--primary-color)';
    
    let charIndex = 0;
    let isInSpan = false;
    let spanContent = '';
    let currentHTML = '';
    
    function typeCharacter() {
        if (charIndex < originalText.length) {
            const char = originalText[charIndex];
            
            if (char === '<') {
                isInSpan = true;
                spanContent = '<';
            } else if (char === '>') {
                isInSpan = false;
                spanContent += '>';
                currentHTML += spanContent;
                spanContent = '';
            } else if (isInSpan) {
                spanContent += char;
            } else {
                currentHTML += char;
            }
            
            if (!isInSpan || char === '>') {
                titleElement.innerHTML = currentHTML + '<span class="cursor">|</span>';
            }
            
            charIndex++;
            setTimeout(typeCharacter, 50);
        } else {
            // Remove cursor after typing is complete
            setTimeout(() => {
                titleElement.style.borderRight = 'none';
                const cursor = titleElement.querySelector('.cursor');
                if (cursor) cursor.remove();
            }, 1000);
        }
    }
    
    typeCharacter();
}

// Parallax Effects
function initParallaxEffects() {
    const phoneElements = document.querySelectorAll('.phone-mockup, .phone-demo');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        phoneElements.forEach(phone => {
            const rect = phone.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                phone.style.transform = `translateY(${rate * 0.1}px) rotateY(${rate * 0.02}deg)`;
            }
        });
    });
}

// Chat Interface Animation
function animateChatMessages() {
    const messages = document.querySelectorAll('.message');
    messages.forEach((message, index) => {
        message.style.animationDelay = `${index * 0.5}s`;
        message.classList.add('animate');
    });
}

// Button Ripple Effect
function addRippleEffect() {
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-download');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Add ripple animation CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }
    
    .cursor {
        animation: blink 1s infinite;
    }
    
    @keyframes blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
    }
    
    .mobile-menu-toggle.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    
    .mobile-menu-toggle.active span:nth-child(2) {
        opacity: 0;
    }
    
    .mobile-menu-toggle.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }
    
    .nav-menu.mobile-active {
        display: flex;
        position: fixed;
        top: 70px;
        left: 0;
        right: 0;
        background: var(--background-primary);
        flex-direction: column;
        padding: 2rem;
        box-shadow: var(--shadow-large);
        z-index: 999;
    }
    
    .header.scrolled {
        background: rgba(255, 255, 255, 0.98);
        backdrop-filter: blur(20px);
    }
    
    [data-theme="dark"] .header.scrolled {
        background: rgba(17, 24, 39, 0.98);
    }
    
    /* Language Toggle Styles */
    .language-toggle {
        display: flex;
        align-items: center;
        margin-right: 1rem;
    }
    
    .language-btn {
        background: none;
        border: 2px solid var(--border-color);
        border-radius: 8px;
        padding: 0.5rem 1rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        cursor: pointer;
        transition: all 0.3s ease;
        color: var(--text-primary);
        font-weight: 500;
    }
    
    .language-btn:hover {
        border-color: var(--primary-color);
        background: var(--background-secondary);
    }
    
    .flag-icon {
        font-size: 1.2rem;
    }
    
    .lang-text {
        font-size: 0.875rem;
        font-weight: 600;
    }
    
    /* RTL Support */
    .rtl {
        direction: rtl;
    }
    
    .rtl .nav-container {
        flex-direction: row-reverse;
    }
    
    .rtl .nav-menu {
        flex-direction: row-reverse;
    }
    
    .rtl .nav-logo {
        flex-direction: row-reverse;
    }
    
    .rtl .hero-container {
        direction: rtl;
    }
    
    .rtl .hero-buttons {
        flex-direction: row-reverse;
    }
    
    .rtl .hero-stats {
        flex-direction: row-reverse;
    }
    
    .rtl .message.sent {
        align-self: flex-start;
        align-items: flex-start;
    }
    
    .rtl .message.received {
        align-self: flex-end;
        align-items: flex-end;
    }
    
    .rtl .chat-header {
        flex-direction: row-reverse;
    }
    
    .rtl .demo-chat-item {
        flex-direction: row-reverse;
    }
    
    .rtl .demo-option {
        flex-direction: row-reverse;
    }
    
    .rtl .download-info {
        flex-direction: row-reverse;
    }
    
    .rtl .info-item {
        flex-direction: row-reverse;
    }
    
    .rtl .footer-content {
        direction: rtl;
    }
    
    .rtl .footer-bottom {
        flex-direction: row-reverse;
    }
    
    .rtl .footer-links {
        flex-direction: row-reverse;
    }
    
    .rtl .social-links {
        flex-direction: row-reverse;
    }
    
    .rtl .language-toggle {
        margin-right: 0;
        margin-left: 1rem;
    }
    
    /* Arabic Font Support */
    [lang="ar"] {
        font-family: 'Tajawal', 'Noto Sans Arabic', 'Arial', sans-serif;
    }
    
    [lang="ar"] h1, [lang="ar"] h2, [lang="ar"] h3, [lang="ar"] h4, [lang="ar"] h5, [lang="ar"] h6 {
        font-weight: 700;
    }
    
    [lang="ar"] .hero-title {
        font-size: 3rem;
        line-height: 1.3;
    }
    
    [lang="ar"] .nav-link::after {
        right: 0;
        left: auto;
    }
    
    /* Arabic specific adjustments */
    @media (max-width: 768px) {
        .rtl .hero-buttons {
            flex-direction: column;
            align-items: center;
        }
        
        .rtl .nav-menu.mobile-active {
            text-align: right;
        }
    }
`;
document.head.appendChild(style);

// Add Arabic font support
const arabicFontLink = document.createElement('link');
arabicFontLink.href = 'https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700&display=swap';
arabicFontLink.rel = 'stylesheet';
document.head.appendChild(arabicFontLink);

// Initialize ripple effect
addRippleEffect();

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(function() {
    // Additional scroll-based animations can be added here
}, 16)); // ~60fps

// Easter egg: Konami code
let konamiCode = [];
const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.keyCode);
    
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        activateEasterEgg();
        konamiCode = [];
    }
});

function activateEasterEgg() {
    const chatMessages = document.querySelectorAll('.message span');
    chatMessages.forEach(message => {
        message.textContent = '🎉 You found the easter egg! 🎉';
    });
    
    // Add confetti effect
    createConfetti();
}

function createConfetti() {
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
            background: ${['#6366f1', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'][Math.floor(Math.random() * 5)]};
            left: ${Math.random() * 100}vw;
            top: -10px;
            z-index: 10000;
            animation: fall ${Math.random() * 3 + 2}s linear forwards;
        `;
        
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            if (confetti.parentNode) {
                confetti.parentNode.removeChild(confetti);
            }
        }, 5000);
    }
}

// Add fall animation for confetti
const confettiStyle = document.createElement('style');
confettiStyle.textContent = `
    @keyframes fall {
        0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(confettiStyle);

// Console message for developers
console.log(`
🎉 Welcome to IRC Chat Landing Page!
👨‍💻 Built with modern web technologies
🎨 Features responsive design and smooth animations
💡 Try the Konami code for a surprise!
📱 Download functionality ready for your app file

Happy coding! 🚀

`);
