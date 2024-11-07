import controller from './controller.js'; 
import express from 'express';
const app = express();
const router = express.Router();

// Define the routes with error handling and improved response method
router.route("/").get((req, res) => {
    try {
        // Call the controller if needed
        controller(req, res);
    } catch (error) {
        console.error("Error occurred:", error);
        res.status(500).send('Internal Server Error');
    }
});

// Use the app to start the server
app.use(router);
app.listen(3000, () => {
    console.log('Server started on port 3000');
});

// Export the router
module.exports = router;
