"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorException = void 0;
const ErrorException = (res, error) => {
    if (typeof error === "object" && error !== null && "message" in error && "code" in error) {
        const typedError = error;
        res.status(typedError.code).send({ message: typedError.message });
    }
    else {
        res.status(500).send({ message: 'Internal server error' });
    }
};
exports.ErrorException = ErrorException;
