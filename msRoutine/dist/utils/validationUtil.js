"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDateNow = exports.validationObjectIsEmpty = void 0;
// Validate if object is empty
const validationObjectIsEmpty = (object) => {
    if ((Object.keys(object).length === 0)) {
        return true;
    }
};
exports.validationObjectIsEmpty = validationObjectIsEmpty;
const getDateNow = () => {
    const date = new Date();
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${day}/${month}/${year} ${hours}:${minutes}`;
};
exports.getDateNow = getDateNow;
