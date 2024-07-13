let sidebarVisible = false;

// Show sidebar on hover
document.getElementById('dashboard-link').addEventListener('mouseover', function (event) {
  event.preventDefault();
  document.getElementById('sidebar').classList.add('active');
});

// Hide sidebar on mouse out, unless it is clicked to stay visible
document.getElementById('dashboard-link').addEventListener('mouseout', function (event) {
  event.preventDefault();
  if (!sidebarVisible) {
    document.getElementById('sidebar').classList.remove('active');
  }
});

// Toggle sidebar visibility on click
document.getElementById('dashboard-link').addEventListener('click', function (event) {
  event.preventDefault();
  sidebarVisible = !sidebarVisible;
  document.getElementById('sidebar').classList.toggle('active', sidebarVisible);
});

// Hide sidebar if clicked outside of it
document.addEventListener('click', function (event) {
  if (sidebarVisible && !document.getElementById('sidebar').contains(event.target) && event.target.id !== 'dashboard-link') {
    sidebarVisible = false;
    document.getElementById('sidebar').classList.remove('active');
  }
});

// Scroll effect for spacebg1 image
var ground = document.querySelector(".spacebg1");
window.onscroll = () => {
  var value = window.scrollY;
  ground.style.top = -value*1.4  + "px"; // Adjust the factor to control the speed
};
document.getElementById('earth').addEventListener('mouseover', function() {
  document.getElementById('planetContainer1').classList.add('planet1');
  document.getElementById('planetInfo1').classList.remove('hidden');
  
});

document.getElementById('earth').addEventListener('mouseout', function() {
  document.getElementById('planetContainer1').classList.remove('planet1');
  document.getElementById('planetInfo1').classList.add('hidden');
  
});
document.getElementById('jupiter').addEventListener('mouseover', function() {
  document.getElementById('planetContainer2').classList.add('planet2');
  document.getElementById('planetInfo2').classList.remove('hidden');
  
});

document.getElementById('jupiter').addEventListener('mouseout', function() {
  document.getElementById('planetContainer2').classList.remove('planet2');
  document.getElementById('planetInfo2').classList.add('hidden');
});
document.getElementById('uranus').addEventListener('mouseover', function() {
  document.getElementById('planetContainer3').classList.add('planet3');
  document.getElementById('planetInfo3').classList.remove('hidden');
  
});

document.getElementById('uranus').addEventListener('mouseout', function() {
  document.getElementById('planetContainer3').classList.remove('planet3');
  document.getElementById('planetInfo3').classList.add('hidden');
});
document.getElementById('venus').addEventListener('mouseover', function() {
  document.getElementById('planetContainer4').classList.add('planet4');
  document.getElementById('planetInfo4').classList.remove('hidden');
  
});

document.getElementById('venus').addEventListener('mouseout', function() {
  document.getElementById('planetContainer4').classList.remove('planet4');
  document.getElementById('planetInfo4').classList.add('hidden');
});
document.getElementById('neptune').addEventListener('mouseover', function() {
  document.getElementById('planetContainer5').classList.add('planet5');
  document.getElementById('planetInfo5').classList.remove('hidden');
  
});

document.getElementById('neptune').addEventListener('mouseout', function() {
  document.getElementById('planetContainer5').classList.remove('planet5');
  document.getElementById('planetInfo5').classList.add('hidden');
});
document.getElementById('mars').addEventListener('mouseover', function() {
  document.getElementById('planetContainer7').classList.add('planet7');
  document.getElementById('planetInfo7').classList.remove('hidden');
  
});
document.getElementById('mars').addEventListener('mouseout', function() {
  document.getElementById('planetContainer7').classList.remove('planet7');
  document.getElementById('planetInfo7').classList.add('hidden');
});
document.getElementById('mercury').addEventListener('mouseover', function() {
  document.getElementById('planetContainer6').classList.add('planet6');
  document.getElementById('planetInfo6').classList.remove('hidden');
});
document.getElementById('mercury').addEventListener('mouseout', function() {
  document.getElementById('planetContainer6').classList.remove('planet6');
  document.getElementById('planetInfo6').classList.add('hidden');
});
document.getElementById('saturn').addEventListener('mouseover', function() {
  document.getElementById('planetContainer8').classList.add('planet8');
  document.getElementById('planetInfo8').classList.remove('hidden');
});
document.getElementById('saturn').addEventListener('mouseout', function() {
  document.getElementById('planetContainer8').classList.remove('planet8');
  document.getElementById('planetInfo8').classList.add('hidden');
});