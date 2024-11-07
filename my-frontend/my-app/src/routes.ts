import express, { Router, Request, Response } from 'express';  // Import express
import { getUniversitiesTesting, getUniversities } from './controller.js';

// Simplify routing without custom interface
const router: Router = express.Router();

// Define routes directly
router.get("/", getUniversities);
router.get("/another-route", getUniversitiesTesting);

// Example of defining routes with a custom handler
const routes = [
    {
        path: '/custom',  // Changed to a unique path to avoid conflict
        method: 'get',
        handler: (req: Request, res: Response) => {
            res.status(200).send('universities'); // Corrected the way to send response
        }
    }
];

routes.forEach(route => {
  if (route.method in router) {
    (router as any)[route.method](route.path, route.handler);
  } else {
    throw new Error(`Invalid method: ${route.method}`);
  }
});
// Exporting the router
export default router;
