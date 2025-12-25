const socket = io();

if(navigator.geolocation) {
    navigator.geolocation.watchPosition(
        (position) => {
            const {latitude, longitude} = position.coords;
            socket.emit("send-location", {latitude, longitude});
        },
        (error) => {
            console.log(error);
        },
        {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        }
    );
}

// const map = L.map("map").setView( [0, 0], 16); /* set + and - in map  and 16 = Closer (Zoom in current location */ 

// L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {  /* to get map in our browser */
//     attribution: "Realtime Tracker App By Virat Rai"
// }).addTo(map)

const map = L.map("map").setView([26.8917395, 81.0613214], 16);

// Add OSM tiles
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "Realtime Tracker App By Virat Rai",
}).addTo(map);

// Add marker at current location
const marker = L.marker([26.8917395, 81.0613214]).addTo(map);
marker.bindPopup("You are here!").openPopup();




const markers = {};

socket.on("receive-location", (data) => {
  const { id, latitude, longitude } = data;
  map.setView([latitude, longitude]);
  if (markers[id]) {
    markers[id].setLatLng([latitude, longitude]);
  } else {
    markers[id] = L.marker([latitude, longitude]).addTo(map);
  }
});

socket.on("user-disconnect", (id) => {
    if (markers[id]) {
        map.removeLayer(markers[id]);
        delete markers[id];
    }
});