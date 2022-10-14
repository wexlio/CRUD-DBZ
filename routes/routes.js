import { Router } from "express";
import { renderProdutForm, createNewProduct, renderProducts, renderEditForm, updateProduct, deleteProducts, renderJsonProducts, updateImgProduct } from "../controllers/index.controllers.js";
import { renderProdutForm2, createNewProduct2, renderProducts2, renderJsonProducts2, renderEditForm2, updateProduct2, deleteProducts2, deleteImgs1, deleteImgs2, deleteImgs3, deleteImgs4, deleteImgs5, deleteImgDescricion1, deleteImgDescricion2, deleteImgDescricion3, deleteImgDescricion4, deleteImgDescricion5 } from "../controllers/products.controllers.js"
import { renderJsonPortadas, renderPortadasForm, createNewPortada, renderPortadas, renderEditPortadaForm, updatePortadas, deletePortadas } from "../controllers/portadas.controllers.js"
import { renderCategoriasForm, createNewCategoria, renderCategorias, renderEditCategoriasForm, updateCategorias, deleteCategorias } from "../controllers/categorias.controllers.js"
import { renderConfigsForm, createNewConfigs, renderConfigs, renderEditConfigsForm, updateConfigs, deleteConfigs } from "../controllers/configs.controllers.js"
import { renderformForm, createNewform, renderform, renderEditformForm, updateform, deleteform } from "../controllers/form.controllers.js"
import { viewPage } from "../controllers/viewPage.controllers.js"
import { viewPedidos, createPedidos, deletePedidos } from "../controllers/pedidos.controllers.js"

const router = Router();

// router.get("/", renderProducts2)

//new products
router.get("/products/add", renderProdutForm)

router.post("/products/add", createNewProduct)

//get all product(s)
router.get("/products", renderProducts)

router.get("/api", renderJsonProducts2)

router.get("/products/add/:id", renderProdutForm)

//edit products
router.get("/products/edit/:id", renderEditForm)

router.put("/products/edit/:id", updateProduct)

router.put("/products/edit/img/:id", updateImgProduct)

//delete products
router.delete("/products/delete/:id", deleteProducts)

//-------------------------------------------------

//New routes styles


// router.get("/", renderProducts2)


router.get("/api2", renderJsonProducts)
//new products
router.get("/products-style/add", renderProdutForm2)

router.post("/products-style/add", createNewProduct2)

//get all product(s)
router.get("/products-style", renderProducts2)

//edit products
router.get("/products/edit-style/:id", renderEditForm2)

router.put("/products/edit-style/:id", updateProduct2)

// router.put("/products/edit/img-style/:id", updateImgProduct2)

// //delete products
router.delete("/products/delete-style/:id", deleteProducts2)

//delete imgs pequeñas en view products
router.delete("/products/imgs1/:id", deleteImgs1)
router.delete("/products/imgs2/:id", deleteImgs2)
router.delete("/products/imgs3/:id", deleteImgs3)
router.delete("/products/imgs4/:id", deleteImgs4)
router.delete("/products/imgs5/:id", deleteImgs5)
router.delete("/products/imgD1/:id", deleteImgDescricion1)
router.delete("/products/imgD2/:id", deleteImgDescricion2)
router.delete("/products/imgD3/:id", deleteImgDescricion3)
router.delete("/products/imgD4/:id", deleteImgDescricion4)
router.delete("/products/imgD5/:id", deleteImgDescricion5)

//ROUTES OF PORTADAS

router.get("/api3", renderJsonPortadas)
//new products
router.get("/portadas-style/add", renderPortadasForm)

router.post("/portadas-style/add", createNewPortada)

//get all product(s)
router.get("/portadas-style", renderPortadas)

//edit products
router.get("/portadas/edit-style/:id", renderEditPortadaForm)

router.put("/portadas/edit-style/:id", updatePortadas)

// router.put("/products/edit/img-style/:id", updateImgProduct2)

// //delete products
router.delete("/portadas/delete-style/:id", deletePortadas)

//ROUTES OF CATEGORIAS

// router.get("/api3", renderJsonCategorias)
//new products
router.get("/categorias-style/add", renderCategoriasForm)

router.post("/categorias-style/add", createNewCategoria)

//get all product(s)
router.get("/categorias-style", renderCategorias)

//edit products
router.get("/categorias/edit-style/:id", renderEditCategoriasForm)

router.put("/categorias/edit-style/:id", updateCategorias)

// router.put("/products/edit/img-style/:id", updateImgProduct2)

// //delete products
router.delete("/categorias/delete-style/:id", deleteCategorias)

//ROUTES OF configs

// router.get("/api3", renderJsonCategorias)
//new configs
router.get("/configs-style/add", renderConfigsForm)

router.post("/configs-style/add", createNewConfigs)

//get all configs(s)
router.get("/configs-style", renderConfigs)

//edit configs
router.get("/configs/edit-style/:id", renderEditConfigsForm)

router.put("/configs/edit-style/:id", updateConfigs)

// router.put("/products/edit/img-style/:id", updateImgProduct2)

// //delete configs
router.delete("/configs/delete-style/:id", deleteConfigs)


// View page 

router.get("/", viewPage)


//view pedidos

router.get("/pedidos", viewPedidos)
router.post("/pedidos", createPedidos)
router.delete("/pedidos/:id", deletePedidos)

// ----------------------------fiin

//view config formularios

router.get("/form-style/add", renderformForm)

router.post("/form-style/add", createNewform)

//get all configs(s)
router.get("/form-style", renderform)

//edit configs
router.get("/form/edit-style/:id", renderEditformForm)

router.put("/form/edit-style/:id", updateform)

// router.put("/products/edit/img-style/:id", updateImgProduct2)

// //delete configs
router.delete("/form/delete-style/:id", deleteform)



export { router }

