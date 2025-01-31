controllers/estudiantes

const getAllEstudiantes = async(req, res) => {
 res.status(200).json({
    status: 200,
    message: "Hello from Server"

 })
}
module.exports = {getAllEstudiantes}