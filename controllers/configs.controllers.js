import Configs from "../models/configs.model.js"
import {uploadImage, deleteImage} from "../utils/cloudinary.js"
import fs from "fs-extra"


export async function renderConfigs (req, res) {

    try {
        
        
        const configs = await Configs.find().lean();
        // console.log(req.body, 199)
        // if (configs.nombreTienda == undefined || configs.imgTienda == undefined || configs.slogan == undefined || configs.imgSlogan == undefined || configs.colorPrincipalPagina == undefined) {
            
        //     console.log(configs.colorPrincipalPagina)
        //     res.render("form-configs", { configs })            
        // }
        // else if (configs.nombreTienda != undefined || configs.imgTienda != undefined || configs.slogan != undefined || configs.imgSlogan != undefined || configs.colorPrincipalPagina != undefined) {
            
            res.render("view-configs", { configs })            

        // }
        // console.log(configs.colorPrincipalPagina)


    } catch (error) {
        
        return res.status(500).json({
            "message": error.message
          })

    }

    // res.send("get mostrar configs")

}
export async function renderConfigsForm (req, res) {

    try {

        const configs = await Configs.find().lean();

        // console.log(configs.length, 399)

        if (configs.length <= 0) {
            
            res.render("form-configs")

        }

        else {
            console.log(req.params.id, 777)
            const configs = await Configs.findById(req.params.id).lean()
            // console.log(products.image)
            // console.log(products)
            // console.log(req.files, 200)
            res.render("edit-form-configs", { configs })
        }
        
        
    } catch (error) {
        return res.status(500).json({
            "message": error.message
          })
    }

    // res.send("get mostrar formulario para crear configs")

}
export async function createNewConfigs (req, res) {

    try {
        
        // console.log(req.body)
        // console.log(req.files)

        const { nombreTienda, slogan, colorPrincipalPagina, footer1, footer2, footer3, divisa, numeroTelefonico } = req.body

        const configs = new Configs ({ nombreTienda, slogan, colorPrincipalPagina, footer1, footer2, footer3, divisa, numeroTelefonico })

        if (req.files?.imgTienda) {
            const uploadCloudinary = await uploadImage(req.files.imgTienda.tempFilePath)
            configs.imgTienda = {
                public_id: uploadCloudinary.public_id,
                secure_url: uploadCloudinary.secure_url
            }
            await fs.unlink(req.files.imgTienda.tempFilePath)  
        }

        if (req.files?.imgSlogan) {
            const uploadCloudinary = await uploadImage(req.files.imgSlogan.tempFilePath)
            configs.imgSlogan = {
                public_id: uploadCloudinary.public_id,
                secure_url: uploadCloudinary.secure_url
            }
            await fs.unlink(req.files.imgSlogan.tempFilePath)  
        }
        if (req.files?.imgDisclaimer1) {
            const uploadCloudinary = await uploadImage(req.files.imgDisclaimer1.tempFilePath)
            configs.imgDisclaimer1 = {
                public_id: uploadCloudinary.public_id,
                secure_url: uploadCloudinary.secure_url
            }
            await fs.unlink(req.files.imgDisclaimer1.tempFilePath)  
        }
        if (req.files?.imgDisclaimer2) {
            const uploadCloudinary = await uploadImage(req.files.imgDisclaimer2.tempFilePath)
            configs.imgDisclaimer2 = {
                public_id: uploadCloudinary.public_id,
                secure_url: uploadCloudinary.secure_url
            }
            await fs.unlink(req.files.imgDisclaimer2.tempFilePath)  
        }

        await configs.save();
    
        // console.log(products.image.secure_url)
        // console.log(products.image)
    
        res.redirect("/configs-style")
        
    } catch (error) {
        return res.status(500).json({
            "message": error.message
          })
    }

    // res.send("post crear nueva config")

}
export async function renderEditConfigsForm (req, res) {

    try {
        const configs = await Configs.findById(req.params.id).lean()
        // console.log(products.image)
        // console.log(products)
        // console.log(req.files, 200)
        res.render("edit-form-configs", { configs })
        
    } catch (error) {
        return res.status(500).json({
            "message": error.message
          })
    }

    // res.send("get mostrar formulario para editar configs")

}
export async function updateConfigs (req, res) {

    try {
        const {id} = req.params
        // console.log(req.body)
        // console.log(req.files, 999)
        const configsUpdating = await Configs.findByIdAndUpdate(id, req.body, {
          new: true
        })
    
        
        if (req.files != null) {

            if (configsUpdating.imgTienda?.public_id) {
                const result = await deleteImage(configsUpdating.imgTienda.public_id)
            }
            if (configsUpdating.imgSlogan?.public_id) {
                const result = await deleteImage(configsUpdating.imgSlogan.public_id)
            }
            if (configsUpdating.imgDisclaimer1?.public_id) {
                const result = await deleteImage(configsUpdating.imgDisclaimer1.public_id)
            }
            if (configsUpdating.imgDisclaimer2?.public_id) {
                const result = await deleteImage(configsUpdating.imgDisclaimer2.public_id)
            }

        }
        
        if (req.files?.imgTienda) {

            const uploadCloudinary = await uploadImage(req.files.imgTienda.tempFilePath)
            
            configsUpdating.imgTienda = {
                public_id: uploadCloudinary.public_id,
                secure_url: uploadCloudinary.secure_url
            }
            await fs.unlink(req.files.imgTienda.tempFilePath)
            
        }

        if (req.files?.imgSlogan) {

            const uploadCloudinary = await uploadImage(req.files.imgSlogan.tempFilePath)
            
            configsUpdating.imgSlogan = {
                public_id: uploadCloudinary.public_id,
                secure_url: uploadCloudinary.secure_url
            }
            await fs.unlink(req.files.imgSlogan.tempFilePath)
              
        }

        if (req.files?.imgDisclaimer1) {

            const uploadCloudinary = await uploadImage(req.files.imgDisclaimer1.tempFilePath)
            
            configsUpdating.imgDisclaimer1 = {
                public_id: uploadCloudinary.public_id,
                secure_url: uploadCloudinary.secure_url
            }
            await fs.unlink(req.files.imgDisclaimer1.tempFilePath)
              
        }

        if (req.files?.imgDisclaimer2) {

            const uploadCloudinary = await uploadImage(req.files.imgDisclaimer2.tempFilePath)
            
            configsUpdating.imgDisclaimer2 = {
                public_id: uploadCloudinary.public_id,
                secure_url: uploadCloudinary.secure_url
            }
            await fs.unlink(req.files.imgDisclaimer2.tempFilePath)
              
        }
        
        //--------Actualizar y Guardar productos

        await configsUpdating.save()
    
        res.redirect("/configs-style")
        
    } catch (error) {
        return res.status(500).json({
            "message": error.message
          })
    }

    // res.send("put editar configs")

}
export async function deleteConfigs (req, res) {

    try {
        const eraser = await Configs.findByIdAndDelete(req.params.id)
    
        if (!eraser) return res.status(400).json({
            "message": "Configs does not exists"
          })

        if (eraser.imgTienda?.public_id) {
            const result = await deleteImage(eraser.imgTienda.public_id)
        }
        if (eraser.imgSlogan?.public_id) {
            const result = await deleteImage(eraser.imgSlogan.public_id)
        }
        if (eraser.imgDisclaimer1?.public_id) {
            const result = await deleteImage(eraser.imgDisclaimer1.public_id)
        }
        if (eraser.imgDisclaimer2?.public_id) {
            const result = await deleteImage(eraser.imgDisclaimer2.public_id)
        }

        res.redirect("/configs-style")
        
    } catch (error) {
        return res.status(500).json({
            "message": error.message
          }) 
    }


    // res.send("get mostrar configs")

}

export async function deleteDisclaimer1 (req, res){
    // res.send("borrar imagen peque??a")
    
    try {
        
        const {id} = req.params
        // console.log(req.params)
        console.log(req.files, 999)
        const confingUpdating = await Configs.findByIdAndUpdate(id, req.body, {
          new: true
        })
        
        if (confingUpdating.imgDisclaimer1?.secure_url !== "" && confingUpdating.imgDisclaimer1.public_id) {
            
            const result = await deleteImage(confingUpdating.imgDisclaimer1.public_id)
            console.log(result,226)
            
            confingUpdating.imgDisclaimer1 = {
                public_id: "",
                secure_url: ""
            }
            
            await confingUpdating.save()
        }
        else {
            null
            return console.log("Image litle does not exit")
        } 

        
        console.log(confingUpdating,88)
        
        res.redirect("/configs-style")
        
    } catch (error) {
        return res.status(500).json({
            "message": error.message
        }) 
    }

}


export async function deleteDisclaimer2 (req, res){
    // res.send("borrar imagen peque??a")
    
    try {
        
        const {id} = req.params
        // console.log(req.params)
        console.log(req.files, 999)
        const confingUpdating = await Configs.findByIdAndUpdate(id, req.body, {
          new: true
        })
        
        if (confingUpdating.imgDisclaimer2?.secure_url !== "" && confingUpdating.imgDisclaimer2.public_id) {
            
            const result = await deleteImage(confingUpdating.imgDisclaimer2.public_id)
            console.log(result,226)
            
            confingUpdating.imgDisclaimer2 = {
                public_id: "",
                secure_url: ""
            }
            
            await confingUpdating.save()
        }
        else {
            null
            return console.log("Image litle does not exit")
        } 

        
        console.log(confingUpdating,88)
        
        res.redirect("/configs-style")
        
    } catch (error) {
        return res.status(500).json({
            "message": error.message
        }) 
    }

}

