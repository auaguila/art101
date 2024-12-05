// script.js
function spawnFootprints() {
    const body = document.body;

    const dogFootprint = document.createElement('div');
    dogFootprint.className = 'footprint dog-footprint';
    body.appendChild(dogFootprint);

    const catFootprint = document.createElement('div');
    catFootprint.className = 'footprint cat-footprint';
    body.appendChild(catFootprint);

    setTimeout(() => body.removeChild(dogFootprint), 5000);
    setTimeout(() => body.removeChild(catFootprint), 5000);
}

// Generate footprints at intervals
setInterval(spawnFootprints, 2000);
