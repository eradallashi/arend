document.getElementById('menu-toggle').addEventListener('click', function(event) {
    event.stopPropagation(); 
    var menuOverlay = document.getElementById('menu-overlay');
    var procesiSection = document.getElementById('procesi-section');
    var swiperContainer = document.getElementById('swiper-container');
    menuOverlay.style.display = 'block';
    procesiSection.style.display = 'none'; 
    swiperContainer.style.display = 'none'; 
});

document.getElementById('close-button').addEventListener('click', function(event) {
    var menuOverlay = document.getElementById('menu-overlay');
    var procesiSection = document.getElementById('procesi-section');
    var swiperContainer = document.getElementById('swiper-container');
    menuOverlay.style.display = 'none';
    procesiSection.style.display = 'block'; 
    swiperContainer.style.display = 'block'; 
});
