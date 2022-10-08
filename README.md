# CRUD-DBZ
MY FIRST CRUD CREATED BY ME UPDATED WITH CREATIONS OF USUARYS MODIFICING SOME FOLDERS OF CONTROLLERS
modificar ultima linea de models:
	export default mongoose.model("Categoria", categoriaSchema, "breakingDog-categorias")
	export default mongoose.model("Configs", configsSchema, "breakingDog-configs")
	export default mongoose.model("Portada", portadaSchema, "breakingDog-portadas")
	export default mongoose.model("Product", productSchema2, "breakingDog-productos")

modificar linea 13 de cloudinary.js:
	export async function uploadImage(filePath) {
    return await cloudinary.uploader.upload(filePath, {
        folder: "breakingDog-images"
      })
}

variables de entorno:
	CLOUDINARY_API_KEY: 327555282412898
	CLOUDINARY_API_SECRET: R5jLacf9kLAkNiJ718Ns2eBToM4
	CLOUDINARY_CLOUD_NAME: dk5xdo8n1
	MONGODB_URI: mongodb+srv://coneccion1:18692602@cluster0.4wrdhx9.mongodb.net/?retryWrites=true&w=majority
	PORT: 7000
  
  Cambiar los url de public/codigo.js por el url principal de la pagina en cuestion:
  -Lineas 822,838, 7
