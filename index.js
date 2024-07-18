document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');

    searchInput.addEventListener('input', function() {
        const searchText = this.value.toLowerCase().trim();
        // Example: Filter games based on searchText
        console.log('Searching for:', searchText);
        // Implement your search functionality here
    });
});
