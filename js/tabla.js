document.addEventListener('DOMContentLoaded', function(){
    fetch('https://backend-3w6no0c6w-eduard-beltrans-projects.vercel.app/')
    .then(response => response.json())//lo combierte en formato json
    .then(data => { // Guarda la informacion en la variable data
       // Accedemos a la etiqueta que va a mostrar los datos
       const tableBody = document.getElementById('campeones')
       // Recorremos cada uno de los datos que trae el servicio
       data.forEach(user =>{
           // Creamos una etiqueta <tr> usando js
           const row = document.createElement('tr')
           // Creamos una etiqueta <td> usando js
           const nombre = document.createElement('td')
           // Agregamos el valor ala etiqueta
           nombre.textContent = user.nombre
           // Agregamos el <tr> al <td>
           row.appendChild(nombre)
           
           const clase = document.createElement('td')
           clase.textContent = user.clase
           row.appendChild(clase)    
 
           const carril = document.createElement('td')
           carril.textContent = user.carril
           row.appendChild(carril)
           
           const costoEa = document.createElement('td')
           costoEa.textContent = user.costoEa
           row.appendChild(costoEa)

           const costoRp = document.createElement('td')
           costoRp.textContent = user.costoRp
           row.appendChild(costoRp)

           const acciones = document.createElement('td')
           const editar = document.createElement('a')
           editar.textContent = 'Editar'
           editar.href = './registrarse.html?id='+user._id
           editar.classList.add('btn', 'btn-warning')

           const eliminar = document.createElement('button')// Creamos la etiqueta button
           eliminar.textContent = 'Eliminar'// Agregamos el texto al boton
           eliminar.classList.add('btn', 'btn-danger')

           eliminar.addEventListener('click', function(){ // Creamos un evento al dar click
               const textoConfirmacion = 'Esta seguro que decea eliminar a ' + user.nombre + ' ?'
               if(confirm(textoConfirmacion)){// Mostramos un mensaje de confirmacion
                   eliminarCampeon(user._id, row)
               }
           })

           acciones.appendChild(eliminar)
           acciones.appendChild(editar)
           row.appendChild(acciones)


           // Agregamos el <tr> a la tabla
           tableBody.appendChild(row)

       })
    })
})

// Funcion para eliminar un usuario, pasandole el id 
function eliminarCampeon(id, row){
   //Esta es la url de eliminacion, por ejemplo
   //http://localhost:3000/usuario/65465df654fda45dff
   const deleteUrl = 'https://backend-3w6no0c6w-eduard-beltrans-projects.vercel.app//campeon/'+id
   //Ejecuto la accion del API 
   fetch(deleteUrl, { 
       method: 'DELETE' // Defino el metodo a utilizar
   })
   .then(response => {
       //Obtengo la respuestadel servidor
       if(response.status == 200){// Validando que sea exitosa 
           row.remove()// Elimino al usuario de la lista
           alert('Usuario eliminado correctamente') 
       }else{
           alert('Error eliminando al usuario')// Muestro mensaje de error
       }
   })
   .catch(error => console.log('Error', error))
}