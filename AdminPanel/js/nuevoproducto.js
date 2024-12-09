import { nuevoproducto } from './api.js';
import { mostrarAlerta } from "./mostrarAlerta.js"

const formulario = document.querySelector('#formulario');
formulario.addEventListener('submit',validarProducto)

async function validarProducto(e){
    e.preventDefault(); //como es tipo submit hago el preventDefault
   
    const nombre = document.querySelector('#nombre').value;
    const precio = parseInt(document.querySelector('#precio').value);
    const categoria = parseInt(document.querySelector('#categoria').value);
    //crear una estructura para guardar los del nuevo producto
    const producto = {
        nombre,
        precio,
        categoria
    }

    if(validar(producto)){
        //console.log('Todos los campos son obligatorios')
        mostrarAlerta('Todos los campos son obligatorios')
        return
    }else{
        await nuevoproducto(producto)
       // console.log('Campos llenos')
        window.location.href = 'index.html'
    }
}

function validar(obj){
 return !Object.values(obj).every(i=>i!=='')

}
