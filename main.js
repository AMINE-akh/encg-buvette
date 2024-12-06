//Select element function

const selectElement = function (element) {
    return document.querySelector(element);
};


let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');



menuToggler.addEventListener('click', function () {
    body.classList.toggle('open');
});

// above is for the  hanburger menu to function and respond




// scroll reveal
window.sr = ScrollReveal();


sr.reveal('.animate-left', {
origin: 'left',
duration: 1000,
distance: '25rem',
delay: 300
});


sr.reveal('.animate-right', {
    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 600
    });


sr.reveal('.animate-top', {
        origin: 'top',
        duration: 1000,
        distance: '25rem',
        delay: 600
        });

sr.reveal('.animate-bottom', {
            origin: 'bottom',
            duration: 1000,
            distance: '25rem',
            delay: 600
            });



// ::::::::::::::::::::::::::
document.addEventListener('DOMContentLoaded', function() {
    const sectionTitle = document.querySelector('.section-title');
    const animatedTexts = document.querySelectorAll('.animated-text');
    
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScroll() {
        if (isElementInViewport(sectionTitle) && !sectionTitle.classList.contains('visible')) {
            sectionTitle.classList.add('visible');
        }

        animatedTexts.forEach((text, index) => {
            if (isElementInViewport(text) && !text.classList.contains('visible')) {
                setTimeout(() => {
                    text.classList.add('visible');
                }, index * 200);
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check on page load

    // Add hover effect for feature items
    const featureItems = document.querySelectorAll('.feature-item');
    featureItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-10px) scale(1.05)';
        });
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0) scale(1)';
        });
    });
});
// ::::::::::::::::::::::::::::::::::::::::
document.addEventListener('DOMContentLoaded', function() {
    const categoryFilter = document.getElementById('category-filter');
    const menuItems = document.querySelectorAll('.menu-item');

    categoryFilter.addEventListener('change', function() {
        const selectedCategory = this.value;

        menuItems.forEach(item => {
            if (selectedCategory === 'all' || item.dataset.category === selectedCategory) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::

        document.addEventListener('DOMContentLoaded', function() {
            const categoryFilter = document.getElementById('category-filter');
            const menuItems = document.querySelectorAll('.menu-item');

            function filterItems(category) {
                menuItems.forEach(item => {
                    if (category === 'all' || item.dataset.category === category) {
                        item.classList.remove('hidden');
                        setTimeout(() => {
                            item.classList.add('fade-in');
                        }, 50);
                    } else {
                        item.classList.add('hidden');
                        item.classList.remove('fade-in');
                    }
                });
            }

            categoryFilter.addEventListener('change', function() {
                const selectedCategory = this.value;
                filterItems(selectedCategory);
            });

            // Initial animation
            menuItems.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add('fade-in');
                }, index * 100);
            });
        });