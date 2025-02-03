"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routineTrakingModel = void 0;
const mongoose_1 = require("mongoose");
const rotineTrakingSchema = new mongoose_1.Schema({
    routineId: { type: String, require },
    userId: { type: String, require },
    dateCreate: { type: String, require },
    state: { type: String, require },
});
exports.routineTrakingModel = (0, mongoose_1.model)('routineTraking', rotineTrakingSchema);
