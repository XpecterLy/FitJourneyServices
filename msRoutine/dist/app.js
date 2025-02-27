"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const routes_1 = require("./routes/routes");
const db_1 = require("./config/db");
const app = (0, express_1.default)();
app.use(express_1.default.json());
(0, db_1.connectToDatabase)();
(0, routes_1.routesV1)(app);
const port = process.env.PORT || 3004;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
