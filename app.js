// Wait for DOM to be loaded
document.addEventListener('DOMContentLoaded', () => {
    try {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                try {
                    e.preventDefault();

                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);

                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop,
                            behavior: 'smooth'
                        });
                    }
                } catch (error) {
                    console.error('Error in smooth scrolling:', error);
                }
            });
        });

        const handleScroll = () => {
            try {
                const scrollPosition = window.scrollY;
                const sections = document.querySelectorAll('section');

                sections.forEach(section => {
                    const sectionTop = section.offsetTop - 100;
                    const sectionHeight = section.offsetHeight;
                    const sectionId = section.getAttribute('id');

                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        document.querySelectorAll('nav ul li a').forEach(link => {
                            link.classList.remove('active');
                            if (link.getAttribute('href') === `#${sectionId}`) {
                                link.classList.add('active');
                            }
                        });
                    }
                });
            } catch (error) {
                console.error('Error in scroll handler:', error);
            }
        };

        window.addEventListener('scroll', handleScroll);

        setTimeout(handleScroll, 100);

        const animateOnScroll = () => {
            try {
                // service cards
                document.querySelectorAll('.service-card').forEach(element => {
                    const elementPosition = element.getBoundingClientRect().top;
                    const screenPosition = window.innerHeight / 1.3;

                    if (elementPosition < screenPosition) {
                        element.classList.add('animate');
                    }
                });

                const animateElements = document.querySelectorAll('.skill-item, .portfolio-item, .interest-item, .education-item');

                animateElements.forEach(element => {
                    const elementPosition = element.getBoundingClientRect().top;
                    const screenPosition = window.innerHeight / 1.1;

                    if (elementPosition < screenPosition) {
                        element.classList.add('animate');
                    }
                });
            } catch (error) {
                console.error('Error in animation handler:', error);
            }
        };

        window.addEventListener('scroll', animateOnScroll);

        setTimeout(animateOnScroll, 500);

        // Form submission 
        const contactForm = document.getElementById('contactForm');

        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                try {
                    e.preventDefault();

                    // Getting form data
                    const formData = {
                        name: document.getElementById('name').value,
                        email: document.getElementById('email').value,
                        subject: document.getElementById('subject').value,
                        message: document.getElementById('message').value
                    };

                    // fields validation
                    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
                        alert('Please fill in all fields');
                        return;
                    }

                    // Email validation
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(formData.email)) {
                        alert('Please enter a valid email address');
                        return;
                    }

                

                    const originalText = submitButton.textContent;

                    //loading state
                    submitButton.textContent = 'Sending...';
                    submitButton.disabled = true;

                    // API call
                    setTimeout(() => {
                        //  success message
                        alert(`Thank you ${formData.name}! Your message has been sent successfully.`);

                        contactForm.reset();

                        submitButton.textContent = originalText;
                        submitButton.disabled = false;
                    }, 1500);
                } catch (error) {
                    console.error('Error in form submission:', error);
                    alert('An error occurred. Please try again later.');
                }
            });
        }

        const animateProgressBars = () => {
            try {
                const progressBars = document.querySelectorAll('.progress-bar');

                progressBars.forEach(bar => {
                    const width = bar.style.width || bar.getAttribute('style')?.match(/width:\s*([^;]+)/)?.[1] || '0%';
                    bar.style.width = '0';

                    setTimeout(() => {
                        bar.style.transition = 'width 1s ease';
                        bar.style.width = width;
                    }, 100);
                });
            } catch (error) {
                console.error('Error animating progress bars:', error);
            }
        };

        setTimeout(animateProgressBars, 500);

        const createMobileNav = () => {
            try {
                const header = document.querySelector('header');
                const nav = document.querySelector('nav');

                if (!header || !nav) return;

                if (window.innerWidth <= 768 && !document.querySelector('.mobile-nav-toggle')) {
                    const mobileNavToggle = document.createElement('button');
                    mobileNavToggle.className = 'mobile-nav-toggle';
                    mobileNavToggle.innerHTML = '<i class="fas fa-bars"></i>';

                    header.insertBefore(mobileNavToggle, nav);

                    mobileNavToggle.addEventListener('click', () => {
                        nav.classList.toggle('active');
                        mobileNavToggle.innerHTML = nav.classList.contains('active')
                            ? '<i class="fas fa-times"></i>'
                            : '<i class="fas fa-bars"></i>';
                    });

                    document.querySelectorAll('nav ul li a').forEach(link => {
                        link.addEventListener('click', () => {
                            nav.classList.remove('active');
                            mobileNavToggle.innerHTML = '<i class="fas fa-bars"></i>';
                        });
                    });
                }
            } catch (error) {
                console.error('Error creating mobile nav:', error);
            }
        };

        createMobileNav();

        window.addEventListener('resize', createMobileNav);



        forceSafariRepaint();

    } catch (error) {
        console.error('Error initializing the application:', error);
    }
});

// pop up for view projects
function showPopup() {
    const popupOverlay = document.createElement('div');
    popupOverlay.className = 'popup-overlay';

    const popupContent = document.createElement('div');
    popupContent.className = 'popup-content';
    popupContent.innerHTML = `
        <h3>These are private projects, contact the admin for access or collaboration</h3>
        <button class="popup-button" onclick="closePopup()">Close</button>
    `;

    popupOverlay.appendChild(popupContent);
    document.body.appendChild(popupOverlay);

    popupOverlay.style.display = 'flex';
}

function closePopup() {
    const popupOverlay = document.querySelector('.popup-overlay');
    if (popupOverlay) {
        popupOverlay.remove();
    }
}

// email receiving on emailjs
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    emailjs.init("RB2UvzZlrh2AgOF_h");
    let templateParams = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_c8jm03e", "RB2UvzZlrh2AgOF_h", templateParams)
        .then(response => {
            alert("Message sent successfully!");
            document.getElementById("contactForm").reset(); // Clear form after success
        })
        .catch(error => {
            alert("Failed to send message. Please try again.");
        });
});
