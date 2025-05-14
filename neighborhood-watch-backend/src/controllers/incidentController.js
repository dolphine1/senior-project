const { getIncidents, createIncident } = require('../models/incidentModel');

const fetchIncidents = async (req, res) => {
    try {
        const incidents = await getIncidents(req.pool);
        res.status(200).json(incidents);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch incidents' });
    }
};

const reportIncident = async (req, res) => {
    try {
        const incident = await createIncident(req.pool, req.body);
        res.status(201).json(incident);
    } catch (error) {
        res.status(500).json({ error: 'Failed to report incident' });
    }
};

module.exports = {
    fetchIncidents,
    reportIncident,
};
