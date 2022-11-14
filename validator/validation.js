const mongoose = require("mongoose")

//NAME VALIDATION
const isValidName = function (name){
    const nameRegex = /^[a-zA-Z ]+$/;
    return nameRegex.test(name);
};
//EMAIL VALIDATION 
const isValidEmail = function(email) {
    const emailRegex =
    /^[a-z0-9][a-z0-9-_\.]+@([a-z]|[a-z0-9]?[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/;
    return emailRegex.test(password);
};
//PASSWORD VALIDATION
const isValidPassword = function(password) {
    const passwordRegex =
    /^(?=.[A-Za-z])(?=.*\d)(?=,*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,15}$/;
    return passwordRegex.test(password);

};
//VALUE VALIDATION
const isEmpty = function (value){
    if (typeof value === "undefined"|| value === null) return false;
    if (typeof value ==="string"&& value.trim().length === 0) return false;
    return true;
};

//ObjectId
const isValidObjectId = (objectId) => {
    return mongoose.Types.ObjectId.isValid(objectId);
};

module.exports = {isEmpty, isValidName, isValidEmail, isValidObjectId, isValidPassword}
