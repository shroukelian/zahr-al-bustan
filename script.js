const videoItems = document.querySelectorAll('.video-hover-play');

videoItems.forEach(item => {
    const video = item.querySelector('video');
    
    item.addEventListener('mouseenter', () => {
        video.play();
    });
    
    item.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0; 
    });
});

const counters = document.querySelectorAll('.counter');
const speed = 200;

const startCount = () => {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
}

let observer = new IntersectionObserver((entries) => {
    if(entries[0].isIntersecting) startCount();
}, { threshold: 0.5 });

observer.observe(document.querySelector('.stats-section'));