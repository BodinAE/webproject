var map = L.map('map').setView([48.8566, 2.3522], 8);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);


var annoyingMarker = L.marker([48.8566, 2.3522]).addTo(map).bindPopup("Paris").openPopup();

function machu() {
    annoyingMarker = L.marker([-13.1664, -72.5387]).addTo(map).bindPopup("Machu Picchu").openPopup(); //machu picchu
    map.setView([-13.1664, -72.5387], 8)
}

function bali() {
    annoyingMarker = L.marker([-8.3991, 115.1578]).addTo(map).bindPopup("Bali").openPopup(); //machu picchu
    map.setView([-8.3991, 115.1578], 8)
}

function paris() {
    annoyingMarker = L.marker([48.8566, 2.3522]).addTo(map).bindPopup("Paris").openPopup(); //machu picchu
    map.setView([48.8566, 2.3522], 8)
}

