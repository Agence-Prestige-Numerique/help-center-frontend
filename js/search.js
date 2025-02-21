document.addEventListener('DOMContentLoaded', function () {
    const searchBar = document.getElementById('search-bar');
    const searchResults = document.getElementById('search-results');

    // Liste d'articles fictifs
    const articles = [
        { title: "Article 1", date: "10 octobre 2023" },
        { title: "Article 2", date: "15 octobre 2023" },
        { title: "Article 3", date: "20 octobre 2023" },
        { title: "Article 4", date: "25 octobre 2023" },
        { title: "Article 5", date: "30 octobre 2023" },
    ];

    function displayResults(query) {
        searchResults.innerHTML = '';

        if (query.length > 0) {
            const filteredArticles = articles.filter(article =>
                article.title.toLowerCase().includes(query.toLowerCase())
            );

            if (filteredArticles.length > 0) {
                filteredArticles.forEach(article => {
                    const resultItem = document.createElement('div');
                    resultItem.classList.add('result-item');
                    resultItem.textContent = `${article.title} - ${article.date}`;
                    searchResults.appendChild(resultItem);
                });
                searchResults.classList.add('visible');
            } else {
                const noResults = document.createElement('div');
                noResults.classList.add('result-item');
                noResults.textContent = "Aucun résultat trouvé.";
                searchResults.appendChild(noResults);
                searchResults.classList.add('visible');
            }
        } else {
            searchResults.classList.remove('visible');
        }
    }

    searchBar.addEventListener('input', function () {
        displayResults(this.value);
    });

    document.addEventListener('click', function (e) {
        if (!searchBar.contains(e.target)) {
            searchResults.classList.remove('visible');
        }
    });
});