const hechiceros = [
{
    id: 1,
    nombre: "Gandalf",
    direccion: "Middle Earth",
    magia: "White Magic",
    nivelpoder: 100,
    status: "activo"
},
{
    id: 2,
    nombre: "Merlin",
    direccion: "Camelot",
    magia: "Elemental Magic",
    nivelpoder: 95,
    status: "activo"
},
{
    id: 3,
    nombre: "Saruman",
    direccion: "Isengard",
    magia: "Dark Magic",
    nivelpoder: 90,
    status: "inactivo"
}];


function addMembers(id, miembro) {
    const gremio = gremios.find(gremio => gremio.id === id);
    if (gremio) {
        gremio.miembros.push(miembro);
        return gremio;
    }
    return null;
}

function addHechicero(id, nombre, direccion, magia, nivelpoder, status) {
    const hechicero = { id, nombre, direccion, magia, nivelpoder, status };
    hechiceros.push(hechicero);
    return hechicero;
}

function updateHechicero(id, updatedHechicero) {
    const index = hechiceros.findIndex(hechicero => hechicero.id === id);
    if (index !== -1) {
        hechiceros[index] = { ...hechiceros[index], ...updatedHechicero };
        return hechiceros[index];
    }
    return null;
}

function deactivateHechicero(id) {
    const hechicero = hechiceros.find(hechicero => hechicero.id === id);
    if (hechicero) {
        hechicero.status = "inactivo";
        return hechicero;
    }
    return null;
}

function searchAllHechiceros() {
    return hechiceros;
}

function searchHechiceroById(id) {
    return hechiceros.find(hechicero => hechicero.id === id) || null;
}

function searchHechicerosByStatus(status) {
    return hechiceros.filter(hechicero => hechicero.status === status);
}

module.exports = {
    addMembers,
    addHechicero,
    updateHechicero,
    deactivateHechicero,
    searchAllHechiceros,
    searchHechiceroById,
    searchHechicerosByStatus
};
