let pintura= document.getElementById('caja')
fetch('pinturas.json')
.then(response =>response.json())
.then (pinturas =>{
    pinturas.forEach((pintura)=>{
        let {id,nombre,autor,precio,stock,imagen}= pintura
        caja.innerHTML += `
    <div class="divcard">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body position">
      <img  src = "${imagen}">
        <h5>${nombre}</h5>
        <p> Autor :${autor}</p>
        <p> Precio :${precio}</p>
        <p> Stock :${stock}</p></div>
        <a href="./${id}.html" class="btn btn-primary " id="boton${id}">ver pintura</a>
      </div>
    </div>
  </div>
 
        `
    })
})