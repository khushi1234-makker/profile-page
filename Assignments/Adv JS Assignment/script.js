// Sort cities alphabetically
function sortCitiesAlphabetically(groupedData) {
    return Object.keys(groupedData).sort();
}

// Global variable
let grouped = {};

// Display all data
function displayAll() {
    const outputDiv = document.getElementById('output');

    let html = `
        <h3 style="text-align:center;">Grouped Users by City</h3>
        <table border="1">
            <tr>
                <th>City</th>
                <th>Users</th>
            </tr>
    `;

    const sortedCities = sortCitiesAlphabetically(grouped);

    sortedCities.forEach(city => {
        html += `
            <tr>
                <td class="city">${city}</td>
                <td>${grouped[city].join(', ')} 
                <br><small>Total: ${grouped[city].length} users</small></td>
            </tr>
        `;
    });

    html += '</table>';

    outputDiv.innerHTML = html;
}

// Search function
function searchCity() {
    const input = document.getElementById('search').value.toLowerCase();
    const outputDiv = document.getElementById('output');

    let html = `
        <h3 style="text-align:center;">Search Results</h3>
        <table border="1">
            <tr>
                <th>City</th>
                <th>Users</th>
            </tr>
    `;

    const sortedCities = sortCitiesAlphabetically(grouped);
    let found = false;

    sortedCities.forEach(city => {
        if (city.toLowerCase().includes(input)) {
            found = true;

            html += `
                <tr>
                    <td class="city">${city}</td>
                    <td>${grouped[city].join(', ')} 
                    <br><small>Total: ${grouped[city].length} users</small></td>
                </tr>
            `;
        }
    });

    html += '</table>';

    if (!found) {
        html += '<p style="text-align:center;">No city found</p>';
    }

    outputDiv.innerHTML = html;
}

// Fetch API
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {

        const users = data.map(user => ({
            name: user.name,
            city: user.address.city
        }));

        users.forEach(user => {
            if (!grouped[user.city]) {
                grouped[user.city] = [];
            }
            grouped[user.city].push(user.name);
        });

        displayAll();
    })
    .catch(error => {
        document.getElementById('output').innerHTML =
            `<p style="color:red;">Error: ${error.message}</p>`;
    });