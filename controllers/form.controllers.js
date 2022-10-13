import Form from "../models/form.model.js"
import {uploadImage, deleteImage} from "../utils/cloudinary.js"
import fs from "fs-extra"


export async function renderform (req, res) {

    try {
        
        // const forms = await Form.find().lean();

            
        //     res.render("view-form-clientes", { configs })            

        // console.log(configs.colorPrincipalPagina)
        res.send("ver configs de forms")

    } catch (error) {
        
        return res.status(500).json({
            "message": error.message
          })

    }

    // res.send("get mostrar configs")

}
export async function renderformForm (req, res) {

    try {

        // const forms = await Form.find().lean();

        // // console.log(configs.length, 399)

        // if (configs.length <= 0) {
            
        //     res.render("form-configs")

        // }

        // else {
        //     console.log(req.params.id, 777)
        //     const configs = await Configs.findById(req.params.id).lean()
        //     // console.log(products.image)
        //     // console.log(products)
        //     // console.log(req.files, 200)
        //     res.render("edit-form-configs", { configs })
        // }
        
        res.send("")
        
    } catch (error) {
        return res.status(500).json({
            "message": error.message
          })
    }

    // res.send("get mostrar formulario para crear configs")

}
export async function createNewform (req, res) {

    try {
        
        // console.log(req.body)
        // console.log(req.files)

        // const { nombreTienda, slogan, colorPrincipalPagina, footer1, footer2, footer3, divisa, numeroTelefonico } = req.body

        // const configs = new Configs ({ nombreTienda, slogan, colorPrincipalPagina, footer1, footer2, footer3, divisa, numeroTelefonico })

        // if (req.files?.imgTienda) {
        //     const uploadCloudinary = await uploadImage(req.files.imgTienda.tempFilePath)
        //     configs.imgTienda = {
        //         public_id: uploadCloudinary.public_id,
        //         secure_url: uploadCloudinary.secure_url
        //     }
        //     await fs.unlink(req.files.imgTienda.tempFilePath)  
        // }

        // if (req.files?.imgSlogan) {
        //     const uploadCloudinary = await uploadImage(req.files.imgSlogan.tempFilePath)
        //     configs.imgSlogan = {
        //         public_id: uploadCloudinary.public_id,
        //         secure_url: uploadCloudinary.secure_url
        //     }
        //     await fs.unlink(req.files.imgSlogan.tempFilePath)  
        // }
        // if (req.files?.imgDisclaimer1) {
        //     const uploadCloudinary = await uploadImage(req.files.imgDisclaimer1.tempFilePath)
        //     configs.imgDisclaimer1 = {
        //         public_id: uploadCloudinary.public_id,
        //         secure_url: uploadCloudinary.secure_url
        //     }
        //     await fs.unlink(req.files.imgDisclaimer1.tempFilePath)  
        // }
        // if (req.files?.imgDisclaimer2) {
        //     const uploadCloudinary = await uploadImage(req.files.imgDisclaimer2.tempFilePath)
        //     configs.imgDisclaimer2 = {
        //         public_id: uploadCloudinary.public_id,
        //         secure_url: uploadCloudinary.secure_url
        //     }
        //     await fs.unlink(req.files.imgDisclaimer2.tempFilePath)  
        // }

        // await configs.save();
    
        // // console.log(products.image.secure_url)
        // // console.log(products.image)
    
        // res.redirect("/configs-style")

        res.send("ver formularios configs")
        
    } catch (error) {
        return res.status(500).json({
            "message": error.message
          })
    }

    // res.send("post crear nueva config")

}
export async function renderEditformForm (req, res) {

    try {
//         const configs = await Configs.findById(req.params.id).lean()
//         // console.log(products.image)
//         // console.log(products)
//         // console.log(req.files, 200)
         res.render("edit-form-configs", { configs })
        
     } catch (error) {
         return res.status(500).json({
             "message": error.message
           })
     }

//     // res.send("get mostrar formulario para editar configs")

}
export async function updateform (req, res) {

     try {
//         const {id} = req.params
//         // console.log(req.body)
//         // console.log(req.files, 999)
//         const configsUpdating = await Configs.findByIdAndUpdate(id, req.body, {
//           new: true
//         })
    
        
//         if (req.files != null) {

//             if (configsUpdating.imgTienda?.public_id) {
//                 const result = await deleteImage(configsUpdating.imgTienda.public_id)
//             }
//             if (configsUpdating.imgSlogan?.public_id) {
//                 const result = await deleteImage(configsUpdating.imgSlogan.public_id)
//             }
//             if (configsUpdating.imgDisclaimer1?.public_id) {
//                 const result = await deleteImage(configsUpdating.imgDisclaimer1.public_id)
//             }
//             if (configsUpdating.imgDisclaimer2?.public_id) {
//                 const result = await deleteImage(configsUpdating.imgDisclaimer2.public_id)
//             }

//         }
        
//         if (req.files?.imgTienda) {

//             const uploadCloudinary = await uploadImage(req.files.imgTienda.tempFilePath)
            
//             configsUpdating.imgTienda = {
//                 public_id: uploadCloudinary.public_id,
//                 secure_url: uploadCloudinary.secure_url
//             }
//             await fs.unlink(req.files.imgTienda.tempFilePath)
            
//         }

//         if (req.files?.imgSlogan) {

//             const uploadCloudinary = await uploadImage(req.files.imgSlogan.tempFilePath)
            
//             configsUpdating.imgSlogan = {
//                 public_id: uploadCloudinary.public_id,
//                 secure_url: uploadCloudinary.secure_url
//             }
//             await fs.unlink(req.files.imgSlogan.tempFilePath)
              
//         }

//         if (req.files?.imgDisclaimer1) {

//             const uploadCloudinary = await uploadImage(req.files.imgDisclaimer1.tempFilePath)
            
//             configsUpdating.imgDisclaimer1 = {
//                 public_id: uploadCloudinary.public_id,
//                 secure_url: uploadCloudinary.secure_url
//             }
//             await fs.unlink(req.files.imgDisclaimer1.tempFilePath)
              
//         }

//         if (req.files?.imgDisclaimer2) {

//             const uploadCloudinary = await uploadImage(req.files.imgDisclaimer2.tempFilePath)
            
//             configsUpdating.imgDisclaimer2 = {
//                 public_id: uploadCloudinary.public_id,
//                 secure_url: uploadCloudinary.secure_url
//             }
//             await fs.unlink(req.files.imgDisclaimer2.tempFilePath)
              
//         }
        
//         //--------Actualizar y Guardar productos

//         await configsUpdating.save()
    
//         res.redirect("/configs-style")
        res.send("editar forms")
        
    } catch (error) {
        return res.status(500).json({
            "message": error.message
          })
    }

    // res.send("put editar configs")

}

export async function deleteform (req, res) {

    try {
        // const eraser = await Configs.findByIdAndDelete(req.params.id)
    
        // if (!eraser) return res.status(400).json({
        //     "message": "Configs does not exists"
        //   })

        // if (eraser.imgTienda?.public_id) {
        //     const result = await deleteImage(eraser.imgTienda.public_id)
        // }
        // if (eraser.imgSlogan?.public_id) {
        //     const result = await deleteImage(eraser.imgSlogan.public_id)
        // }
        // if (eraser.imgDisclaimer1?.public_id) {
        //     const result = await deleteImage(eraser.imgDisclaimer1.public_id)
        // }
        // if (eraser.imgDisclaimer2?.public_id) {
        //     const result = await deleteImage(eraser.imgDisclaimer2.public_id)
        // }

        // res.redirect("/configs-style")
        
        res.send("delete forms")

    } catch (error) {
        return res.status(500).json({
            "message": error.message
          }) 
    }


    // res.send("get mostrar configs")

}




