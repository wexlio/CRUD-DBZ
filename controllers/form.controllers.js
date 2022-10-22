import Form from "../models/form.model.js"
import {uploadImage, deleteImage} from "../utils/cloudinary.js"
import fs from "fs-extra"


export async function renderform (req, res) {

    try {
        
        const forms = await Form.find().lean();

            
            res.render("view-form-clientes", { forms })            

        // console.log(configs.colorPrincipalPagina)
        // res.send("ver configs de forms")

    } catch (error) {
        
        return res.status(500).json({
            "message": error.message
          })

    }

    // res.send("get mostrar configs")

}
export async function renderformForm (req, res) {

    try {

        const forms = await Form.find().lean();

        // console.log(configs.length, 399)

        if (forms.length <= 0) {
            
            res.render("form-form")

        }

        else {
            // console.log(req.params.id, 777)
            const forms = await Form.findById(req.params.id).lean()
            // console.log(products.image)
            // console.log(products)
            // console.log(req.files, 200)
            res.render("edit-form-form", { forms })
            // res.send("Editar primeras confogs de form")
        }
        
        
    } catch (error) {
        return res.status(500).json({
            "message": error.message
          })
    }

    // res.send("get mostrar formulario para crear configs")

}
export async function createNewform (req, res) {

    try {
        
        const { nombreCliente, celularCliente, correoCliente, direccionCliente, referenciaCliente, botonAntes, botonFinal } = req.body

        const forms = new Form ({ nombreCliente, celularCliente, correoCliente, direccionCliente, referenciaCliente, botonAntes, botonFinal })

        await forms.save();
    
        // console.log(products.image.secure_url)
        // console.log(products.image)
    
        res.redirect("/form-style")

        // res.send("ver formularios configs")
        
    } catch (error) {
        return res.status(500).json({
            "message": error.message
          })
    }

    // res.send("post crear nueva config")

}
export async function renderEditformForm (req, res) {

    try {
        const forms = await Form.findById(req.params.id).lean()
//         // console.log(products.image)
//         // console.log(products)
//         // console.log(req.files, 200)
         res.render("edit-form-form", { forms })
        
     } catch (error) {
         return res.status(500).json({
             "message": error.message
           })
     }

//     // res.send("get mostrar formulario para editar configs")

}
export async function updateform (req, res) {

     try {
        const {id} = req.params
        // console.log(req.body)
        // console.log(req.files, 999)
        const formsUpdating = await Form.findByIdAndUpdate(id, req.body, {
          new: true
        })
          
        //--------Actualizar y Guardar productos

        await formsUpdating.save()
    
        res.redirect("/form-style")
        // res.send("editar forms")
        
    } catch (error) {
        return res.status(500).json({
            "message": error.message
          })
    }

    // res.send("put editar configs")

}

export async function deleteform (req, res) {

    try {
        const eraser = await Form.findByIdAndDelete(req.params.id)
    
        if (!eraser) return res.status(400).json({
            "message": "Forms does not exists"
          })

        res.redirect("/form-style")
        
        // res.send("delete forms")

    } catch (error) {
        return res.status(500).json({
            "message": error.message
          }) 
    }


    // res.send("get mostrar configs")

}




