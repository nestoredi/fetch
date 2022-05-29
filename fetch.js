let pintura= document.getElementById('caja')
fetch('pinturas.json')
.then(response =>response.json())
.then (pinturas =>{
    pinturas.forEach((pintura)=>{
        let {id,nombre,autor,precio,stock}= pintura
        caja.innerHTML += `
        <h3> Nombre: ${nombre}</h3>
        <p> Autor :${autor}</p>
        <p> Precio :${precio}</p>
        <p> Stock :${stock}</p>
        `
    })
})