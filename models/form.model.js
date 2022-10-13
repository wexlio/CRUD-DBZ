import mongoose from "mongoose"


const formSchema = new mongoose.Schema({
    nombreCliente:{
        type: String,
        trim: true,
        require: true
    },
    celularCliente: {
        type: Number,
        trim: true
    },
    correoCliente:{
        type: String,
        trim: true
    },
    direccionCliente: {
        type: String,
        trim: true
    },
    referenciaCliente:{
        type: String,
        trim: true
    }
}, {
    timestamps: true
})

export default mongoose.model("Form", formSchema, "Form111")
