 // Ejecuta una secion cuando carga la pagina
 document.addEventListener('DOMContentLoaded', function() {

    //Obtenemos el id de la url
    const searchParams = new URLSearchParams(window.location.search)
    const id = searchParams.get("id") // Asignamos el id en una variable

    // Acceder a la informacion de la etiqueta form
    const form = document.getElementById('guardarCampeon')
    //Ejecuto una accion cuando el formulario se envia
    form.addEventListener('submit', function(event){
        event.preventDefault(); // Evita que el formulario recarge la pagina al enviar
        //creo el objeto que voy a almacenar
        const data = {

            nombre: document.getElementById('nombre').value,
            clase: document.getElementById('clase').value,
            carril: document.getElementById('carril').value,
            costoEa: document.getElementById('costoEa').value,
            costoRp: document.getElementById('costoRp').value
     
        }

        if(searchParams.has('id')){// Si llega un id en la URL -> Actualizamos
            submitForm(data, "https://backend-3w6no0c6w-eduard-beltrans-projects.vercel.app/campeon/"+id, "PUT")
        }else{
            submitForm(data, "https://backend-3w6no0c6w-eduard-beltrans-projects.vercel.app/", "POST")
        }

    })

    if(searchParams.has('id')){
        const id = searchParams.get("id")// Asignamos el id a una variante
        // Consulta la informacion del usuario que tiene ese id 
        fetch('https://backend-3w6no0c6w-eduard-beltrans-projects.vercel.app/campeon/'+id)
        .then(response => response.json())// Lo converte a formato json
        .then(data => {
            //Asognamos la informacion al formurario

            document.getElementById('nombre').value = data.nombre
            document.getElementById('clase').value = data.clase
            document.getElementById('carril').value = data.carril
            document.getElementById('costoEa').value = data.costoEa
            document.getElementById('costoRp').value = data.costoRp
        })
    }
})

function submitForm(data, url, method){
    fetch(url, {
            method: method, 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            return response.json()
        })
        .then(data => {
            if(data.status == "success"){
                alert('Usuario registrado correctamente')
                window.location.href = "/usuario/infoCampeones.html";
            }else{
                alert(data.message)
            }
        })
        .catch(error => console.log("Error: ", error))
}