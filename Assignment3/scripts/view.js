window.addEventListener("pageshow", (event) => {
    var vehiclesJson = localStorage.getItem('vehicles');
    var vehicles = JSON.parse(vehiclesJson);
    var vehicle = vehicles[vehicles.length - 1];

    document.getElementById("firstNameView").value = vehicle.firstName;
    document.getElementById("lastNameView").value = vehicle.lastName;
    document.getElementById("addressView").value = vehicle.address;
    document.getElementById("cityView").value = vehicle.city;
    document.getElementById("provinceView").value = vehicle.province;
    document.getElementById("postalCodeView").value = vehicle.postalCode;
    document.getElementById("phoneNumberView").value = vehicle.phoneNumber;
    document.getElementById("emailView").value = vehicle.email;
    document.getElementById("makeView").value = vehicle.make;
    document.getElementById("modelView").value = vehicle.model;
    document.getElementById("yearView").value = vehicle.year;
    document.getElementById("jdpowerPage").innerHTML = vehicle.jdpowerPage;
    document.getElementById("jdpowerPage").setAttribute("href", vehicle.jdpowerPage);
});