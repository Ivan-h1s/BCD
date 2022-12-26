function obtenerApiDataSync() {
    fetch("https://api.chucknorris.io/jokes/random")//ruta de la api 
    .then(response => response.json())
    //.then(json => console.log("Este es el json: ", json))
    .then(json => console.log(json.value))//llamado a la propiedad "value" 
    //.catch((error) => console.log("Hubo un error: ", error)) 
    //.finally(() => console.log("Fetch finalizado"));
}
obtenerApiDataSync();

//