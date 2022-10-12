//----inicio del fecht para traer el objeto de google sheets
// https://d3c6bcc0-45d1-4736-8bb5-ac2c75e20ae8.id.repl.co/api2
// http://localhost:3001/api2

// const { time } = require("console");

fetch("http://localhost:3001/api2")
	.then(res=>res.json())
	.then(res=>mostrarData(res));

const mostrarData = (res) =>{
  console.log(res);
  // console.log(res[0][1].nombre);
  // console.log(res[0][0].precio);
  // console.log(res[2][0].textoPortada1);
  // console.log(res[2].length);

  // nombre pestaña tienda
  const title = document.getElementById("title")
  title.innerHTML = `${res[3][0].nombreTienda}`
const encabezado = document.getElementById("encabezadoPage")

encabezado.innerHTML = `${res[3][0].nombreTienda}`
  // ---------color de pagina inicio---
  const style = document.documentElement.style;

  style.setProperty("--color-primario", res[3][0].colorPrincipalPagina);
  style.setProperty("--valor-portada", res[2].length + "00%");

  // ---------color de pagina fin---

  // -----------INICIO HEADER IMAGENES PORTADA Y LOGO
  // for (var i = 0; i < res[2].length; i++) {
  //   const slider123 = document.getElementById("slider123");
  //   slider123.innerHTML += `<div class="slider-seccion" id="slider-seccion">
	// 	 					<h2 id="titulos-portada">${res[2][i].textoPortada1}</h2>
	// 	 					<img src="${res[2][i].imgPortada1.secure_url}" id="slider-img">
	// 	 				</div>`;
  // }

  const footer1 = res[3][0].footer1
  const footer2 = res[3][0].footer2
  const footer3 = res[3][0].footer3
  const divisa = res[3][0].divisa

        const mostrarFooter1 = document.getElementById("footer21")
        const mostrarFooter2 = document.getElementById("footer22")
        const mostrarFooter3 = document.getElementById("footer23")
        const mostrar1Footer1 = document.querySelector(".footer21")
        const mostrar1Footer2 = document.querySelector(".footer22")
        const mostrar1Footer3 = document.querySelector(".footer23")

        footer1 != "" ? mostrar1Footer1.innerHTML = footer1 : mostrarFooter1.remove()
        footer2 != "" ? mostrar1Footer2.innerHTML = footer2 : mostrarFooter2.remove()
        footer3 != "" ? mostrar1Footer3.innerHTML = footer3 : mostrarFooter3.remove()


  res[2].forEach(element => {
    const slider123 = document.getElementById("slider123");
    slider123.innerHTML += `<div class="slider-seccion" id="slider-seccion">
		 					<h2 id="titulos-portada">${element.textoPortada1}</h2>
              <div class="imgPortada55">
		 					  <img src="${element.imgPortada1.secure_url}" id="slider-img">
              </div>
		 				</div>`;
  }); 

  const containerSlider = document.getElementById("container-slider");

  containerSlider.innerHTML += `
			 		<div class="slider-boton slider-boton-derecha" id="slider-boton-derecha">></div>
		 			<div class="slider-boton slider-boton-izquierda" id="slider-boton-izquierda"><</div>`;

  const header = document.getElementById("header");

  header.innerHTML += `
		<div class="logo-principal">
		 	<div class="grid-item">
		 		<img src="${res[3][0].imgTienda.secure_url}" id="logo">
		 	</div>
		 	<div class="grid-item" id="caja3">
		 		<h4 class="nombre-tienda">${res[3][0].nombreTienda}</h4>
		 		<div id="coñaso">
			 		<img src="${res[3][0].imgSlogan.secure_url}" id="what">
			 		<p class="bbb">${res[3][0].slogan}</p>	 				
		 		</div>
		 	</div>
		</div>	`;

  // -----------fiN PORTADA LOGO HEADER

  //----CATEGORIAS

  // for (var i = 0; i < res[1].length; i++) {
  //   const aside = document.getElementById("aside");
  //   aside.style.gridTemplateColumns = "repeat(k, 100px)";
  //   aside.innerHTML += `<div class="">
	// 		<img class="categoria ${res[1][i].textoCategoria} ${i}" src="${
  //     res[1][i].imgCategoria.secure_url
  //   }" id="categotia${i}">
	// 		<h6>${res[1][i].textoCategoria}</h6>
	// </div>`;
  // }
  res[1].forEach(element => {
    const aside = document.getElementById("aside");
    aside.style.gridTemplateColumns = "repeat(k, 100px)";
    aside.innerHTML += `<div class="categorys">
			<img class="categoria ${element.textoCategoria}" src="${
        element.imgCategoria.secure_url
    }" id="categotia">
			<h6>${element.textoCategoria}</h6>
	</div>`;
  }); 
  // -------------------categorias fiN------------------

  // ----Mostrar primeros productos i
  let a = 1;

  res[0].forEach(element => {
    const main = document.getElementById("main");
    if (element.categoria === res[1][0].textoCategoria) {
      main.innerHTML += `<div class="hover ordenar-altura" value="producto${a}" id="fotos">
				<div class="slider" id="fotos">
					<img class="${a - 1} redirect imgs ostia ${
            element.imagen1.secure_url
      } ${element._id}" src="${element.imagen1.secure_url}" id="redirect">
						<div class="liga-descuento"></div>
				</div>	
				<p class="${a - 1}redirect pila ostia" id="redirect">${
          element.nombre
      }</p>
				<b class="flexito redirect" id="redirect">
					<h4 class="precio redirect" id="redirect">${divisa} ${
            element.precio
      }</h4>
					<button class="boton111 0 ${element.imagen1.secure_url} ${element._id}" type="button">Ver detalles</button>
				</b>	
			</div>`;
    } else {
      null;
    }
  }); 
  // ------F-----
  // -------iNICIO SLIDER PORTADA-----

  const slider123 = document.querySelector("#slider123");
  let sliderSection = document.querySelectorAll(".slider-seccion");
  let sliderSectionLast = sliderSection[sliderSection.length - 1];

  const btnIzquierda = document.querySelector("#slider-boton-izquierda");
  const btnDerecha = document.querySelector("#slider-boton-derecha");

  slider123.insertAdjacentElement("afterbegin", sliderSectionLast);

  function Next() {
    let sliderSectionFirts = document.querySelectorAll(".slider-seccion")[0];
    slider123.style.marginLeft = "-200%";
    slider123.style.transition = "all 0.5s";
    setTimeout(function () {
      slider123.style.transition = "none";
      slider123.insertAdjacentElement("beforeend", sliderSectionFirts);
      slider123.style.marginLeft = "-100%";
    }, 500);
  }

  function Prev() {
    let sliderSection = document.querySelectorAll(".slider-seccion");
    let sliderSectionLast = sliderSection[sliderSection.length - 1];
    slider123.style.marginLeft = "0";
    slider123.style.transition = "all 0.5s";
    setTimeout(function () {
      slider123.style.transition = "none";
      slider123.insertAdjacentElement("afterbegin", sliderSectionLast);
      slider123.style.marginLeft = "-100%";
    }, 500);
  }

  btnDerecha.addEventListener("click", function () {
    Next();
  });

  btnIzquierda.addEventListener("click", function () {
    Prev();
  });

  setInterval(function () {
    Next();
  }, 6000);

  // console.log(data[0].length);

  // -------FIN SLIDER PORTADA-----

  //-----MANDAR A SUBPAGINA DETALLES DE PRODUCTOS-------

  window.addEventListener("click", function (e) {
    console.log(e.target);
    let z = e.target;
    const v = z.classList.item(0);
    const tt = z.classList.item(1);
    const yy = z.classList.item(2);

    let cerrar = document.querySelectorAll(".cerrar-modal")[0];
    let abrir = document.querySelectorAll(".boton")[0];
    let modal = document.querySelectorAll(".modal")[0];
    let modalC = document.querySelectorAll(".modal-container")[0];
    let btnEnviar = document.getElementById("btn-enviar11");
    console.log(btnEnviar);

    if (v === "boton111") {
      localStorage.setItem("imagenPrincipal", tt);
      localStorage.setItem("imagenPrincipal2", yy);

      // location.href = "form.html";
    }
  });

  //-----MANDAR A SUBPAGINA DETALLES DE PRODUCTOS FIN----

  //---CREACION DE PRODUCTOS DINAMICOS POR CATEGORIA I----
  const fragmento = document.createDocumentFragment();
  const main = document.getElementById("main");
  function Borrar() {
    const main = document.getElementById("main");
    const fragmento = document.createDocumentFragment();
    const hijos = main.children;

    let hijo = "";
    for (hijo of hijos) {
      console.log(hijo);
      hijo.remove();
    }

    for (hijo of hijos) {
      console.log(hijo);
      hijo.remove();
    }

    for (hijo of hijos) {
      console.log(hijo);
      hijo.remove();
    }

    for (hijo of hijos) {
      console.log(hijo);
      hijo.remove();
    }

    for (hijo of hijos) {
      console.log(hijo);
      hijo.remove();
    }
  }

  window.addEventListener("click", async function (e) {
    console.log(e.target);
    let x = e.target;
    const y = x.classList.item(0);
    console.log(x);
    console.log(y);
    const main = document.getElementById("main");
    var divs = main.getElementsByTagName("div");
    console.log(divs.length);
    if (y == "categoria") {
      const a = x.classList.item(1);
      const b = x.classList.item(2);
      console.log(a);
      console.log(b);

      Borrar();


      await res[0].forEach(element => {
        const item = document.createElement("P");
        if (element.categoria == a) {
          item.innerHTML += `<div class="hover ordenar-altura" value="producto${a}" id="fotos">
							<div class="slider" id="fotos">
								<img class="${b} redirect imgs ostia ${
                  element.imagen1.secure_url
          } ${element._id}" src="${element.imagen1.secure_url}" id="redirect">
									<div class="liga-descuento"></div>
							</div>	
							<p class="${b} redirect pila ostia" id="redirect">${
                element.nombre
          }</p>
							<b class="flexito redirect" id="redirect">
								<h4 class="precio redirect" id="redirect">${divisa} ${
                  element.precio
          }</h4>
								<button class="boton111 0 ${element.imagen1.secure_url} ${element._id}" type="button">Ver detalles</button>
							</b>	
						</div>`;
          fragmento.appendChild(item);
        }
        main.appendChild(fragmento);
      }); 
    }
  });

  //---CREACION DE PRODUCTOS DINAMICOS POR CATEGORIA FIN----

  //----ENVIO A DETALLE DE PRODUCTOS I----

  window.addEventListener("click", function (e) {
    console.log(e.target);
    let select = e.target;
    const classSelect1 = select.classList.item(1);
    console.log(classSelect1);

    const classSelect2 = select.classList.item(2);
    console.log(classSelect2);

    const classSelect3 = select.classList.item(0);
    console.log(classSelect3);

    const classSelect4 = select.classList.item(4);
    console.log(classSelect4);

    if (classSelect1 == "redirect") {
      if (classSelect2 == "pila") {
        var nextHermano = select.nextElementSibling;
        var hijoNextHermano = nextHermano.firstElementChild;
        localStorage.setItem("imagenPrincipal", classSelect3);
        localStorage.setItem("imagenPrincipal2", classSelect4);
        localStorage.setItem("producto", select.textContent);
        localStorage.setItem("precio", hijoNextHermano.textContent);

        // console.log(hijoNextHermano.textContent.substr(3));
        // location.href = "form.html";
      } else if (classSelect2 == "imgs") {
        var padreSelect = select.parentElement;
        var hermanoPadreSelect = padreSelect.nextElementSibling;
        var hermano2HermanoPadreSelect = hermanoPadreSelect.nextElementSibling;
        var hijoHermano2HermanoPadreSelect =
          hermano2HermanoPadreSelect.firstElementChild;
        localStorage.setItem("imagenPrincipal", classSelect3);
        localStorage.setItem("imagenPrincipal2", classSelect4);
        localStorage.setItem("producto", hermanoPadreSelect.textContent);
        localStorage.setItem(
          "precio",
          hijoHermano2HermanoPadreSelect.textContent
        );

        // location.href = "form.html";
      }
    }

    localStorage.setItem("arregloMadre", JSON.stringify(res))

  });

  //----ENVIO A DETALLE DE PRODUCTOS FIN----




//-----Estilos miniaturas de galeria-I-----

//-----Estilos miniaturas de galeria-FIN-----

//----FIN DE FIN----
//** */
//PRUEBAS PRODUCTS
// const products = document.getElementById("redirect");
// const products2 = document.querySelector(".container-images");
// const productsDetails = document.getElementById("container-delatils-products");
// productsDetails.style.transform = "translateY(-9000000%)";


window.addEventListener("click", function(e){
  console.log(document.URL)
  console.log(e.target)
  const select = e.target
  const classSelect1 = select.classList.item(5);
  console.log(classSelect1)
  const classSelect2 = select.classList.item(3);
  console.log(classSelect2)
  const cerrarModal = select.classList.item(0);
  console.log(cerrarModal)
  const disclaimer11 = res[3][0].imgDisclaimer1.secure_url
  const disclaimer12 = res[3][0].imgDisclaimer2.secure_url

  
  res[0].forEach(element=>{
    if (element._id == classSelect1 || element._id == classSelect2) {
      
      console.log(element.nombre)
      
      
      const productsTotales = document.getElementById("container-delatils-products");
      productsTotales.innerHTML = 
      `

        <div class="cerrar-modal">X</div>

        <div class="container-delatils-products-modal" id="container-delatils-products-modal">
        
          <div class="grids container-images" id="container-images">

              <div class="image-principal" id="image-principal">
                <img src="${element.imagen1.secure_url}" alt="" class="imagen1">
              </div>

              <div class="image-secondary">
                <img src="${element.imagen1.secure_url}" alt="" class="img-sec imagen1">
                <img src="${element.imagen2?.secure_url}" alt="" class="img-sec imagen2">
                <img src="${element.imagen3?.secure_url}" alt="" class="img-sec imagen3">
                <img src="${element.imagen4?.secure_url}" alt="" class="img-sec imagen4">
              </div>
              
          </div>

          <div class="grids container-subdetails">

              <h1 class="sub subdetails-titulo" id="textNombre11">${element.nombre}</h1>
                
              <h2 class="sub subdetails-estrellas" id="estrellas">⭐⭐⭐⭐⭐</h2>
        
              <div id="preciasos">
               
                  <h5 class="prec" id="precio-principal11"><strike id="precio22"> <b>${element.precio}</b></strike></h5>
          
                  <h5 class="prec" id="descuento"><b></b></h5>
                    
                  <h5 class="prec" id="diferencia"><b></b></h5>
                  
              </div>
          
              <div class="personas-mirando">
                <p class="personas-mirando-cambiante"></p>
              </div>

              <div id="ofert-on-of">	
                  <p class="relojero" id="relojeando">La oferta acaba en:</p>
            
                  <div class="reloj" id="reloj">
                    <div class="hora" id="hora"><b>00</b></div>
                    <div class="min" id="min"><b>00</b></div>
                    <div class="seg" id="seg"><b>00</b></div>
                  </div>
              </div>

              <div class="boton-formulario1" id="boton-formulario1">
                <input class="boton" type="submit" value="REALIZAR PEDIDO Y PAGAR EN CASA" id="btn-enviar1">
              </div>	

              <div class="grids container-descriptions">

                <h3 id="descripcion1">${element?.descripcion1}</h3>
                <img src="${element.imgDescripcion1?.secure_url}" alt="" class="img-sec11 display11" id="img-sec11">
                <h3 id="descripcion2">${element?.descripcion2}</h3>
                <img src="${element?.imgDescripcion2?.secure_url}" alt="" class="img-sec11 display11" id="img-sec12">
                <h3 id="descripcion3">${element?.descripcion3}</h3>
                <img src="${element.imgDescripcion3?.secure_url}" alt="" class="img-sec11 display11" id="img-sec13">
                <h3 id="descripcion4">${element?.descripcion4}</h3>
                <img src="${element.imgDescripcion4?.secure_url}" alt="" class="img-sec11 display11" id="img-sec14">
                <h3 id="descripcion5">${element?.descripcion5}</h3>
                <img src="${element.imgDescripcion5?.secure_url}" alt="" class="img-sec11 display11" id="img-sec15">
              </div>

              

          </div>

          <div class="boton-formulario2" id="boton-formulario2">
            <input class="boton" type="submit" value="REALIZAR PEDIDO Y PAGAR EN CASA" id="btn-enviar2">
          </div>	

          <div class="disclaimer" id="disclaimer">
          
            <div>
              <img src="${disclaimer11}" alt="" class="disclaimer1" id="disclaimer1">
            </div>

            <div>
              <img src="${disclaimer12}" alt="" class="disclaimer2" id="disclaimer2">
            </div>

          </div>

          <footer>
              <div class="item-grid2" id="footer21">
                <i class="fa-solid fa-star"></i>
                <p><b>${footer1}</b></p>
              </div>
      
              <div class="item-grid2" id="footer22">
                <i class="fa-solid fa-face-smile-beam"></i>
                <p><b>${footer2}</b></p>
              </div>
      
              <div class="item-grid2" id="footer23">
                <i class="fa-solid fa-people-carry-box"></i>
                <p><b>${footer3}</b></p>
              </div>
      
              </footer>
              
              <div class="creator">
                <b>&copy;</b> 
                &nbsp;Created by&nbsp;  
                <b class="excelcior" id="excelcior">	 Diego Espinoza Reyna&nbsp; </b>
                  <b>&reg;</b>
              </div>

        </div>	
      
        `
        const displayNone1 = document.getElementById("img-sec11")
        const displayNone2 = document.getElementById("img-sec12")
        const displayNone3 = document.getElementById("img-sec13")
        const displayNone4 = document.getElementById("img-sec14")
        const displayNone5 = document.getElementById("img-sec15")

        const descripcion1 = document.getElementById("descripcion1")
        const descripcion2 = document.getElementById("descripcion2")
        const descripcion3 = document.getElementById("descripcion3")
        const descripcion4 = document.getElementById("descripcion4")
        const descripcion5 = document.getElementById("descripcion5")
        const display11 = document.querySelector(".display11")

        
        const imagen2 = document.querySelector(".imagen2")
        const imagen3 = document.querySelector(".imagen3");
        const imagen4 = document.querySelector(".imagen4")
        const imagen5 = document.querySelector(".imagen5")
        
        element.imgDescripcion1 && element.imgDescripcion1.secure_url != ""? console.log("si existe") : displayNone1.remove()
        element.imgDescripcion2 && element.imgDescripcion2.secure_url != ""? console.log("si existe") : displayNone2.remove()
        element.imgDescripcion3 && element.imgDescripcion3.secure_url != ""? console.log("si existe") : displayNone3.remove()
        element.imgDescripcion4 && element.imgDescripcion4.secure_url != ""? console.log("si existe") : displayNone4.remove()
        element.imgDescripcion5 && element.imgDescripcion5.secure_url != ""? console.log("si existe") : displayNone5.remove()
        
        element.descripcion1 && element.descripcion1 != ""? console.log("si existe") : descripcion1.remove()
        element.descripcion2 && element.descripcion2 != ""? console.log("si existe") : descripcion2.remove()
        element.descripcion3 && element.descripcion3 != ""? console.log("si existe") : descripcion3.remove()
        element.descripcion4 && element.descripcion4 != ""? console.log("si existe") : descripcion4.remove()
        element.descripcion5 && element.descripcion5 != ""? console.log("si existe") : descripcion5.remove()
        
        // element.imagen2? console.log("si existe") : imagen2.remove()
        // element.imagen3? console.log("si existe") : imagen3.remove()
        // element.imagen4? console.log("si existe") : imagen4.remove()
        
        
        const disclaimers = document.querySelector(".boton-formulario2")
        
        element.descripcion1 && element.descripcion1 != ""? console.log("si existe") : disclaimers.remove()
        element.imgDescripcion1 && element.imgDescripcion1.secure_url != ""? console.log("si existe") : disclaimers.remove()
        
        const mostrarFooter1 = document.getElementById("footer21")
        const mostrarFooter2 = document.getElementById("footer22")
        const mostrarFooter3 = document.getElementById("footer23")

        footer1 != "" ? console.log("si existe") : mostrarFooter1.remove()
        footer2 != "" ? console.log("si existe") : mostrarFooter2.remove()
        footer3 != "" ? console.log("si existe") : mostrarFooter3.remove()
        
        
        // productsDetails.style.transform = "translateY(0%)";
      const modal = document.getElementById("container-delatils-products-modal");
      const navbar = document.getElementById("navbar");
      const gordon = document.getElementById("gordon");
      // gordon.style.transform = "translateX(-9000000%)";
      // gordon.style.opacity = "0";
      gordon.style.overflowY = "hidden";
      gordon.style.visibility = "hidden";
      console.log(productsTotales)
      productsTotales.style.opacity = "1";
      productsTotales.style.visibility = "visible";
      modal.style.overflowY = "scroll"
      // navbar.style.marginTop = "1px"

        const mainImg = document.querySelector(".imagen1");
        const thumbnails = document.querySelectorAll(".img-sec");
        
        thumbnails.forEach(thumb =>{
          thumb.addEventListener("click", function(){
            mainImg.src = thumb.src;
          })
        })
        const diferencia = document.getElementById("diferencia");

        diferencia.style.transform = "translateX(-9000000%)";

      if (element.descuento != undefined || element.descuento != null) {
        // ------------inicio descuentos----
        
        const estrellas = document.getElementById("estrellas");
        const precio222 = document.getElementById("precio22");
        const textNombre111 = document.getElementById("textNombre11");
        const descuento = document.getElementById("descuento");
        const diferencia = document.getElementById("diferencia");

        diferencia.style.transform = "translateX(0)";
        
        estrellas.style.borderBottom = "4px solid #aaa";
        estrellas.style.width = "100%";
        estrellas.style.padding = "0";
        estrellas.style.paddingBottom = "6px";
        precio222.style.paddingLeft  = "0";
        precio222.style.paddingTop  = "5px";
        textNombre111.style.padding = "0 0 0 0";
        // textNombre111.style.margin = "-11px 0 0 0";
        
        precio222.innerHTML = `${divisa} ${element.precio}`;
        
        // console.log(res[0][0].precio);
        const h = element.precio;
        // console.log(res[0][4].descuento);
        
        let f = parseInt(h);
        
        let u = f - (element.descuento * f);
        // console.log(u);
        
        // console.log(parseInt(f));
        descuento.innerHTML = `${divisa} ${Math.round(u)}`;
        
        descuento.style.paddingLeft  = "0";
        
        let r = f-u;
        diferencia.innerHTML = `AHORRAS ${divisa} ${Math.round(r)}`;
        // diferencia.style.paddingLeft  = "0";
        diferencia.style.marginTop  = "10px";
        descuento.style.paddingRight = "10px";
        precio222.style.paddingRight = "10px";
        // precio222.style.color = "#48ac98";
        
        
        const hora1 = document.getElementById("hora");
        const min1 = document.getElementById("min");
        const seg1 = document.getElementById("seg");
        const reloj1 = document.getElementById("reloj");
        const reloj0 = document.getElementById("relojeando");
        
        if ( element.descuento == 0 || element.descuento == "q") {
          precio222.style.opacity = "0";
          diferencia.style.opacity = "0";
          descuento.innerHTML = `${divisa} ${Math.round(f)}`;
          descuento.style.marginLeft  = "-90px";
          
          reloj0.remove();
          reloj1.remove();
          hora1.remove();
          min1.remove();
          seg1.remove();
          
        }
        
        // ------------fin descuentos----

         // --------reloj--------------inicio
     
          const getRemainingTime = deadline => {
            let now = new Date(),
                remainTime = (new Date(deadline) - now + 1000) / 1000;
                remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2);
                remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2);
                remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2);
          
            return {
              remainSeconds,
              remainMinutes,
              remainHours,
              remainTime
            }
          };
    
      const countdown = (deadline, hora, min, seg, finalMessage) => {
        const hora1 = document.getElementById("hora");
        const min1 = document.getElementById("min");
        const seg1 = document.getElementById("seg");
        const reloj1 = document.getElementById("reloj");
      
        const timerUpdate = setInterval( () => {
          let t = getRemainingTime(deadline);
          hora1.innerHTML = `${t.remainHours}h`;
          min1.innerHTML = `${t.remainMinutes}m`;
          seg1.innerHTML = `${t.remainSeconds}s`;
      
          if(t.remainTime <= 1) {
            clearInterval(timerUpdate);
            reloj1.innerHTML = finalMessage;
          }
      
        }, 1000)
      };
    
    
     countdown(horacio[0], 'hora', "min", "seg", '¡Terminó la oferta!');
    
      // -------------reloj--------------fin
        
      }else{
        const precioPrincipal3 = document.getElementById("precio-principal11");
        precioPrincipal3.innerHTML = `<b id="precio22">${divisa} ${element.precio}</b>`
        const timer = document.getElementById("ofert-on-of")
        timer.remove();
      }


          const personasMirando = document.querySelector(".personas-mirando-cambiante");
          
          personasMirando.innerHTML = `👁️ ${Math.round(Math.random()*(11-2)+2)} están mirando este producto<br>🚚 Envío a todo el país`;
          
          setInterval( () => {
            personasMirando.innerHTML = `👁️ ${Math.round(Math.random()*(11-2)+2)} están mirando este producto<br>🚚 Envío a todo el país`;
          },10000);

          // ------------------------------fin reloj + perosnas mirando          
          // formulario compra

            const botonFormulario1 = document.getElementById("btn-enviar1")
            const botonFormulario2 = document.getElementById("btn-enviar2")
            const formularioCompra = document.querySelector(".modal-formulario")
            const cerrarFormularioCompra = document.querySelector(".cerrar-modal-formulario")
            const fotoFormularioCompra = document.getElementById("gatoncio")
            const nombreFormularioCompra = document.getElementById("nombrePrincipal")
            const precio1FormularioCompra = document.getElementById("precioPrincipal2")
            const precio2FormularioCompra = document.getElementById("precioPrincipal")
            const precio3FormularioCompra = document.getElementById("precioPrincipal1")

            fotoFormularioCompra.src = element.imagen1.secure_url
            nombreFormularioCompra.innerHTML = `${element.nombre}`

            element.descuento != "" ? precio1FormularioCompra.innerHTML = `${res[3][0].divisa} ${element.precio*(1-element.descuento)}` : precio1FormularioCompra.innerHTML = `${res[3][0].divisa} ${element.precio}`;

            element.descuento != "" ? precio2FormularioCompra.innerHTML = `${res[3][0].divisa} ${element.precio*(1-element.descuento)}` : precio1FormularioCompra.innerHTML = `${res[3][0].divisa} ${element.precio}`;

            element.descuento != "" ? precio3FormularioCompra.innerHTML = `${res[3][0].divisa} ${element.precio*(1-element.descuento)}` : precio1FormularioCompra.innerHTML = `${res[3][0].divisa} ${element.precio}`;



            

            botonFormulario1?.addEventListener("click", function (){
              // e.preventDefault();
              formularioCompra.style.opacity = "1"
              formularioCompra.style.visibility = "visible"
            })
            botonFormulario2?.addEventListener("click", function (){
              // e.preventDefault();
              formularioCompra.style.opacity = "1"
              formularioCompra.style.visibility = "visible"
            })

            cerrarFormularioCompra.addEventListener("click", function (){
              // e.preventDefault();
              formularioCompra.style.opacity = "0"
              formularioCompra.style.visibility = "hidden"
            })

            
            let btnEnviar = document.getElementById("btn-enviar11");

            //------------------validacion de formulario--------

            const resultado = document.querySelector(".resultado");
            const nombre = document.getElementById("nombre");
            const celular = document.getElementById("celular");
            const correo = document.getElementById("correo");
            const direccion = document.getElementById("direccion");
            const referencia = document.getElementById("referencia");
            

            btnEnviar?.addEventListener("click", async (e)=>{
              e.preventDefault();
              const validarCampos = ()=>{
                let error = [];
                if (nombre.value.length < 2) {
                  error[0] = true;
                  error[1] = "El nombre es invalido";
                  return error;
                } else if (celular.value.length != 9 ||
                            celular.value[0] != 9){
                  error[0] = true;
                  error[1] = "El numero es invalido";
                  return error;
                } else if (direccion.value.length < 3) {
                  error[0] = true;
                  error[1] = "La direccion es invalida";
                  return error;
                } else if (correo.value.length < 3) {
                  error[0] = true;
                  error[1] = "El correo es invalido";
                  return error;
                } else if (referencia.value.length < 3) {
                  error[0] = true;
                  error[1] = "La referencia es invalida";
                  return error;
                }

              error[0] = false;
              return error;

              }
              
              console.log("btnEnviar", 900)
              
              // console.log(gg)
              // e.preventDefault();
              let error = validarCampos();
              if (error[0]) {
                // e.preventDefault();
              
                resultado.innerHTML = error[1];
                resultado.classList.add("red");
                resultado.classList.remove("green");
                console.log("hellitoopresa")
                // console.log(gg)
                
              } else {
                  console.log("hellitoo")
                  // e.preventDefault(e);
                  
                  resultado.classList.add("green");
                  resultado.classList.remove("red");
          
                  
                      element.descuento?

                      await fetch("http://localhost:3001/pedidos", {
                        method: "POST",
                        mode: "cors",
                        headers: {"Content-Type": "application/json"},
                        body: JSON.stringify({
                          "nombreCliente": nombre.value,
                          "celularCliente": celular.value,
                          "correoCliente": correo.value,
                          "direccionCliente": direccion.value,
                          "referenciaCliente": referencia.value,
                          "categoriaProducto": element.categoria,
                          "nombreProducto": element.nombre,
                          "precioProducto": element.precio*(1-element.descuento)
                        })
                    
                      }) :
                      await fetch("http://localhost:3001/pedidos", {
                        method: "POST",
                        mode: "cors",
                        headers: {"Content-Type": "application/json"},
                        body: JSON.stringify({
                          "nombreCliente": nombre.value,
                          "celularCliente": celular.value,
                          "correoCliente": correo.value,
                          "direccionCliente": direccion.value,
                          "referenciaCliente": referencia.value,
                          "categoriaProducto": element.categoria,
                          "nombreProducto": element.nombre,
                          "precioProducto": element.precio
                        })
                    
                      }) 
          
                    
                        
                  
                      element.descuento ?
                      setTimeout(function() {
                        location.href = ("https://api.whatsapp.com/send?phone="+ `${res[3][0].numeroTelefonico}` + "&text=Hola! 👋 %20Mi%20nombre%20es%20" + `${nombre.value}` + "%20Vivo%20en%20" + `${direccion.value}` + "%20deseo%20adquirir%20el%20siguiente%20producto:\n\n                                                     *                                                               " + "✅" + `${element.nombre}` +  `, ${res[3][0].divisa}` + ` ${element.precio * (1 - element.descuento)}` + "                                                  *"+`${element.imagen1.secure_url}`);
                      }, 500)
                      :
                      setTimeout(function() {
                        location.href = ("https://api.whatsapp.com/send?phone="+ `${res[3][0].numeroTelefonico}` + "&text=Hola! 👋 %20Mi%20nombre%20es%20" + `${nombre.value}` + "%20Vivo%20en%20" + `${direccion.value}` + "%20deseo%20adquirir%20el%20siguiente%20producto\n\n                                                     *                                                               " + "✅" + `${element.nombre}` + `, ${res[3][0].divisa}` + ` ${element.precio}` + "                                                  *"+`${element.imagen1.secure_url}`);
                      }, 700)
          
                  // console.log("btnEnviar22");
                  resultado.innerHTML = "Solicitud enviada correctamente"
              
                  
                }
              })
              


            //--------------------fin forimulario compras-------------------------------

          
    }else if (cerrarModal == "cerrar-modal") {
          // productsDetails.style.transform = "translateY(0%)";
          const modal = document.getElementById("container-delatils-products-modal");
          const navbar = document.getElementById("navbar");
          const gordon = document.getElementById("gordon");
          const productsTotales = document.getElementById("container-delatils-products");
          // gordon.style.transform = "translateX(-9000000%)";
          // gordon.style.opacity = "0";
          gordon.style.overflowY = "scroll";
          gordon.style.visibility = "visible";
          console.log(productsTotales)
          productsTotales.style.opacity = "1";
          productsTotales.style.visibility = "hidden";
          modal.style.overflowY = "hidden"
          productsTotales.transform = "translateX(9000000)";

          // productsTotales.remove()
        }  
        
      console.log(document.URL)

    })

    
    
  })


}







