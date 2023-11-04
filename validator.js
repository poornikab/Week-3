const isValid = function(value) {
    if (typeof value === "undefined" || value === null) return false;
    if (typeof value === "string" && value.trim().length === 0) return false;
    if (typeof value === Number && value.trim().length === 0) return false;
    return true;

};

module.exports = {isValid}

let isValidBody = function (body) {
    return Object.keys(body).length > 0;
};

module.exports = { isValid, isValidBody};

let isValidName = /^[a-zA-Z]*$/;
let isValidEmail = /^\w+([\,-]?\w+)@\w+([\,-]?\w+)(\.\w{2,3})+$/;
let isValidMobile = /^(\+\d{1,3}[- ]?)?\d{10}$/;

module.exports = { isValid, isValidBody, isValidName, isValidEmail, isValidMobile};