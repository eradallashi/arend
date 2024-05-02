document.getElementById('menu-toggle').addEventListener('click', function(event) {
    event.stopPropagation(); // Prevents the click event from propagating to the whole page
    var menuOverlay = document.getElementById('menu-overlay');
    var procesiSection = document.getElementById('procesi-section');
    var swiperContainer = document.getElementById('swiper-container');
    menuOverlay.style.display = 'block';
    procesiSection.style.display = 'none'; // Hide PROCESI I PUNES section
    swiperContainer.style.display = 'none'; // Hide Swiper container
});

document.getElementById('close-button').addEventListener('click', function(event) {
    var menuOverlay = document.getElementById('menu-overlay');
    var procesiSection = document.getElementById('procesi-section');
    var swiperContainer = document.getElementById('swiper-container');
    menuOverlay.style.display = 'none';
    procesiSection.style.display = 'block'; // Show PROCESI I PUNES section
    swiperContainer.style.display = 'block'; // Show Swiper container
});
