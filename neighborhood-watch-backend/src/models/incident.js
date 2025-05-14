const getIncidents = async (pool) => {
    const res = await pool.query('SELECT * FROM incidents ORDER BY created_at DESC');
    return res.rows;
};

const createIncident = async (pool, incident) => {
    const { location, time, nature } = incident;
    const res = await pool.query(
        'INSERT INTO incidents (location, time, nature) VALUES ($1, $2, $3) RETURNING *',
        [location, time, nature]
    );
    return res.rows[0];
};

module.exports = {
    getIncidents,
    createIncident,
};
