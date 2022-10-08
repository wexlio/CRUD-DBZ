import mongoose from "mongoose"

const configsSchema = new mongoose.Schema({
    nombreTienda:{
        type: String,
        trim: true,
        require: true,
        default: "Tienda Master"
    },
    imgTienda: {
        public_id: String,
        secure_url: String,
    },
    slogan:{
        type: String,
        trim: true,
        // require: true,
        default: "Tienda Whatsapp, todo lo que buscas está..."
    },
    imgSlogan: {
        public_id: String,
        secure_url: String,
    },
    colorPrincipalPagina:{
        type: String,
        trim: true,
        // require: true,
        default: "#00F"
    },
    imgDisclaimer1: {
        public_id: String,
        secure_url: String,
    },
    imgDisclaimer2: {
        public_id: String,
        secure_url: String,
    },
    footer1:{
        type: String,
        trim: true
    },
    footer2:{
        type: String,
        trim: true
    },
    footer3:{
        type: String,
        trim: true
    },
    divisa:{
        type: String,
        trim: true
    },
    numeroTelefonico:{
        type: Number,
        trim: true
    }
}, {
    timestamps: true
})

export default mongoose.model("Configs", configsSchema, "Configs111")
