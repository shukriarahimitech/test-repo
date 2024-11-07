"use strict";
import express from "express";
import cors from "cors";
import { combineTableNames } from "sequelize/lib/utils";
const app = express();
app.use(cors());
app.listen(3000,() => console.log("app is running"));
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use(express_1.default.static('public'));
const universities = [
    { id: 1, name: 'University 1' },
    { id: 2, name: 'University 2' },
    { id: 3, name: 'University 3' },
];
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});
app.get('/api/universities', (req, res) => {
    res.json(universities);
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
//# sourceMappingURL=index.js.map