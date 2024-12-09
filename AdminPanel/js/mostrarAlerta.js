export function mostrarAlerta(mensaje){
    const alerta = document.querySelector('.bg-red-100')

    if (!alerta){ //con esta negacion, si existe, no se repite la notificacion de alerta, pero sino existe, entra en la condicion
        const alert = document.createElement('p')
        alert.classList.add('bg-red-100','text-center','border-red-500','text-red-700','px-4','py-3','rounded','max-w-lg','mx-auto')

        alert.innerHTML = `
        <strong class='font-bold'>Error!!!</strong>
        <span class='block sm:inline'>${mensaje}</span> 
        `
        formulario.appendChild(alert)

        setTimeout(()=>{
            alert.remove()
        },2000)
    }
}