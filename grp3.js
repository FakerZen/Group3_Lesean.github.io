const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});



const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

const faders = document.querySelectorAll('.fade-in')

import "https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js"

const scrollTracker = document.querySelector('.scroll-tracker');

const scrollTrackingTimeline = new ScrollTimeline({
    source: document.scrollingElement,
    orientation: block,
    scrollOffsets: [CSS.percent(0), CSS.percent(100)]
});

scrollTracker.animate(
    {
        transform: ['scaleX(0)', 'scaleX(1)']
    },
    {
        duration: 1,
        timeline: scrollTrackingTimeline,
    }
);

const appearOptions = {
    threshold: 1,
    rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver (function (
    entries,
    appearOnScroll
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, 
appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

