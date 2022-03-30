const form = document.getElementById("form");
const formViewPage = document.getElementById("formViewPage");

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const address = document.getElementById("address");
const city = document.getElementById("city");
const province = document.getElementById("province");
const postalCode = document.getElementById("postalCode");
const phoneNumber = document.getElementById("phoneNumber");
const email = document.getElementById("email");
const make = document.getElementById("make");
const model = document.getElementById("model");
const year = document.getElementById("year");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!checkInputs()) {

        var vehicles = [];

        var vehicle = {
            "firstName": firstName.value.trim(),
            "lastName": lastName.value.trim(),
            "address": address.value.trim(),
            "city": city.value.trim(),
            "province": province.value,
            "postalCode": postalCode.value.trim(),
            "phoneNumber": phoneNumber.value.trim(),
            "email": email.value.trim(),
            "make": make.value.trim(),
            "model": model.value.trim(),
            "year": year.value.trim(),
            "jdpowerPage": "http://www.jdpower.com/cars/" + year.value.trim() + "/" + make.value.trim() + "/" + model.value.trim()
        }

        if (localStorage.getItem('vehicles') !== null) {
            var vehiclesJson = localStorage.getItem('vehicles');
            vehicles = JSON.parse(vehiclesJson);
        }

        vehicles.push(vehicle);
        localStorage.setItem('vehicles', JSON.stringify(vehicles));

        form.submit();
    }
});

function checkInputs() {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const addressValue = address.value.trim();
    const cityValue = city.value.trim();
    const provinceValue = province.value;
    const phoneNumberValue = phoneNumber.value.trim();
    const emailValue = email.value.trim();
    const makeValue = make.value.trim();
    const modelValue = model.value.trim();
    const yearValue = year.value.trim();

    let postalCodeValue = postalCode.value.trim();
    if (postalCodeValue.length >= 6) {
        postalCodeValue = (postalCodeValue.slice(0, 3) + " " + postalCodeValue.slice(postalCodeValue.length - 3, postalCodeValue.length)).toUpperCase();
    }
    postalCode.value = postalCodeValue;

    if (firstNameValue === "") {
        setErrorFor(firstName);
    } else {
        setSuccessFor(firstName);
    }

    if (lastNameValue === "") {
        setErrorFor(lastName);
    } else {
        setSuccessFor(lastName);
    }

    if (addressValue === "") {
        setErrorFor(address);
    } else {
        setSuccessFor(address);
    }

    if (cityValue === "") {
        setErrorFor(city);
    } else {
        setSuccessFor(city);
    }

    if (provinceValue === "") {
        setErrorFor(province);
    } else {
        setSuccessFor(province);
    }

    if (postalCodeValue === "" || !isValidPostalCode(postalCodeValue)) {
        setErrorFor(postalCode);
    } else {
        setSuccessFor(postalCode);
    }

    if (phoneNumberValue === "" || !isValidPhoneNumber(phoneNumberValue)) {
        setErrorFor(phoneNumber);
    } else {
        setSuccessFor(phoneNumber);
    }

    if (emailValue === "" || !isEmail(emailValue)) {
        setErrorFor(email);
    } else {
        setSuccessFor(email)
    }

    if (makeValue === "") {
        setErrorFor(make)
    } else {
        setSuccessFor(make)
    }

    if (modelValue === "") {
        setErrorFor(model)
    } else {
        setSuccessFor(model)
    }

    if (yearValue === "" || !isValidYear(yearValue)) {
        setErrorFor(year)
    } else {
        setSuccessFor(year)
    }

    return document.getElementsByClassName("error").length > 0;
}

function setErrorFor(input) {
    input.parentElement.className = 'form-item error';
}

function setSuccessFor(input) {
    input.parentElement.className = 'form-item success';
}

function isEmail(email) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

function isValidPostalCode(postalCode) {
    return /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z] \d[ABCEGHJ-NPRSTV-Z]\d$/.test(postalCode);
}

function isValidPhoneNumber(phoneNumber) {
    return /^(\(\d{3}\)|\d{3}\-)\d{3}\-\d{4}$/.test(phoneNumber);
}

function isValidYear(yearValue) {
    return /^[12][0-9]{3}$/.test(yearValue);
}


