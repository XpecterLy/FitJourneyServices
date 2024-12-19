"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationObjectIsEmpty = void 0;
// Validate if object is empty
const validationObjectIsEmpty = (object) => {
    if ((Object.keys(object).length === 0)) {
        return true;
    }
};
exports.validationObjectIsEmpty = validationObjectIsEmpty;
