function setupQuestionsButton() {
  var btn = document.getElementById('questions-btn');
  if (!btn) return;

  btn.addEventListener('click', function () {
    alert('If you have questions, contact me at:\nksantiago1@hawk.illinoistech.edu');
  });
}

window.initMap = function () {
  var mapElement = document.getElementById('map');
  if (!mapElement) return;

  var center = { lat: 41.8349, lng: -87.6270 };

  var map = new google.maps.Map(mapElement, {
    center: center,
    zoom: 14,
    mapTypeId: 'roadmap'
  });

  var marker = new google.maps.Marker({
    position: center,
    map: map,
    title: 'Illinois Tech'
  });

  var infoWindow = new google.maps.InfoWindow({
    content: '<strong>Illinois Tech</strong><br>My chosen map location.'
  });

  marker.addListener('click', function () {
    infoWindow.open(map, marker);
  });

  map.setMapTypeId('hybrid');
};

document.addEventListener('DOMContentLoaded', setupQuestionsButton);