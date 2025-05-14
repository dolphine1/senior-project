
const express = require('express');
const { fetchIncidents, reportIncident } = require('../controllers/incidentController');

const router = express.Router();

/**
 * export a function that takes a PostgreSQL pool as parameter.
 * This allows us to inject the database connection into the request object,
 * so controllers can use it without having to import or recreate the pool.
 */
module.exports = (pool) => {
    // Middleware to inject pool into request object
    router.use((req, res, next) => {
        req.pool = pool;
        next();
    });

    // GET /api/incidents - Fetch all incidents
    router.get('/', async (req, res) => {
        try {
            await fetchIncidents(req, res);
        } catch (error) {
            console.error("Error in GET /api/incidents:", error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    });

    // POST /api/incidents - Report a new incident
    router.post('/', async (req, res) => {
        try {
            await reportIncident(req, res);
        } catch (error) {
            console.error("Error in POST /api/incidents:", error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    });

    return router;
};
