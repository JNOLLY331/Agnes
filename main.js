        //JavaScript for Mobile Menu Toggle and Animation -->

        document.addEventListener('DOMContentLoaded', () => {
            const menuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');
            const menuIcon = document.getElementById('menu-icon');
            const navLinks = mobileMenu.querySelectorAll('a');
            
            // Toggle menu visibility and change icon
            if (menuButton) {
                menuButton.addEventListener('click', () => {
                    mobileMenu.classList.toggle('open');
                    if (mobileMenu.classList.contains('open')) {
                        menuIcon.classList.replace('fa-bars', 'fa-times'); // Change to X icon
                        menuButton.setAttribute('aria-expanded', 'true');
                    } else {
                        menuIcon.classList.replace('fa-times', 'fa-bars'); // Change back to Hamburger
                        menuButton.setAttribute('aria-expanded', 'false');
                    }
                });
            }

            // Close menu when a link is clicked
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    // Slight delay to allow smooth scrolling before closing
                    setTimeout(() => {
                        mobileMenu.classList.remove('open');
                        menuIcon.classList.replace('fa-times', 'fa-bars');
                        menuButton.setAttribute('aria-expanded', 'false');
                    }, 300);
                });
            });
        });