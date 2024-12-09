//se coloca import para usar las apis o funcion que creamos
//es decir: import { api } from './api.js';
//luego especificamos con el nombre, y con el from especifico donde esta

import { obtenerproductos, eliminarproducto } from "./api.js" //aqui solo estoy exportando son funciones, por eso se coloca el .js

//cuando son modulos es que van sin el .js 

const listado = document.querySelector('#listado-Productos')



//evento

document.addEventListener('DOMContentLoaded', mostrarProductos)
listado.addEventListener('click', confirmarEliminar) 


//promise mdn 

async function mostrarProductos(){
    const productos = await obtenerproductos() //se coloca el async await es para seguir lo mismo del otro archivo api.js
    //es para traer el json del mismo formato que queremos, y para si hay muchas personas conectadas no haya un error
    console.log(productos)

    //validacion

    productos.forEach(i => { //para iterar 
        const {nombre,precio,categoria,id}=i

        const row = document.createElement('tr')
        row.innerHTML += `
        <td class="px-6 py-4 border-b ">
            <p>${nombre}</p>
        </td>

        <td class="px-6 py-4 border-b ">
        <p>${precio}</p>
        </td>

        <td class="px-6 py-4 border-b ">
            <p>${categoria}</p>
        </td>

        <td class="px-6 py-4 border-b">
            <a href="editar-producto.html?id=${id}" class="text-teal-600 hover:text-teal-900">Editar</a>
            <a href="#" data-producto="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
        </td>

        `

        //los del id en la ruta, es que hay un metodo en JS que se puede extraer campos, elementos y mas con una ruta


        listado.appendChild(row) //para agregar el row a la tabla, ya que es donde lo estamos agg los elementos
    });
}



async function confirmarEliminar(e){
    if(e.target.classList.contains('eliminar')){
        //console.log('Eliminar')
        const productoID = parseInt(e.target.dataset.producto) //lo mando como string, por eso el parseint
        //console.log(productoID)

        const confirmar = confirm('¿Desea eliminar el producto?') //para que se muestre un mensaje de confirmacion, trae un booleano
        if(confirmar){
            await eliminarproducto(productoID)
        }
    }
}
