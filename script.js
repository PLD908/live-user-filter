document.addEventListener('DOMContentLoaded', function () {
    let users = document.querySelectorAll('.user');
    let filterSearch = document.getElementById('filter');

    filterSearch.addEventListener('input', function () {
        let filterValue = filterSearch.value.trim().toLowerCase();

        users.forEach(function (profile) {
            let name = profile.querySelector('h4').textContent.trim().toLowerCase();

            if (filterValue === '' || name.includes(filterValue)) {
                profile.style.display = 'flex';
            } else {
                profile.style.display = 'none';
            }
        });
    });
});

let resultElement = document.querySelector(".result")
        let buttonElement = document.querySelector(".btn")
        buttonElement.addEventListener('click', () => {
            let arr = [1, 2, 3, 4, 5]
            arr.forEach((item, index) => {
                resultElement.innerHTML += `arr[${index}] = ${item} <br>`
        });
});