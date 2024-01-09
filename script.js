    // let users = document.querySelectorAll('.user')
    // let filterSearch = document.getElementById('filter');

    // filterSearch.addEventListener('input', function() {
    //     let filterValue = filterSearch.value.toLowerCase();
    //     let name = profile.querySelector('h4').toLowerCase(); 
        
    //     users.forEach(profile, function() {
    //             if (name.includes(filterValue)) {
    //                 profile.style.display = "flex"
    //             } else {
    //                 profile.style.display = "none"
    //             }
    //     });
    // });

const result = document.getElementById('result');
const filter = document.getElementById('filter');
const users = document.querySelectorAll('.user');

filter.addEventListener("input", (e) => filterUser(e.target.value));

function filterUser(searchUser) {
    users.forEach((item) => {
        let userName = item.querySelector('h4');
        let profile = item.userName.querySelector('.user');
        
        if (userName.innerText.toLowerCase().includes(searchUser.toLowerCase())) {
            profile.style.display = "flex"
        } else {
            profile.style.display = "none"
        }
    });
};