//Estamos creando nuestras propias apis

const url = 'http://localhost:3000/menu'

// CRUD___________________________________________
// Create = crear, registrar, ->Metodo POST
// Read = consultar extraer, ver, mostrar -> GET
// Update = actualizar -> POST, recomiendan PUT (Utilizamos), ya que yo le envio cual es el ID, como esta abajo con las rutas sin necesidad de buscar todo, es mas rapida
// Delete = 

//DOCUMENTACION DE MONGOOSE, todo para la consulta de la BD

//Todo lleva async await, hay que considerar que muchas personas se pueden conectar al mismo tiempo, y esto permite de forma asincrona // procesos individuales

//api de lo que seria crear un producto
export const nuevoproducto = async producto =>{
      try{
        await fetch(url,{
          method: 'POST', //TIPO DE METODO
          body:JSON.stringify(producto), //se indica cual es la informacion que vamos enviar, solo datos tipo string
          headers:{ //CABECERAS, tipo de contenido que se insertara
            'Content-Type': 'application/json'},
        })
      } catch (error){
        console.log('Error')
      }
}

//api de lo que seria leer un producto, o hacer una consulta
export const obtenerproductos = async ()=>{
  //me retorna EL LISTADO DE PRODUCTOS QUE SE ENCUENTRA
  //
  try{
    //NOTA: aqui deberia ir un metodo GET, cuando se haga y se agg la BD, por ahora no lo tiene porque es un recurso que nosotros estamos creando local
   // y para poder acceder debemos utilizar find, y find tiene varias propiedades en mongo
    const resultado =await fetch(url)
    const productos = await resultado.json()
    return productos //con solo una consulta debemos retornar

  }catch(error){
    console.log(error)
  }
}

//api para hacer una sola consulta, una sola de tantas, lo estamos llamando por id
export const obtenerproducto = async id =>{
  //me retorna 1 producto
  //en el endpoint de menu localhost:3000/menu dado un id
    try{
      const resultado = await fetch(`${url}/${id}`) //caso particular y se concatena con el id
      const producto = await resultado.json()
      return producto
    }catch(error){
      console.log('Error')
    }
}


//api para editar un producto
export const editarproducto = async producto =>{
  try{
    await fetch(`${url}/${producto.id}`,{ 
      method: 'PUT', //metodo para actualizar para cuando me envian directamente un id, seria put
      body:JSON.stringify(producto),
      headers:{
        'Content-Type': 'application/json'},
    })
  }catch(error){
    console.log('Error')
  }
}

//api para eliminar un producto, se llama por id
export const eliminarproducto = async id =>{
  try{
    await fetch(`${url}/${id}`,{
      method: 'DELETE', //metodo para eliminar
    })
  }catch(error){
    console.log('Error')
  }
}

//NOTA: Para poder usar estas funciones, debo utilizar la palabra export
//para asi usarlo en otros archivos , de lo contrario no se puede utilizar
//