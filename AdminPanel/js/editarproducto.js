//que necesitamos para la función con el api, una seria editarproducto
//y el otro seria obtenerproducto

import { editarproducto,obtenerproducto } from './api.js';
import { mostrarAlerta } from "./mostrarAlerta.js"


(function (){
    //hacer selectores
    const nombreInput = document.querySelector('#nombre');
    const precioInput = document.querySelector('#precio');
    const categoriaInput = document.querySelector('#categoria');
    const formulario = document.querySelector('#formulario');
    const idInput = document.querySelector('#id');

    document.addEventListener('DOMContentLoaded', async()=>{
        //const parametroURL = new URLSearchParams(parametroURL.get('id')); //obtenemos el id del producto, esto era lo que pusismo en app sobre el id que usariamos en otra function de JS con las rutas
        //validar que el producto exista
        const parametroURL = new URLSearchParams(window.location.search)
        //console.log(window.location.search)

        //obtener el id del producto
        const idProducto = parseInt(parametroURL.get('id'))
       // console.log(idProducto)

        
        const producto = await obtenerproducto(idProducto)
        // console.log(producto)

        mostrarProducto(producto);

        //registro de la actualizacion del producto, seria con el boton
        formulario.addEventListener('submit', validarProducto)
    })

    function mostrarProducto(producto){
        const {nombre,precio,categoria,id} = producto; //hacer un destructury
        nombreInput.value = nombre;
        precioInput.value = precio;
        categoriaInput.value = categoria;
        idInput.value = id;
    }

    //funcion para validar el producto
    async function validarProducto(e){
        e.preventDefault();
        //hacer un objeto:
        const producto = {
            id: parseInt(idInput.value),
            nombre:nombreInput.value,
            precio:parseInt(precioInput.value),
            categoria:parseInt(categoriaInput.value)
        } //ahora se hace la validacion

        if(validar(producto)){
           // console.log('todos los campos son obligatorios') 
            mostrarAlerta('todos los campos son obligatorios')
            return
        }else{
            await editarproducto(producto);
            window.location.href = 'index.html'
        }

        function validar (obj){
            return !Object.values(obj).every(i=>i!=='') //aqui ya esta la validacion, define los values, y pasa por cada una de los valores del objeto y valida si estos campos estan vacios 
        }
    }

})(); //esta forma de poner esta function es para que se ejecute en forma automatica cuando se llama
//si no tiene los parentesis al final no se ejecutaras