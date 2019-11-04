var express = require("express") 
var router = express.Router();
var Register = require("../models/Register")

router.get("/register",function(request,response,next){
    console.log(request);

    Register.find((error,registers)=>{

        if(error) return response.status(500).json({message:"Sorry bro hubo un error interno del sistema"})
        
        if(registers){
            response.status(200).json(registers)
        }else{
            response.status(404).json({message: "no registros"});
        }

    });
    

});

module.exports = router