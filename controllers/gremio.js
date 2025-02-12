//aqui se hacen las funciones

const ide =1;
const names= "Arkus";
const houses = "Lupus";
const cantidades = 60;
const statuses = 1;

const errorMessages = [];

const { request, response } = require('../app');


 async function AddGremio (request,response){
    
    const{Id,name,house,cantidad,status} = request.body;

    if(Id==ide){
        errorMessages.push("La id ya existe!");
    }
    if(name==names){
        errorMessages.push("El nombre ya existe!");
    }if(house==houses){
        errorMessages.push("La casa ya existe!");
    }if(cantidad==cantidades){
        errorMessages.push("Cantidad ya existe, por probarlo!");
    }if(status==statuses){
        errorMessages.push(" ya esta encendido!");
    }
    if (errorMessages.length) {
        res.status(400).send({
          message: "Bad request",
          details: errorMessages,
        });
      } else {
        response.status(201).send({

            message: "agregado con exito", Id   
         });
        }
}

async function updateName (request,response){
    
    const{name} = request.body;

    if(name==names){
        errorMessages.push("El nombre ya existe!");
    }
    if (errorMessages.length) {
        res.status(400).send({
          message: "Bad request",
          details: errorMessages,
        });
      } else {
        response.status(201).send({

            message: "Nombre Actualizado con exito", Id   
         });
        }
}


async function deleteGremio (request,response){
    
    const{Id,status} = request.body;

    if(Id==ide){
      
            if(status==statuses){
                status=0;
            }else{

                errorMessages.push("Ya se encuentra apagado")
            }
    }else{

        errorMessages.push("Seleccione una Id existente")
    }
    if (errorMessages.length) {
        res.status(400).send({
          message: "Bad request",
          details: errorMessages,
        });
      } else {
        response.status(201).send({

            message: "Eliminado con exito", Id   
         });
        }
}

async function getGremio(request, response) {
    
    const{Id} = request.body;

    if(Id==ide){


    }else{
        errorMessages.push("Seleccione una Id existente")

    }
    if (errorMessages.length) {
        res.status(400).send({
          message: "Bad request",
          details: errorMessages,
        });
      } else {
        response.status(201).send({
            message: "Mostrando datos", Ide,names,casas,cantidades,statuses  
         });
        }

}


module.exports={AddGremio,updateName,deleteGremio,getGremio}