// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Select elements
    const counterDisplay = document.getElementById("counter");
    const gallery = document.getElementById("art-gallery");
    const resetButton = document.getElementById("reset-button");
    const addArtButton = document.getElementById("add-art-button");
    const removeArtButton = document.getElementById("remove-art-button");

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
    }

    // Toggle remove mode
    removeArtButton.addEventListener("click", () => {
        removeMode = !removeMode;
        removeArtButton.classList.toggle("active");
        removeArtButton.textContent = removeMode ? "Exit Remove Artwork Mode" : "Remove Artwork Mode";
    });

    // Event delegation to handle clicks on art panels
    gallery.addEventListener("click", (event) => {
        const panel = event.target.closest(".art-panel");
        if (!panel) return;

        if (removeMode) {
            panel.remove();
        } else if (!panel.classList.contains("viewed")) {
            panel.classList.add("viewed");
            panel.style.backgroundColor = "#d9e2ff";
            artworksViewed++;
            updateCounter();
        }
    });

    // Add a new artwork
    addArtButton.addEventListener("click", () => {
        const artwork = newArtworks[Math.floor(Math.random() * newArtworks.length)];
        const artPanel = document.createElement("div");
        artPanel.className = "art-panel";
        artPanel.innerHTML = `<img src="${artwork.img}" alt="${artwork.title}"><p>${artwork.title} by ${artwork.artist}</p>`;
        gallery.appendChild(artPanel);
    });

    // Reset the gallery
    resetButton.addEventListener("click", () => {
        artworksViewed = 0;
        updateCounter();
        document.querySelectorAll(".art-panel").forEach(panel => {
            panel.style.backgroundColor = "#eee";
            panel.classList.remove("viewed");
        });
    });

    // Set initial counter
    updateCounter();
});