
const express = require('express');

const gremios = [
    {
        id: 1,
        nombre: 'Gremio de Magos',
        casas: ['Casa de Fuego', 'Casa de Agua'],
        cantidad: 50,
        status: 'activo',
        miembros: ['Merlin', 'Gandalf']
    },
    {
        id: 2,
        nombre: 'Gremio de Guerreros',
        casas: ['Casa de Espadas', 'Casa de Escudos'],
        cantidad: 75,
        status: 'activo',
        miembros: ['Conan', 'Xena']
    }
];

const getGremios = (req, res) => {
    try {
        res.json(gremios);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
};

const getGremioById = (req, res) => {
    try {
        const gremio = gremios.find(g => g.id === parseInt(req.params.id));
        if (gremio) {
            res.json(gremio);
        } else {
            res.status(404).send('Gremio not found');
        }
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
};

const createGremio = (req, res) => {
    try {
        const { id, nombre, casas, cantidad, status } = req.body;
        if (!id || !nombre || !casas || !cantidad || !status) {
            return res.status(400).send('Bad Request: Missing required fields');
        }
        const newGremio = { id, nombre, casas, cantidad, status, miembros: [] };
        gremios.push(newGremio);
        res.status(201).json(newGremio);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
};

const updateGremioById = (req, res) => {
    try {
        const gremio = gremios.find(g => g.id === parseInt(req.params.id));
        if (gremio) {
            Object.assign(gremio, req.body);
            res.json(gremio);
        } else {
            res.status(404).send('Gremio not found');
        }
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
};

const deleteGremioById = (req, res) => {
    try {
        const index = gremios.findIndex(g => g.id === parseInt(req.params.id));
        if (index !== -1) {
            const deletedGremio = gremios.splice(index, 1);
            res.json(deletedGremio);
        } else {
            res.status(404).send('Gremio not found');
        }
    } catch (error) {
        res.status(500).send('Internal Server Error');
const addGremioMember = (req, res) => {
    try {
        const gremio = gremios.find(g => g.id === parseInt(req.params.id));
        if (gremio) {
            if (!req.body.miembro) {
                return res.status(400).send('Bad Request: Missing miembro field');
            }
            gremio.miembros.push(req.body.miembro);
            res.json(gremio);
        } else {
            res.status(404).send('Gremio not found');
        }
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
};
        res.status(500).send('Internal Server Error');
    }
};

const app = express();
app.use(express.json());

app.get('/gremios', getGremios);
app.get('/gremios/:id', getGremioById);
app.post('/gremios', createGremio);
app.put('/gremios/:id', updateGremioById);
app.delete('/gremios/:id', deleteGremioById);
app.post('/gremios/:id/miembros', addGremioMember);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
