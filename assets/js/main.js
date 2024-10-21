document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Highlight Active Section on Scroll (Basic Intersection Observer Example)
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === entry.target.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, 
    {
        threshold: 0.6
    }
);

sections.forEach(section => {
    observer.observe(section);
});

// Example Dynamic Content Loading (could be used for adding locations dynamically)
const addLocation = (name, imgSrc, link) => {
    const locationsSection = document.querySelector('.locations');
    const locationCard = document.createElement('div');
    locationCard.classList.add('location-card');

    const locationLink = document.createElement('a');
    locationLink.href = link;
    locationLink.target = '_blank';

    const locationImg = document.createElement('img');
    locationImg.src = imgSrc;
    locationImg.alt = name;

    const locationTitle = document.createElement('h3');
    locationTitle.textContent = name;

    locationLink.appendChild(locationImg);
    locationLink.appendChild(locationTitle);
    locationCard.appendChild(locationLink);

    locationsSection.appendChild(locationCard);
};