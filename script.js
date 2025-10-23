let intro = document.querySelector('.intro');
let logoSpan = document.querySelectorAll('.logos');


function animateBird() {
    const bird = document.querySelector('.bird');

    // Reset position
    bird.style.transform = 'translate(0, 0) scale(1) rotate(0deg)';

    // Step 1: Take off
    setTimeout(() => {
        bird.style.transition = 'transform 1.5s ease-in-out';
        bird.style.transform = 'translate(100px, -80px) scale(0.8) rotate(-20deg)';
    }, 1000);

    // Step 2: Land
    setTimeout(() => {
        bird.style.transition = 'transform 1.2s ease-in-out';
        bird.style.transform = 'translate(-50px, -100px) scale(0.6) rotate(0deg)';
    }, 2500);
}

// Wait until splash screen disappears
window.addEventListener('load', () => {
    const splash = document.querySelector('.splash'); // adjust selector to match yours

    if (splash) {
        // Check every 100ms if splash is hidden
        const checkSplash = setInterval(() => {
            if (splash.style.display === 'none' || splash.classList.contains('hidden')) {
                clearInterval(checkSplash);
                animateBird(); // Start animation once splash is gone
            }
        }, 100);
    } else {
        // If there's no splash, just run it immediately
        animateBird();
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible'); // Reset when out of view
        }
      });
    }, {
      threshold: 0.1
    });
  
    const animatedElements = document.querySelectorAll('.fade-in, .fade-left, .fade-right');
    animatedElements.forEach(el => observer.observe(el));
  });

// Scroll observer for staggered skill animations
document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible'); // Optional: Reset when out of view
        }
      });
    }, {
      threshold: 0.1
    });
  
    const animatedElements = document.querySelectorAll('.fade-in, .fade-left, .fade-right, .fade-up');
    animatedElements.forEach(el => observer.observe(el));
  });

  function animateWords(containerSelector) {
    const paragraphs = document.querySelectorAll(containerSelector);

    paragraphs.forEach(para => {
        const words = para.querySelectorAll('span');
        words.forEach((word, index) => {
            word.classList.remove('word-highlight'); // reset

            setTimeout(() => {
                word.classList.add('word-highlight');
                setTimeout(() => {
                    word.classList.remove('word-highlight');
                }, 400);
            }, index * 70);
        });
    });
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateWords(`#experience .experience-item p`);
        }
    });
}, { threshold: 0.5 });

const expSection = document.querySelector('#experience');
if (expSection) observer.observe(expSection);



window.addEventListener('DOMContentLoaded', () => {

    setTimeout(() => {
        // Activate logo animation
        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 400); // Stagger the animation by 400ms
        });

        // Fade out the logo after 2 seconds
        setTimeout(() => {
            logoSpan.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50); // Faster fade out timing
            });
        }, 2000);

        // Move the intro out of view after fading the logo
        setTimeout(() => {
            intro.style.top = '-100vh'; // Moves the intro div off-screen
        }, 2500); // Slightly increased timeout for smoother transition
    });
});



// Function to change navbar background on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {  // Change to desired scroll threshold
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Function to highlight the active section in navbar
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 60) {  // Adjust the offset as per your navbar height
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

// Back to Top Button
const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { // Adjust this value to when you want the button to appear
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

