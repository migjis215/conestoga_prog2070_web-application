window.addEventListener("pageshow", (event) => {
    loadHome();
});

function loadHome() {

    var vehiclesJson = localStorage.getItem('vehicles');
    var vehicles = JSON.parse(vehiclesJson);
    var htmlCode = "";

    for (let i = 0; i < vehicles.length; i++) {
        var vehicle = vehicles[i];

        htmlCode += `
            <table class="table text-start">
            <thead>
                <tr>
                    <th class="col-md-6">Seller's Information</th>
                    <th class="col-md-6">Vehicle's Information</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        First Name: ${vehicle.firstName}<br />
                        Last Name: ${vehicle.lastName}<br />
                        Address: ${vehicle.address}<br />
                        City: ${vehicle.city}<br />
                        Province: ${vehicle.province}<br />
                        Postal Code: ${vehicle.postalCode}<br />
                        Phone Number: ${vehicle.phoneNumber}<br />
                        Email: ${vehicle.email}<br />
                    </th>
                    <td>
                        Make: ${vehicle.make}<br />
                        Model: ${vehicle.model}<br />
                        Year: ${vehicle.year}<br />
                        JD Power and Associates page: ${vehicle.jdpowerPage}<br />
                    </td>
                </tr>
            </tbody>
            </table>
            <br /><br />
        `;
    }
    document.getElementById("list").innerHTML = htmlCode;
}