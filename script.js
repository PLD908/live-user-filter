document.addEventListener('DOMContentLoaded', function () {
    let users = document.querySelectorAll('.user');
    let filterSearch = document.getElementById('filter');

    filterSearch.addEventListener('input', function () {
        let filterValue = filterSearch.value.trim().toLowerCase();

        users.forEach(function (profile) {
            let name = profile.querySelector('h4').textContent.trim().toLowerCase();
            let country = profile.querySelector('p').textContent.trim().toLowerCase();

            let isVisible = filterValue === '' || name.includes(filterValue) || country.includes(filterValue);

            if (isVisible) {
                profile.classList.remove('hidden');
            } else {
                profile.classList.add('hidden');
            }
        });
    });
});