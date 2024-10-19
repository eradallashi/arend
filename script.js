document.getElementById('menu-toggle').addEventListener('click', function(event) {
    event.stopPropagation(); 
    var menuOverlay = document.getElementById('menu-overlay');
    menuOverlay.style.display = 'block';
  });
  
  document.getElementById('close-button').addEventListener('click', function(event) {
    var menuOverlay = document.getElementById('menu-overlay');
    menuOverlay.style.display = 'none';
  });