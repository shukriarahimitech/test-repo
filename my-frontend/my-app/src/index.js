"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
//import { Request, Response } from 'express-serve-static-core';
const body_parser_1 = __importDefault(require("body-parser"));
// Usage example
//const university: Universities = { id: uuidv4(), ...req.body };
const PORT = 3000;
app.use(body_parser_1.default.json());
//return res.status(404).json({ error: 'University not found' });
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
// In-memory databases for demonstration purposes
let universitiesArray = []; // Use a descriptive name
let departmentsArray = []; // Use a descriptive name
let specializationsArray = []; // Use a descriptive name
// Serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});
app.use(express_1.default.static('public'));
// CRUD for universities
app.post('/universities', (req, res) => {
    const university = Object.assign({ id: Date.now() }, req.body);
    universitiesArray.push(university);
    res.status(201).json(university);
});
app.get('/universities', (req, res) => {
    res.json(universitiesArray);
});
app.put('/universities/:id', (req, res) => {
    const universityId = Number(req.params.id);
    const universityIndex = universitiesArray.findIndex(u => u.id === universityId);
    if (universityIndex === -1)
        return res.status(404).send('University not found');
    universitiesArray[universityIndex] = Object.assign({ id: universityId }, req.body);
    res.json(universitiesArray[universityIndex]);
});
app.delete('/universities/:id', (req, res) => {
    const universityId = Number(req.params.id);
    universitiesArray = universitiesArray.filter(u => u.id !== universityId);
    res.status(204).send();
});
// CRUD for departments
app.post('/departments', (req, res) => {
    const department = Object.assign({ id: Date.now() }, req.body);
    departmentsArray.push(department);
    res.status(201).json(department);
});
app.get('/departments', (req, res) => {
    res.json(departmentsArray);
});
app.put('/departments/:id', (req, res) => {
    const departmentId = Number(req.params.id);
    const departmentIndex = departmentsArray.findIndex(d => d.id === departmentId);
    if (departmentIndex === -1)
        return res.status(404).send('Department not found');
    departmentsArray[departmentIndex] = Object.assign({ id: departmentId }, req.body);
    res.json(departmentsArray[departmentIndex]);
});
app.delete('/departments/:id', (req, res) => {
    const departmentId = Number(req.params.id);
    departmentsArray = departmentsArray.filter(d => d.id !== departmentId);
    res.status(204).send();
});
// CRUD for specializations
app.post('/specializations', (req, res) => {
    const specialization = Object.assign({ id: Date.now() }, req.body);
    specializationsArray.push(specialization);
    res.status(201).json(specialization);
});
app.get('/specializations', (req, res) => {
    res.json(specializationsArray);
});
app.put('/specializations/:id', (req, res) => {
    const specializationId = Number(req.params.id);
    const specializationIndex = specializationsArray.findIndex(s => s.id === specializationId);
    if (specializationIndex === -1)
        return res.status(404).send('Specialization not found');
    specializationsArray[specializationIndex] = Object.assign({ id: specializationId }, req.body);
    res.json(specializationsArray[specializationIndex]);
});
app.delete('/specializations/:id', (req, res) => {
    const specializationId = Number(req.params.id);
    specializationsArray = specializationsArray.filter(s => s.id !== specializationId);
    res.status(204).send();
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
exports.default = express_1.default;
