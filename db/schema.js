const { Client } = require('pg');

const client = new Client({
   _id:ObjectId(),
    names: String,
    houses: String,
    cantidades: Int32Array,
    statuses: Boolean,
});

client.connect()
    .then(() => console.log('Connected to the database'))
    .catch(err => console.error('Connection error', err.stack));

const insertData = async (table, data) => {
    const keys = Object.keys(data).join(', ');
    const values = Object.values(data);
    const placeholders = values.map((_, i) => `$${i + 1}`).join(', ');

    const query = `INSERT INTO ${table} (${keys}) VALUES (${placeholders}) RETURNING *`;

    try {
        const res = await client.query(query, values);
        console.log('Data inserted:', res.rows[0]);
    } catch (err) {
        console.error('Error inserting data', err.stack);
    }
};

const data = {
    column1: 'value1',
    column2: 'value2',
};

insertData('your_table', data);
const newData = {
    _id:ObjectId(),
    names: String,
    houses: String,
    cantidades: Int32Array,
    statuses: Boolean,
};

insertData('your_table', newData);