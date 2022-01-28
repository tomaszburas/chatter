function validatePassword(password) {
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
}

function validateEmail(email) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
}

function checkRegisterData(arr, key, value) {
    return arr.find(e => e[key].toLowerCase() === value.toLowerCase());
}

function checkLoginData(arr, key, value) {
    return arr.find(e => e[key] === value);
}

module.exports = {
    validatePassword,
    validateEmail,
    checkRegisterData,
    checkLoginData,
}
