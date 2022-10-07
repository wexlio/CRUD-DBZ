import mongoose from "mongoose"

const pedidosSchema = new mongoose.Schema({
    nombreCliente:{
        type: String,
        trim: true,
        // require: true,
        default: "ostrador"
    },
    celularCliente:{
        type: Number,
        trim: true,
        // require: true,
        default: "999999999"
    },
    correoCliente:{
        type: String,
        trim: true,
        // require: true,
        default: "ecommerci@gmail.com"
    },
    direccionCliente:{
        type: String,
        trim: true,
        // require: true,
        default: "mzb lote10"
    },
    referenciaCliente:{
        type: String,
        trim: true,
        // require: true,
        default: "arco naranja"
    },
    categoriaProducto:{
        type: String,
        trim: true,
        // require: true,
        default: "Dbz"
    },
    nombreProducto:{
        type: String,
        trim: true,
        // require: true,
        default: "goku ssj2"
    },
    precioProducto:{
        type: Number,
        trim: true,
        // require: true,
        default: "777"
    }
}, {
    timestamps: true
})

export default mongoose.model("Pedidos", pedidosSchema, "Pedidos111")
