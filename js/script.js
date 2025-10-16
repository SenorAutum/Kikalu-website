document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
// ========================================
// COOKIE CONSENT BANNER LOGIC
// ========================================
document.addEventListener('DOMContentLoaded', function() {

    const cookieBanner = document.getElementById('cookie-consent-banner');
    const acceptBtn = document.getElementById('cookie-accept');
    const declineBtn = document.getElementById('cookie-decline');

    // Function to set a cookie
    function setCookie(name, value, days) {
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    // Function to get a cookie
    function getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for(let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    // Check if consent has already been given
    if (!getCookie('kikalu_cookie_consent')) {
        // If no cookie, show the banner after a short delay
        setTimeout(() => {
            cookieBanner.classList.add('active');
        }, 500);
    }

    // Event listener for the Accept button
    acceptBtn.addEventListener('click', () => {
        setCookie('kikalu_cookie_consent', 'accepted', 365);
        cookieBanner.classList.remove('active');
    });
    
    // Event listener for the Decline button
    declineBtn.addEventListener('click', () => {
        setCookie('kikalu_cookie_consent', 'declined', 365);
        cookieBanner.classList.remove('active');
    });
});