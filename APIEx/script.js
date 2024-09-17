document.addEventListener("DOMContentLoaded", () => {
    const apiUrl = "https://picsum.photos/v2/list";
    const photoGrid = document.getElementById("photoGrid");
    const authorDropdown = document.getElementById("authorDropdown");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const pageInfo = document.getElementById("pageInfo");

    let photos = [];
    let currentPage = 1;
    const itemsPerPage = 5;

    async function fetchPhotos() {
        const response = await fetch(apiUrl);
        photos = await response.json();
        displayPhotos(photos, currentPage);
        populateAuthors(photos);
        updatePageInfo();
        checkButtons();
    }

    function displayPhotos(photos, page) {
        photoGrid.innerHTML = "";
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = page * itemsPerPage;
        const paginatedPhotos = photos.slice(startIndex, endIndex);

        paginatedPhotos.forEach(photo => {
            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
                <img src="${photo.download_url}" alt="${photo.author}">
                <h3>${photo.author}</h3>
                <p>Here you can add a photo description.</p>
            `;
            photoGrid.appendChild(card);
        });
    }

    function populateAuthors(photos) {
        const authors = [...new Set(photos.map(photo => photo.author))];
        authors.forEach(author => {
            const option = document.createElement("option");
            option.value = author;
            option.textContent = author;
            authorDropdown.appendChild(option);
        });
    }

    authorDropdown.addEventListener("change", (e) => {
        const selectedAuthor = e.target.value;
        const filteredPhotos = selectedAuthor
            ? photos.filter(photo => photo.author === selectedAuthor)
            : photos;

        currentPage = 1; 
        displayPhotos(filteredPhotos, currentPage);
        updatePageInfo();
        checkButtons();
    });

    prevBtn.addEventListener("click", () => {
        if (currentPage > 1) {
            currentPage--;
            displayPhotos(photos, currentPage);
            updatePageInfo();
            checkButtons();
        }
    });

    nextBtn.addEventListener("click", () => {
        if (currentPage * itemsPerPage < photos.length) {
            currentPage++;
            displayPhotos(photos, currentPage);
            updatePageInfo();
            checkButtons();
        }
    });

    function updatePageInfo() {
        pageInfo.textContent = `Page ${currentPage} of ${Math.ceil(photos.length / itemsPerPage)}`;
    }

    function checkButtons() {
        prevBtn.disabled = currentPage === 1;
        nextBtn.disabled = currentPage * itemsPerPage >= photos.length;
    }

    fetchPhotos();
});