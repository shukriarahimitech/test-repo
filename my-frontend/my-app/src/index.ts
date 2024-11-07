
import express, { Request, Response } from 'express';
import cors from 'cors';
import { Pool } from 'pg';
import { v4 as uuidv4 } from 'uuid';

const app = express();
const port = 3000;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'universities',
  password: '1234',
  port: 5432,
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Serve the main HTML file
app.get('/', (req: Request, res: Response) => {
  res.sendFile(__dirname + '/public/index.html');
});

// CRUD for universities
app.post('/universities', async (req: Request, res: Response) => {
  const university = { id: uuidv4(), ...req.body };
  try {
      // Example: Add logic to insert into your database
      await pool.query('INSERT INTO universities (id, name) VALUES ($1, $2)', [university.id, university.name]);
      res.status(201).json(university);
  } catch (error) {
      res.status(500).send('Error adding university');
  }
});

app.get('/universities', async (req: Request, res: Response) => {
  try {
      const result = await pool.query('SELECT * FROM universities');
      res.json(result.rows);
  } catch (error) {
      res.status(500).send('Database error occurred');
  }
});

// Continue fixing CRUD for departments and specializations similarly...
app.post('/departments', async (req: Request, res: Response) => {
  const departments = { id: uuidv4(), ...req.body };
  try {
      // Example: Add logic to insert into your database
      await pool.query('INSERT INTO departments (id, name) VALUES ($1, $2)', [departments.id, departments.name]);
      res.status(201).json(departments);
  } catch (error) {
      res.status(500).send('Error adding department');
  }
});

app.get('/departments', async (req: Request, res: Response) => {
  try {
      const result = await pool.query('SELECT * FROM departments');
      res.json(result.rows);
  } catch (error) {
      res.status(500).send('Database error occurred');
  }
});

//specialization CRUD
app.post('/specializations', async (req: Request, res: Response) => {
  const specializations = { id: uuidv4(), ...req.body };
  try {
      // Example: Add logic to insert into your database
      await pool.query('INSERT INTO specializations (id, name) VALUES ($1, $2)', [specializations.id, specializations.name]);
      res.status(201).json(specializations);
  } catch (error) {
      res.status(500).send('Error adding university');
  }
});

app.get('/specializations', async (req: Request, res: Response) => {
  try {
      const result = await pool.query('SELECT * FROM specializations');
      res.json(result.rows);
  } catch (error) {
      res.status(500).send('Database error occurred');
  }
});
// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});













// import express, { Request, Response } from 'express';
// import cors from 'cors';
// import { Pool } from 'pg';

// const app = express();
// const port = 3000;

// // Serve the main HTML file
// app.get('/', (req: Request, res: Response) => {
//   res.sendFile(__dirname + '/public/index.html');
// });
// app.use(express.static('public'));

// app.use(json()) 
// app.use(express.json())

// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'universities',
//   password: '1234',
//   port: 5432,
// });

// app.use(cors());
// app.use(json());
// // Endpoints
// app.get('/universities', async (req: Request, res: Response) => {
//   const result = await pool.query('SELECT * FROM universities');
//   res.json(result.rows);
// });

// app.get('/specializations', async (req:any , res:any) => {
//     const result = await pool.query('SELECT * FROM specializations');
//     res.json(result.rows);
// });

// app.get('/departments', async (req: any, res: any) => {
//     const result = await pool.query('SELECT * FROM departments');
//     res.json(result.rows);
// });

// //import { Request, Response } from 'express-serve-static-core';
// import bodyParser from 'body-parser';
// import { Universities } from './my-frontend/src/universities';
// import { Departments } from './my-frontend/departments';
// import { Specializations } from './my-frontend/src/specializations';
// import { v4 as uuidv4 } from 'uuid';

// // In-memory databases for demonstration purposes
// let universitiesArray: Universities[] = []; // Use a descriptive name
// let departmentsArray: Departments[] = []; // Use a descriptive name
// let specializationsArray: Specializations[] = []; // Use a descriptive name


// // CRUD for universities
// app.post('/universities', (req: Request, res: Response) => {
//   const university: Universities = { id: Date.now(), ...req.body };
//   universitiesArray.push(university);
//   res.status(201).json(university);
// });

// app.get('/universities', (req: Request, res: Response) => {
//   res.json(universitiesArray);
// });

// app.put('/universities/:id', (req: Request, res: Response) => {
//   const universityId = Number(req.params.id);
//   const universityIndex = universitiesArray.findIndex(u => u.id === universityId);
//   if (universityIndex === -1) {
//     res.status(404).send('University not found');
//     return;
//   }
//   universitiesArray[universityIndex] = { id: universityId, ...req.body };
//   res.json(universitiesArray[universityIndex]);
// });

// app.delete('/universities/:id', (req: Request, res: Response) => {
//   const universityId = Number(req.params.id);
//   universitiesArray = universitiesArray.filter(u => u.id !== universityId);
//   res.status(204).send();
// });

// // CRUD for departments
// app.post('/departments', (req: Request, res: Response) => {
//   const department: Departments = { id: Date.now(), ...req.body };
//   departmentsArray.push(department);
//   res.status(201).json(department);
// });

// app.get('/departments', (req: Request, res: Response) => {
//   res.json(departmentsArray);
// });

// app.put('/departments/:id', (req: any , res: any) => {
//   const departmentId = Number(req.params.id);
//   const departmentIndex = departmentsArray.findIndex(d => d.id === departmentId);
//   if (departmentIndex === -1) return res.status(404).send('Department not found');
//   departmentsArray[departmentIndex] = { id: departmentId, ...req.body };
//   res.json(departmentsArray[departmentIndex]);
// });

// app.delete('/departments/:id', (req: Request, res: Response) => {
//   const departmentId = Number(req.params.id);
//   departmentsArray = departmentsArray.filter(d => d.id !== departmentId);
//   res.status(204).send();
// });

// // CRUD for specializations
// app.post('/specializations', (req: Request, res: Response) => {
//   const specialization: Specializations = { id: Date.now(), ...req.body };
//   specializationsArray.push(specialization);
//   res.status(201).json(specialization);
// });

// app.get('/specializations', (req: Request, res: Response) => {
//   res.json(specializationsArray);
// });

// app.put('/specializations/:id', (req: any, res: any) => {
//   const specializationId = Number(req.params.id);
//   const specializationIndex = specializationsArray.findIndex(s => s.id === specializationId);
//   if (specializationIndex === -1) return res.status(404).send('Specialization not found');
//   specializationsArray[specializationIndex] = { id: specializationId, ...req.body };
//   res.json(specializationsArray[specializationIndex]);
// });

// app.delete('/specializations/:id', (req: Request, res: Response) => {
//   const specializationId = Number(req.params.id);
//   specializationsArray = specializationsArray.filter(s => s.id !== specializationId);
//   res.status(204).send();
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
// export default express;