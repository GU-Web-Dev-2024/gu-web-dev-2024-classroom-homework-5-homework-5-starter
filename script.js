// Select elements
const counterDisplay = document.getElementById("counter");
const gallery = document.getElementById("art-gallery");
const resetButton = document.getElementById("reset-button");
const addArtButton = document.getElementById("add-art-button");
const removeArtButton = document.getElementById("remove-art-button");

// Check if elements are properly selected
console.log("Elements selected:", counterDisplay, gallery, resetButton, addArtButton, removeArtButton);

// Variables
let artworksViewed = 0;
let removeMode = false;

// Predefined artworks to add dynamically
const newArtworks = [
    { title: 'The Scream', artist: 'Edvard Munch', img: 'https://via.placeholder.com/200' },
    { title: 'Girl with a Pearl Earring', artist: 'Johannes Vermeer', img: 'https://via.placeholder.com/200' },
    { title: 'The Birth of Venus', artist: 'Sandro Botticelli', img: 'https://via.placeholder.com/200' },
    { title: 'The Night Watch', artist: 'Rembrandt van Rijn', img: 'https://via.placeholder.com/200' },
    { title: 'The Kiss', artist: 'Gustav Klimt', img: 'https://via.placeholder.com/200' },
    { title: 'American Gothic', artist: 'Grant Wood', img: 'https://via.placeholder.com/200' },
    { title: 'Las Meninas', artist: 'Diego Velázquez', img: 'https://via.placeholder.com/200' },
    { title: 'The Last Supper', artist: 'Leonardo da Vinci', img: 'https://via.placeholder.com/200' },
    { title: 'Water Lilies', artist: 'Claude Monet', img: 'https://via.placeholder.com/200' },
    { title: 'Starry Night Over the Rhône', artist: 'Vincent van Gogh', img: 'https://via.placeholder.com/200' }
];

// Update the view counter
function updateCounter() {
    counterDisplay.textContent = `Artworks Viewed: ${artworksViewed}`;
    console.log("Counter updated to:", artworksViewed);
}

// Toggle remove mode
removeArtButton.addEventListener("click", () => {
    removeMode = !removeMode;
    removeArtButton.classList.toggle("active");
    removeArtButton.textContent = removeMode ? "Exit Remove Artwork Mode" : "Remove Artwork Mode";
    console.log("Remove mode toggled:", removeMode);
});

// Handle art panel click
function handleArtClick(event) {
    const panel = event.currentTarget;
    if (removeMode) {
        panel.remove();
        console.log("Panel removed in remove mode.");
    } else if (!panel.classList.contains("viewed")) {
        panel.classList.add("viewed");
        panel.style.backgroundColor = "#d9e2ff";
        artworksViewed++;
        updateCounter();
        console.log("Panel viewed:", panel);
    }
}

// Add a new artwork
addArtButton.addEventListener("click", () => {
    const artwork = newArtworks[Math.floor(Math.random() * newArtworks.length)];
    const artPanel = document.createElement("div");
    artPanel.className = "art-panel";
    artPanel.innerHTML = `<img src="${artwork.img}" alt="${artwork.title}"><p>${artwork.title} by ${artwork.artist}</p>`;
    artPanel.addEventListener("click", handleArtClick);
    gallery.appendChild(artPanel);
    console.log("New artwork added:", artwork);
});

// Reset the gallery
resetButton.addEventListener("click", () => {
    artworksViewed = 0;
    updateCounter();
    document.querySelectorAll(".art-panel").forEach(panel => {
        panel.style.backgroundColor = "#eee";
        panel.classList.remove("viewed");
    });
    console.log("Gallery reset.");
});

// Initialize existing art panels with click event
document.querySelectorAll(".art-panel").forEach(panel => {
    panel.addEventListener("click", handleArtClick);
    console.log("Event listener added to existing panel.");
});

// Set initial counter
updateCounter();