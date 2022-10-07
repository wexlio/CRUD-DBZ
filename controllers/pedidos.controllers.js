import Pedidos from "../models/pedidos.model.js"
import {uploadImage, deleteImage} from "../utils/cloudinary.js"
import fs from "fs-extra"

export async function viewPedidos (req, res){

    try {
        
        const pedidos = await Pedidos.find().lean()
    
        res.render("pedidos", {pedidos})

    } catch (error) {
        return res.status(500).json({
            "message": error.message
          })
        
    }
    

}

export async function createPedidos (req, res){

    try {
        
        const { 
            nombreCliente, 
            celularCliente, 
            correoCliente,
            direccionCliente,
            referenciaCliente,
            categoriaProducto,
            nombreProducto,
            precioProducto} = req.body;
    
        // console.log(req.files) 
    
        console.log(req.body)
    
        const pedidos = new Pedidos ({
            nombreCliente, 
            celularCliente, 
            correoCliente,
            direccionCliente,
            referenciaCliente,
            categoriaProducto,
            nombreProducto, 
            precioProducto
        })
        
        await pedidos.save();
        
        res.redirect("/pedidos")
        
        
    } catch (error) {
        return res.status(500).json({
            "message": error.message
        })
    }
    
}
export async function deletePedidos (req, res){

    try {
        const eraser = await Pedidos.findByIdAndDelete(req.params.id)

        res.redirect("/pedidos")
        
    } catch (error) {
        return res.status(500).json({
            "message": error.message
          }) 
    }
    

}